window.name = 'popover'

const STORAGE_KEY = 'sc-grep'

document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.sync.get([ STORAGE_KEY ], function (items) {
    var str = items[STORAGE_KEY]
    var state = JSON.parse(str)

    if (state && typeof state === 'string') state = JSON.parse(state)

    var el = document.createElement('input')

    el.type = 'checkbox'
    el.checked = state ? state.checkbox.toggled : false

    el.addEventListener('change', function (e) {
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
