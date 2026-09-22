export function initBurger () {
  const html = document.documentElement
  const burgerBtn = document.querySelector('.header__burger')
  const closeBurgerBtn = document.querySelector('.header-menu__item--close')
  const sidebar = document.querySelector('.header-menu')

  if (burgerBtn && sidebar && closeBurgerBtn) {
    const toggleMenu = () => {
      console.log('FOO', html)
      sidebar.classList.toggle('header-menu--active')
      html.classList.toggle('scroll-lock')
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
