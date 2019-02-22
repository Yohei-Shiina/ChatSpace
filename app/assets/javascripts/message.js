function buildHTML(message){
  var bodyImage = message.image ? `<img class="body__content-image" src="${message.image}">` : "" ;
  var html = `<div class="body__content">
                <div class="body__content-name">${ message.name }</div>
                <div class="body__content-time">${ message.time }</div>
                <div class="body__content-text">${ message.body }</div>
                ${bodyImage}
              </div>`;
  return html;
}
  
$(function(){
  $('.new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href;
    var textField = $('.footer__form-text');
    var imageFile = $(".footer__form-chatfile-image");
    var sendBtn = $(".footer__form-send");
    
    
    $.ajax({
      url: href,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    
    .done (function(data){
      console.log(data);
      var html = buildHTML(data);
      $('.body').append(html);
      $('.body').animate({scrollTop: $('.body')[0].scrollHeight}, 'fast');
      console.log($('.body'));
      var countA = $('.body').children().length;
      console.log(countA);
      
      
      textField.val("");
      imageFile.val("");
      sendBtn.removeAttr("disabled");
    })
    .fail(function(data){
      alert('error');
      textField.val("");
      imageFile.val("");
      sendBtn.removeAttr("disabled");
    });
  });
});