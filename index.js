// Where our data lives
var url = 'https://docs.google.com:443/spreadsheet/pub'
  + '?key=0ApW-j0QNGJesdDMwbmhqcFFSVFdfUXR0Vy1XeVdJX1E'
  + '&single=true&gid=28&output=csv'
 
// // // // // // // // // // // // 
 
// 1. Fetch
// 2. Transform
// 3. Display
// 4. Interact
// 5. Publish

// load our fetch module
var fetch = require('./fetch.js')
// load our transform module
var transform = require('./transform.js')
// require our display module
var display = require('./display.js')
// require our interaction module
var interact = require('./interact.js')

fetch(url, function(err, rawData) {
  if (err) {alert(err.message)}
  
  // use it to fix the format of our "raw data"
  var movies = transform(rawData)

  // create an element for our movie bars (see below)
  var visEl = makeVisElement()

  // use it to add the visual elements
  display(visEl, movies, 'qualityPerDollar')

  var infoEl = makeInfoElement()
  interact(infoEl, visEl, movies)

})
 
// // // // // // // // // // // // 
 
function makeVisElement () {
  var el = document.createElement('div')
  el.style.position = 'absolute'
  el.style.left = 0
  el.style.top = 0
  el.style.width = window.innerWidth + 'px'
  el.style.height = window.innerHeight + 'px'
  el.style.background = '#eee'
  document.body.appendChild(el)
  return el
}

function makeInfoElement () {
  var el = document.createElement('div')
  el.style.position = 'absolute'
  el.style.right = 0
  el.style.top = 0
  el.style.width = 300 + 'px'
  el.style.height = window.innerHeight + 'px'
  el.style.background = 'rgba(255,255,255,0.5)'
  document.body.appendChild(el)
  return el
}