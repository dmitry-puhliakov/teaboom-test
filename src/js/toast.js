export function initToasts () {
  let container = document.querySelector('.toast-container')

  if (!container) {
    container = document.createElement('div')
    container.className = 'toast-container'
    document.body.appendChild(container)
  }

  function showToast (message) {
    const toast = document.createElement('div')

    toast.className = 'toast'
    toast.textContent = message

    container.appendChild(toast)

    requestAnimationFrame(() => {
      toast.classList.add('toast--show')
    })

    setTimeout(() => {
      toast.classList.remove('toast--show')

      toast.addEventListener('transitionend', () => {
        toast.remove()
      })
    }, 3000)
  }

  document.body.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-toast]')

    if (!trigger) {
      return
    }

    showToast(trigger.dataset.toast)
  })
}
