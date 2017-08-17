var Nanocomponent = require('nanocomponent')
var html = require('bel')
var onIdle = require('on-idle')
var url = require('url')
var twitterWidgetsLoader = require('./loader')

class TwitterComponent extends Nanocomponent {
  createElement (tweetURL) {
    this.tweetURL = tweetURL
    return html`<div>
      <span class="tweet">loading <a href="${tweetURL}">${tweetURL}</a></span>
    </div>`
  }

  update (tweetURL) {
    return this.tweetURL === tweetURL
  }

  loadTweet (el) {
    var tweetID = url.parse(this.tweetURL).pathname.split('/').pop()
    if (!el) return console.warn(`cant render ${tweetID} on unmounted component`)
    onIdle(function () {
      twitterWidgetsLoader.load(function (twttr) {
        el.innerText = ''
        twttr.widgets.createTweet(tweetID, el)
      })
    })
  }

  load (el) {
    this.loadTweet(el)
  }

  afterupdate (el) {
    this.loadTweet(el)
  }
}

module.exports = TwitterComponent
