function searchMember(user){
  var html = `<div class="chat-group-user clearfix">
  <p class="chat-group-user__name">${user.name}</p>
    <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</a>
  </div>`
  
  return html;
}
function selectedUser(user_id, user_name){  
  var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                <input name='group[user_ids][]' type='hidden' value=${user_id}>
                <p class='chat-group-user__name'>${user_name}</p>
                <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
              </div>`
  $('#chat-group-users').append(html)
}

$(function(){
  var search_list =$('#user-search-result')
  
  $('#user-search-field').on('keyup', function(e){ //キーが押されたら
    var input = $('#user-search-field').val()
    
    
    $.ajax({ //ajaxの通信設定
      url: '/users',
      type: 'GET',
      data: { keyword: input },
      dataType: 'json',
    })
    
    .done(function(users){ //通信に成功したら
      if(users.length !== 0){
        search_list.empty();
        
        users.forEach(function(user){
          var html = searchMember(user);
          search_list.append(html);
        });
      }
    })
    .fail(function(users){ //通信に失敗したら
      alert('error');
    })
  });
  
  $(document).on('click', '.user-search-add', function(){ //追加がクリックされたら
    var user_id = $(this).attr('data-user-id');
    var user_name = $(this).attr('data-user-name');
    selectedUser(user_id, user_name);
    $(this).parent().remove(); //クリックされた要素の親要素を削除
  });
  
  $(".user-search-remove").on("click", function () { //削除がクリックされたら
      $(this).parent().remove(); //クリックされた要素の親要素を削除
  });
})