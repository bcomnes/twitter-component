# twitter-component [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

A native DOM component wrapper for embedded tweets.

![](screenshot.png)

## Usage

```js
// Vanilla JS example
var TwitterComponent = require('twitter-component')

var tweet1 = new TwitterComponent()
var tweet2 = new TwitterComponent()

document.body.appendChild(tweet1.render('https://twitter.com/uhhyeahbret/status/897603426518876161'))
document.body.appendChild(tweet2.render('https://twitter.com/yoshuawuyts/status/895338700531535878'))

```

## Installation
```sh
$ npm install twitter-component
```
## API
### `TwitterComponent = require('twitter-component`)
Import `TwitterComponent` component class.

### `tweet = new TwitterComponent([opts])`
Create a new instance of the twitter component.  `opts` is an options objec that can have the following options:

```js
{
  placeholder: true // Enables placeholder text while loading tweet cards
}
```

### `tweet.render(tweetURL)`
Returns a div that, when mounted into the page, will be the target of `twttr.widgets.createTweet`.
Mounting the DOM node returned by `.render` will also load `platform.twitter.com/widgets.js` into the page, and any other side-effects and visitor tracking implications that script brings along with it.

**Twitter employees:** Please release a module version of `platform.twitter.com/widgets.js` because this took 5 hours of freetime™ of just trying to get caught up with your ever changing API and widget ecosystem.

Native DOM component model powered by [nanocomponent][nc] and [nanomorph][nm].

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/twitter-component.svg?style=flat-square
[3]: https://npmjs.org/package/twitter-component
[4]: https://img.shields.io/travis/bcomnes/twitter-component/master.svg?style=flat-square
[5]: https://travis-ci.org/bcomnes/twitter-component
[8]: http://img.shields.io/npm/dm/twitter-component.svg?style=flat-square
[9]: https://npmjs.org/package/twitter-component
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
[bel]: https://github.com/shama/bel
[yoyoify]: https://github.com/shama/yo-yoify
[md]: https://github.com/patrick-steele-idem/morphdom
[210]: https://github.com/patrick-steele-idem/morphdom/pull/81
[nm]: https://github.com/yoshuawuyts/nanomorph
[ce]: https://github.com/yoshuawuyts/cache-element
[class]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
[isSameNode]: https://github.com/choojs/nanomorph#caching-dom-elements
[onload]: https://github.com/shama/on-load
[choo]: https://github.com/choojs/choo
[nca]: https://github.com/choojs/nanocomponent-adapters
[nc]: https://github.com/choojs/nanocomponent
