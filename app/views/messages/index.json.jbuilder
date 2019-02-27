json.array! @new_messages do |message|
  json.id         message.id
  json.user_name  message.user.name
  json.body       message.body
  json.image      message.image.url
  json.time       message.created_at.strftime("%y年%m月/%d日/%H時%M分")
end