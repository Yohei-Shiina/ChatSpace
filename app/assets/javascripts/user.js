function buildHTML(user){
  var html = `<div class="chat-group-user clearfix">
  <p class="chat-group-user__name">${user.name}</p>
    <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</a>
  </div>`
  return html;
}
// function selectedUser(user_id, user_name){
  
// }

$(function(){
  
  $('#user-search-field').on('keyup', function(e){
    var input = $('#user-search-field').val()
    
    $.ajax({
      url: '/users',
      type: 'GET',
      data: { keyword: input },
      dataType: 'json',
    })
    
    .done(function(users){
        console.log(users);
      if(users.length !== 0){
        $('#user-search-result').empty();
        
        users.forEach(function(user){
          var html = buildHTML(user);
          $('#user-search-result').append(html);
        });
      }
    })
  })
  
  
  // $(document).on('click', '.user-search-add', function(){
  //   var user_id = $(this).attr('data-user-id');
  //   var user_name = $(this).attr('data-user-name');
  //   selectedUser(user_id, user_name);
  // })
})