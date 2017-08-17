// Fixed a Broken UMD from twitter-widgets
// aka https://github.com/Prinzhorn/twitter-widgets
var TwitterWidgetsLoader = {
  src: '//platform.twitter.com/widgets.js',
  loading: false,
  listeners: [],
  interval: 50,

  load: function (callback) {
    var _this = this

    this.listeners.push(callback)

    if (window.twttr && window.twttr.widgets) {
      setTimeout(function () {
        _this.done()
      })
      return
    }

    if (this.loading) {
      return
    }

    this.loading = true

    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = this.src
    document.body.appendChild(script)

    this.poll()
  },

  poll: function () {
    if (window.twttr && window.twttr.widgets) {
      return this.done()
    }

    var _this = this

    setTimeout(function () {
      _this.poll()
    }, this.interval)
  },

  done: function () {
    while (this.listeners.length) {
      this.listeners.pop()(window.twttr)
    }
  }
}

module.exports = TwitterWidgetsLoader
