export function initLightbox () {
  const html = document.documentElement
  const lightbox = document.querySelector('.lightbox')
  const lightboxImg = document.querySelector('.lightbox__img')
  const sliderTrack = document.querySelector('.product-slider__track')

  if (!lightbox || !lightboxImg || !sliderTrack) {
    return
  }

  sliderTrack.addEventListener('click', (event) => {
    const slide = event.target.closest('.product-slider__slide')

    if (!slide) {
      return
    }

    lightboxImg.src = slide.src
    lightboxImg.alt = slide.alt

    lightbox.classList.add('lightbox--active')
    html.classList.add('scroll-lock')
  })

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox || event.target.closest('.lightbox__close')) {
      lightbox.classList.remove('lightbox--active')
      html.classList.remove('scroll-lock')

      setTimeout(() => {
        if (!lightbox.classList.contains('lightbox--active')) {
          lightboxImg.src = ''
        }
      }, 300)
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('lightbox--active')) {
      lightbox.classList.remove('lightbox--active')
      html.classList.remove('scroll-lock')
    }
  })
}
