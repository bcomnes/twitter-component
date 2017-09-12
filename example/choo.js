var html = require('choo/html')
var choo = require('choo')
var Nanomap = require('nanomap')
var twitterFeed = require('noauth-twitterfeed')
var Tweet = require('../')

var app = choo()
app.use(tweetStore)
app.route('/', mainView)
if (typeof window !== 'undefined') app.mount('body')

var tweetMap = new Nanomap(Tweet)

function shape (tweet, i, array) {
  return {
    id: tweet.url,
    arguments: tweet.url
  }
}

function mainView (state, emit) {
  function onInput (ev) {
    emit('input', ev.target.value)
  }

  function onUpdate (ev) {
    console.log('click')
    emit('update')
  }

  return html`
    <body>
      <div id="app">
        <h1>Embed some tweets in Choo</h1>
        <input type="text" name="username" oninput=${onInput} value="${state.input}"/>
        <button onclick=${onUpdate}>update</button>
        ${state.err ? state.err.message : state.tweets.map(shape).map(tweetMap)}
      </div>
    </body>`
}

function tweetStore (state, emitter) {
  state.tweets = []
  state.err = null
  state.input = 'ninabreznik'
  emitter.on('DOMContentLoaded', function () {
    emitter.on('input', function (val) {
      state.input = val
    })
    emitter.on('update', function () {
      twitterFeed({
        username: state.input
      }, function (err, tweets) {
        if (err) {
          state.tweets = []
          state.err = err
        } else {
          state.tweets = tweets
        }
        emitter.emit('render')
      })
    })
    emitter.emit('update')
  })
}
