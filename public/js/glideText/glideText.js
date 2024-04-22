export function glideText(sel, text, dynamic) {
  const elem = typeof sel === 'string' ? document.querySelector(sel) : sel

  elem.innerHTML = `
  <div class="glide-text">
    <span class="glide-text-out">${elem.textContent}</span>
    <span class="glide-text-in">${text}</span>
  </div>`

  if (dynamic) {
    const h = elem.querySelector('.glide-text-in').offsetHeight
    elem.style.height = `${h}px`
  }

  const setText = () => {
    elem.innerHTML = text
    elem.removeEventListener('animationend', setText)
  }

  elem.addEventListener('animationend', setText)
}
