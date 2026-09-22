import { productData } from './data'

const elements = {
  title: document.querySelector('.product-card__title'),
  category: document.querySelector('.product-card__category'),
  weight: document.querySelector('.product-card__weight'),
  article: document.getElementById('product-article'),
  price: document.querySelector('.product-card__price'),
  oldPrice: document.querySelector('.product-card__old-price'),
  variantsContainer: document.querySelector('.product-card__variants'),
  description: document.querySelector('.product-card__description'),
}

let currentVariantIndex = 0

function renderVariants() {
  const fragment = document.createDocumentFragment()

  productData.variants.forEach((variant, index) => {
    const btn = document.createElement('button')

    btn.classList.add('variant-btn', 'btn')
    btn.type = 'button'
    btn.textContent = variant.weight
    btn.dataset.index = index
    btn.dataset.toast = `⚖️ Выбрана фасовка ${variant.weight}`

    fragment.appendChild(btn)
  })

  elements.variantsContainer.appendChild(fragment)
}

function updateVariant(index) {
  const variant = productData.variants[index]

  const formatPrice = (price) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(price)

  elements.price.textContent = formatPrice(variant.price)

  if (variant.oldPrice) {
    elements.oldPrice.textContent = formatPrice(variant.oldPrice)
    elements.oldPrice.style.display = 'block'
  } else {
    elements.oldPrice.style.display = 'none'
  }

  elements.weight.textContent = variant.weight
  elements.article.textContent = variant.article


  const buttons = elements.variantsContainer.querySelectorAll('.variant-btn')

  buttons.forEach(btn => btn.classList.remove('variant-btn--active'))
  buttons[index].classList.add('variant-btn--active')
}

export function initProductCard() {
  elements.title.textContent = productData.name
  elements.category.textContent = productData.category
  elements.description.innerHTML = productData.description

  renderVariants()
  updateVariant(currentVariantIndex)

  elements.variantsContainer.addEventListener('click', (event) => {
    const btn = event.target.closest('.variant-btn')

    if (!btn) {
      return
    }

    const index = parseInt(btn.dataset.index, 10)

    if (index !== currentVariantIndex) {
      currentVariantIndex = index
      updateVariant(index)
    }
  })
}
