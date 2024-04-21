export function glideText(sel, text) {
  const elem = typeof sel === 'string' ? document.querySelector(sel) : sel

  elem.innerHTML = `
  <div class="glide-text">
    <span class="glide-text-out">${elem.textContent}</span>
    <span class="glide-text-in">${text}</span>
  </div>`

  const setText = () => {
    elem.innerHTML = text
    elem.removeEventListener('animationend', setText)
  }

  elem.addEventListener('animationend', setText)
}
