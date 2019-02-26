$(function(){
  var messages = $('.body');
  var path = window.location.pathname;
  
  function buildHTML(message){
  var bodyImage = message.image ? `<img class="body__content-image" src="${message.image}">` : "" ;
  var html = `<div class="body__content", data-id=${ message.id }>
                <div class="body__content-name">${ message.user_name }</div>
                <div class="body__content-time">${ message.time }</div>
                <div class="body__content-text">${ message.body }</div>
                ${bodyImage}
              </div>`;
  return html;
  }
  
  $('.new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href;
    var textField = $('.footer__form-text');
    var imageFile = $(".footer__form-chatfile-image");
    var sendBtn = $(".footer__form-send");
    var resetForm = textField.val("") & imageFile.val("");
    
    
    $.ajax({
      url: href,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    
    .done (function(data){
      var html = buildHTML(data);
      $('.body').append(html);
      $('.body').animate({scrollTop: $('.body')[0].scrollHeight}, 'fast');
      resetForm;
      sendBtn.removeAttr("disabled");
    })
    .fail(function(data){
      alert('error');
      resetForm;
      sendBtn.removeAttr("disabled");
    });
  });
  
  if(path.match('/messages') && $('.body__content').length){
    var timer = setInterval(function(){
      var lastMessageId = messages.children().last().data('id');
      $.ajax({
        type:     'GET',
        url:       window.location.href,
        data: { last_message_id: lastMessageId },
        dataType: 'json'
      })
      .done(function(data){
        $.each(data, function(i, message){
          var html = buildHTML(message);
          messages.append(html);
        });
      });
    }, 3000);
  }
  
  $(this).on('turbolinks:click', function() {
    clearInterval(timer);
  });
});