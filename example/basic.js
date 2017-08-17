var Tweet = require('../')

var tweet1 = new Tweet()
var tweet2 = new Tweet()

document.body.appendChild(tweet1.render('https://twitter.com/uhhyeahbret/status/897603426518876161'))
document.body.appendChild(tweet2.render('https://twitter.com/yoshuawuyts/status/895338700531535878'))
