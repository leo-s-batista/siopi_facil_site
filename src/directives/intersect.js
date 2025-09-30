



const hasIO = () => typeof window !== 'undefined' && 'IntersectionObserver' in window

function makeFallback(el, handler, once) {
  
  const check = () => {
    const rect = el.getBoundingClientRect()
    const inView = rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
                   rect.bottom > 0
    if (inView) {
      handler()
      if (once) {
        window.removeEventListener('scroll', el.__vIntersect_fallback, true)
        window.removeEventListener('resize', el.__vIntersect_fallback, true)
        el.__vIntersect_fallback = null
      }
    }
  }
  el.__vIntersect_fallback = check
  window.addEventListener('scroll', check, true)
  window.addEventListener('resize', check, true)
  
  setTimeout(check, 0)
}

function getConfig(binding) {
  const isFn = typeof binding.value === 'function'
  const opts = isFn ? {} : (binding.value || {})
  const handler = isFn ? binding.value : opts.handler

  if (typeof handler !== 'function') {
    if (process.env && process.env.NODE_ENV !== 'production') {
      
      console.warn('[v-intersect] forneça uma função ou { handler }')
    }
  }

  
  const once = binding.modifiers.once ? true : (opts.once !== undefined ? !!opts.once : true)

  return {
    handler,
    once,
    root: opts.root || null,
    rootMargin: opts.rootMargin || '0px',
    threshold: opts.threshold !== undefined ? opts.threshold : 0, 
  }
}

const Intersect = {
  inserted(el, binding) {
    const { handler, once, root, rootMargin, threshold } = getConfig(binding)
    if (!handler) return

    if (!hasIO()) {
      
      makeFallback(el, handler, once)
      return
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          try { handler(entry) } finally {
            if (once) {
              
              io.unobserve(el)
              io.disconnect()
              el.__vIntersect_io = null
            }
          }
        }
      })
    }, { root, rootMargin, threshold })

    io.observe(el)
    el.__vIntersect_io = io
  },

  unbind(el) {
    
    if (el.__vIntersect_io) {
      try { el.__vIntersect_io.unobserve(el) } catch (_) {
        console.error()
      }
      try { el.__vIntersect_io.disconnect() } catch (_) {
        console.error()
      }
      el.__vIntersect_io = null
    }
    if (el.__vIntersect_fallback) {
      window.removeEventListener('scroll', el.__vIntersect_fallback, true)
      window.removeEventListener('resize', el.__vIntersect_fallback, true)
      el.__vIntersect_fallback = null
    }
  }
}

export default Intersect
