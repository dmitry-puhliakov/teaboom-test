import { productData } from './data'

const imagesContainer = document.querySelector('.product-slider__track')
const btnPrev = document.querySelector('.product-slider__btn--prev')
const btnNext = document.querySelector('.product-slider__btn--next')

function renderProductSlider() {
  const fragment = document.createDocumentFragment()

  productData.images.forEach((image) => {
    const img = document.createElement('img')

    img.classList.add('product-slider__slide')
    img.src = image

    fragment.appendChild(img)
  })

  imagesContainer.appendChild(fragment)
}

function scrollSlider(direction) {
  const slideWidth = imagesContainer.querySelector('.product-slider__slide').clientWidth

  imagesContainer.scrollBy({ left: slideWidth * direction, behavior: 'smooth' })
}

export function initProductSlider () {
  renderProductSlider()

  btnPrev.addEventListener('click', () => scrollSlider(-1))
  btnNext.addEventListener('click', () => scrollSlider(1))

  imagesContainer.addEventListener('scroll', (event) => {
    const el = event.target

    const isAtLeft = el.scrollLeft === 0
    const isAtRight = Math.ceil(el.scrollLeft) + el.clientWidth >= el.scrollWidth

    if (isAtLeft) {
      btnPrev.classList.add('product-slider__btn--disable')
    }

    if (isAtRight) {
      btnNext.classList.add('product-slider__btn--disable')
    }

    if (!isAtLeft && !isAtRight) {
      btnPrev.classList.remove('product-slider__btn--disable')
      btnNext.classList.remove('product-slider__btn--disable')
    }
  })
}
