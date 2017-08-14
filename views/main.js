var html = require('choo/html')

var TITLE = '🚂🚋🚋'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <body class="sans-serif">
      <h1 class="f-headline pa3 pa4-ns">
        Choo choo!
      </h1>
    </body>
  `
}