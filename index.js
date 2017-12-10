const excluded = [
  'beatport.com',
  'apple.com',
  'spotify.com'
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

setInterval(clearElements, 250)

var y

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

  return excludedLinkText.some(excluded =>text.indexOf(excluded) !== -1)
}

function inExcludedList (el) {
  var hostname = new URL(el.title).hostname

  return excluded.some(site => hostname.indexOf(site) !== -1)
}

function excludedTag (text) {
  return opts.excludedTags.includes(text.toLowerCase())
}

