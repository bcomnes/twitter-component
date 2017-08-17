var html = require('choo/html')
var choo = require('choo')
var Tweet = require('../')

var tweet1 = new Tweet()
var tweet2 = new Tweet()

var app = choo()
app.route('/', mainView)
if (typeof window !== 'undefined') app.mount('body')

function mainView (state, emit) {
  return html`
    <body>
      <div id="app">
        <h1>Embed some tweets in Choo</h1>
        ${tweet1.render('https://twitter.com/uhhyeahbret/status/897603426518876161')}
        ${tweet2.render('https://twitter.com/yoshuawuyts/status/895338700531535878')}
      </div>
    </body>`
}
