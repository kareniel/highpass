const STORAGE_KEY = 'sc-grep'
const excluded = [
  'beatport.com',
  'apple.com',
  'spotify.com',
  'instagram.com',
  'twitter'x
]

const excludedLinkText = [
  'stream',
  'buy',
  'tweet',
  'twitter',
  'read more',
  'spotify',
  'discover',
  'sign up'
]

const opts = {
  onlyDownloadable: true,
  excludedTags: ['dubstep', 'trap', 'sample pack', 'edm', 'dance & edm', 'trance', 'trap / dubstep']
}

var state = loadState
var emitter = new Emitter()
var interval

store(state, emitter)

function store (state, emitter) {
  state.toggled = state.toggled

  emitter.on('toggle-extension', toggleExtension)

  if (state.toggled) start()

  function toggleExtension (payload) {
    state.toggled = payload
    saveState()

    return payload === true
      ? start()
      : pause()
  }
}

function start () {
  console.log('start')
  interval = setInterval(clearElements, 250)
}

function pause () {
  console.log('pause')
  clearInterval(interval)
}

function loadState () {
  var state = window.localStorage.getItem(STORAGE_KEY)

  try {
    state = JSON.parse(state)
    return state
  } catch (err) {
    return {}
  }
}

function saveState () {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

function Emitter () {
  this.on = function registerEvent (message, callback) {
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
      if (request.message === message) return callback(request.payload)
    })
  }
}

function clearElements () {
  var items = document.querySelectorAll('.soundList__item')

  items.forEach(function (item) {
    var purchaseLink = item.querySelectorAll('.soundActions__purchaseLink')[0]

    if (!purchaseLink) return filterOut(item)
    if (purchaseLink && !possibleDownload(purchaseLink)) return filterOut(item)

    var tag = item.querySelectorAll('.soundTitle__tagContent')[0]
    if (tag && excludedTag(tag.innerText)) return filterOut(item)
  })
}

function filterOut (el) {
  el.parentNode.removeChild(el)
}

function possibleDownload (el) {
  return !hasExcludedLinkText(el) && !inExcludedList(el)
}

function hasExcludedLinkText (el) {
  var text = el.innerText.toLowerCase()

  return excludedLinkText.some(excluded => text.indexOf(excluded) !== -1)
}

function inExcludedList (el) {
  var hostname = new window.URL(el.title).hostname

  return excluded.some(site => hostname.indexOf(site) !== -1)
}

function excludedTag (text) {
  return opts.excludedTags.includes(text.toLowerCase())
}
