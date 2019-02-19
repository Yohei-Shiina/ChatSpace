$(function(){
  $('.new_message').on('submit', function(e){
    e.preventDefault(); //再描画をとめる
    console.log(this)
  });
});