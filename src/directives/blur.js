const blur = {}

function setBlur (el, binding) { // , newNode, oldNode)
  el.querySelectorAll('img').forEach(a => {
    if (!binding.value) {
      a.style.filter = 'blur(3px)'
    }
  })
  // el.style.filter = !binding.value ? 'blur(3px)' : 'none'
  el.style.cursor = !binding.value ? 'not-allowed' : 'inherit'

  el.querySelectorAll('button').forEach(a => {
    if (!binding.value) {
      a.setAttribute('disabled', true)
    }
  })
}

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind (el, binding) {
      setBlur(el, binding)
    }
  })
}

export default blur
