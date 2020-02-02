chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'startAuto') {
    const start = document.getElementById('start')
    let listAdded = []
    const runAuto = setInterval(function() {
      document.documentElement.scrollTo(
        0,
        document.documentElement.scrollHeight,
      )
      const listAddRequest = document.getElementsByClassName('FriendRequestAdd')
      for (let item of listAddRequest) {
        if (!listAdded.includes(item.getAttribute('aria-label'))) {
          if (!item.classList.contains('hidden_elem')) {
            item.click()
            listAdded.push(item.getAttribute('aria-label'))
          }
        }
      }
      if (listAdded.length >= request.limit) {
        clearInterval(runAuto)
        alert('Auto add friends facebook done!!!')
        return
      }
    }, 2000)
  }
  return true
})
