import './style.css'

// Highlight the download that matches the visitor's device, so the obvious
// button is always the right one.
const platforms = document.querySelectorAll('.platform[data-platform]')

function detectPlatform() {
  const ua = navigator.userAgent
  if (/Android/i.test(ua)) return 'android'
  if (/Windows|Win64|Win32/i.test(ua)) return 'windows'
  return null
}

const detected = detectPlatform()

platforms.forEach((platform) => {
  const isMatch = platform.dataset.platform === detected
  platform.classList.toggle('is-detected', isMatch)

  if (isMatch) {
    const button = platform.querySelector('.btn')
    button?.classList.remove('btn-secondary')
    button?.classList.add('btn-primary')
  }
})

// Keep the sticky header visually separate from the page once scrolled.
const header = document.getElementById('siteHeader')

if (header) {
  const syncHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 8)
  syncHeader()
  window.addEventListener('scroll', syncHeader, { passive: true })
}
