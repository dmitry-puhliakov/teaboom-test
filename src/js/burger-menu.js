export function initBurger () {
  const burgerBtn = document.querySelector('.header__burger')
  const closeBurgerBtn = document.querySelector('.header-menu__item--close')
  const sidebar = document.querySelector('.header-menu')
  const body = document.body

  if (burgerBtn && sidebar && closeBurgerBtn) {
    const toggleMenu = () => {
      sidebar.classList.toggle('header-menu--active')
      body.classList.toggle('scroll-lock')
    }

    burgerBtn.addEventListener('click', toggleMenu)
    closeBurgerBtn.addEventListener('click', toggleMenu)

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidebar.classList.contains('header-menu--active')) {
        toggleMenu()
      }
    })
  }
}
