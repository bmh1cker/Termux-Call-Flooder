var twilio = require('twilio')

var accountId = 'your acount sid here'
var accountToken = 'your account token here'

var client = twilio(accountId, accountToken)
var INTERVAL = 10000 // 10 seconds

var count = 0

var call = function() {
  return client.calls.create({
    url: 'https://<your ngrok random url>ngrok.com/call',
    to: '+<the spammers number>',
    from: '+1<the twilio phone number you purchased>'
  }, function (err, res) {
    if (err) return console.error(err)
    count++
    console.log('number ', count, 'status: ', res.status)
  })
}

call()
setInterval(call, INTERVAL)

