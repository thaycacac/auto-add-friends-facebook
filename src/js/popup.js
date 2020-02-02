document.addEventListener('DOMContentLoaded', function(event) {
  const start = document.getElementById('start')
  const limit = document.getElementsByClassName('limit')[0]

  start.addEventListener('click', function() {
    start.innerHTML = 'Running...'
    alert(
      'Make sure you at: facebook.com/?sk=ff or facebook.com/groups/*/members',
    )
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true,
      },
      function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: 'startAuto',
          limit: limit.value,
        })
      },
    )
  })
})
