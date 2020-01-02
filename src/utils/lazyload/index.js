// // Lazyload Support
import lazyloadSupport from './support'

const lazyload = () => {
  const { modern, native } = lazyloadSupport

  document.addEventListener('DOMContentLoaded', async () => {
    if (native) {
      console.log('Native Support For Lazy Load')
      return
    } else if (modern) {
      console.log('Modern Support For Lazy Load')
      const { default: modernLazyload } = await import('./modern')
      document.addEventListener('updateLazyLoadWatcher', modernLazyload())
    } else {
      console.log('Legacy Support For Lazy Load')
      const { default: legacyLazyload } = await import('./legacy')
      document.addEventListener('updateLazyLoadWatcher', legacyLazyload)
      document.addEventListener('scroll', legacyLazyload)
      window.addEventListener('resize', legacyLazyload)
    }
  })
}

export default lazyload
