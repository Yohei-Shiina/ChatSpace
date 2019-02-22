json.name @message.user.name
json.body @message.body
json.image @message.image.url
json.time @message.created_at.strftime("%y年%m月/%d日/%H時%M分")