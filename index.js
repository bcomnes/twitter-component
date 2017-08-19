var Nanocomponent = require('nanocomponent')
var html = require('bel')
var onIdle = require('on-idle')
var url = require('url')
var twitterWidgetsLoader = require('./loader')

class TwitterComponent extends Nanocomponent {
  constructor (opts) {
    super()
    opts = Object.assign({
      placeholder: true
    }, opts)
    this.opts = opts
  }

  createElement (tweetURL) {
    this.tweetURL = tweetURL
    if (this.opts.placeholder) return html`<div>loading tweet: ${tweetURL}</div>`
    return html`<div></div>`
  }

  update (tweetURL) {
    return this.tweetURL !== tweetURL
  }

  loadTweet (el) {
    var tweetID = url.parse(this.tweetURL).pathname.split('/').pop()
    if (!el) return console.warn(`cant render ${tweetID} on unmounted component`)
    onIdle(function () {
      window.requestAnimationFrame(function () {
        twitterWidgetsLoader.load(function (twttr) {
          while (el.hasChildNodes()) el.removeChild(el.lastChild)
          twttr.widgets.createTweet(tweetID, el)
        })
      })
    })
  }

  load (el) {
    this.loadTweet(el)
  }

  afterupdate (el) {
    this.loadTweet(el)
  }

  afterreorder (el) {
    this.loadTweet(el)
  }
}

module.exports = TwitterComponent
