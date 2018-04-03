window.name = 'popover'

const STORAGE_KEY = 'sc-grep'

document.addEventListener('DOMContentLoaded', function () {
  var state = { toggled: false }
  chrome.storage.sync.get([ STORAGE_KEY ], function (items) {
    var serializedState = items[STORAGE_KEY]

    try {
      state = JSON.parse(serializedState)
    } catch (err) {

    }

    var el = document.createElement('input')

    el.type = 'checkbox'
    el.checked = state.toggled

    el.addEventListener('change', function (e) {
      console.log('toggle')
      emit('toggle-extension')
    })

    document.body.appendChild(el)
  })
})

function emit (message, payload) {
  chrome.tabs.query({}, function (tabs) {
    for (let tab of tabs) {
      chrome.tabs.sendMessage(tab.id, { message, payload })
    }
  })
}
