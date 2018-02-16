window.name = 'popover'

document.addEventListener('DOMContentLoaded', function () {
  var el = document.querySelector('#toggle-extension')

  el.addEventListener('change', function (e) {
    emit('toggle-extension', e.target.checked)
  })
})

function emit (message, payload) {
  chrome.tabs.query({}, function (tabs) {
    for (let tab of tabs) {
      chrome.tabs.sendMessage(tab.id, { message, payload })
    }
  })
}

// function getWindows () {
//   var views = chrome.extension.getViews()
//   var windows = {}

//   for (var extensionWindow of views) {
//     windows[extensionWindow.name] = extensionWindow
//   }

//   return windows
// }
