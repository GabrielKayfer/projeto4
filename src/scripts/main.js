document.addEventListener('DOMContentLoaded', function () {
  const heroSection = document.querySelector('.hero')
  const header = document.querySelector('.header')

  if (heroSection && header) {
    const heroHeight = heroSection.clientHeight

    window.addEventListener('scroll', function () {
      const currentPosition = window.scrollY
      header.classList.toggle('header--is-hidden', currentPosition < heroHeight)
    })
  }

  // Smooth scroll para links de âncora
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  for (let i = 0; i < anchorLinks.length; i++) {
    anchorLinks[i].addEventListener('click', function (event) {
      const href = event.currentTarget.getAttribute('href')
      if (!href || href === '#') return

      const target = document.querySelector(href)
      if (!target) return

      event.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }
})
