var test = require('tape')
var window = require('global/window')
var TwitterComponent = require('./')

function makeID () {
  return 'testid-' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
}

function createTestElement () {
  var testRoot = document.createElement('div')
  testRoot.id = makeID()
  document.body.appendChild(testRoot)
  return testRoot
}

function renderAndMount (testEl, tweet) {
  var el = tweet.render('https://twitter.com/uhhyeahbret/status/897603426518876161')
  testEl.appendChild(el)
}

test('render a tweet maybe', function (t) {
  var testRoot = createTestElement()
  var tweet = new TwitterComponent()

  t.doesNotThrow(renderAndMount.bind(null, testRoot, tweet), 'Able to render a tweet')

  window.setTimeout(function () {
    t.true(tweet.element.children[0].classList.contains('twitter-tweet'), 'A tweet iframe is added')
    t.end()
  }, 1000)
})
