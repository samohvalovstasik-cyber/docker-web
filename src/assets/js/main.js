import 'virtual:uno.css'
import '../styles/custom.css'

document.addEventListener('DOMContentLoaded', () => {
  // ============ Бургер-меню ============
  const burger = document.querySelector('.burger')
  const mobileNav = document.querySelector('#mobile-nav')

  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active')
      mobileNav.classList.toggle('hidden')
    })
  }

  // ============ Подсветка активного пункта меню ============
  const currentPath = window.location.pathname.split('/').pop() || 'index.html'
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href')
    if (href === currentPath) {
      link.classList.add('bg-primary', 'text-white')
    }
  })

  // ============ Плавная прокрутка ============
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'))
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })

  // ============ Валидация формы подписки ============
  document.querySelectorAll('form.subscribe-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const email = form.querySelector('input[type="email"]').value
      alert(`Спасибо за подписку, ${email}!`)
      form.reset()
    })
  })
})