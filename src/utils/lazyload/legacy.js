import setBoxColor from '../set-box-color'

const setLazyloadFlag = image => {
  if (typeof image.lazyLoaded === 'undefined') {
    image.lazyLoaded = false
  }

  return image
}

const onlyNotLoadedImages = image => !image.lazyLoaded

const queryImagesOnDOM = () => {
  const images = [...document.querySelectorAll('img[data-src]')]
  const initializedImages = images.map(setLazyloadFlag)
  const filteredArray = initializedImages.filter(onlyNotLoadedImages)

  return filteredArray
}

const resetImagesOnDOM = () => {
  const images = [...document.querySelectorAll('img[data-src]')]

  images.forEach(image => {
    image.src = ''
    image.lazyLoaded = false
    image.parentNode.classList.remove('lazy-loaded')
  })

  document.addEventListener('scroll', legacyLazyload)
  window.addEventListener('resize', legacyLazyload)

  setTimeout(() => {
    legacyLazyload()
  }, 0)
}

const legacyLazyload = (() => {
  let lazyImages = queryImagesOnDOM()

  document.addEventListener('resetImagesOnDOM', resetImagesOnDOM)

  return function() {
    lazyImages = queryImagesOnDOM()
    console.log('Images to be lazy loaded', lazyImages && lazyImages.length)

    if (!lazyImages.length) {
      document.removeEventListener('scroll', legacyLazyload)
      window.removeEventListener('resize', legacyLazyload)
    }

    lazyImages.forEach(imageNode => {
      const {
        top: imageTopOffset,
        bottom: imageBottomOffset
      } = imageNode.getBoundingClientRect()

      const windowInnerHeight = window.innerHeight

      if (imageTopOffset <= windowInnerHeight - 20 && imageBottomOffset > 0) {
        const dataSrc = imageNode.dataset.src
        const imgParent = imageNode.parentNode.parentNode

        imageNode.crossOrigin = ''
        imageNode.src = dataSrc
        imageNode.lazyLoaded = true
        imgParent.classList.add('lazy-loaded')
        setBoxColor(imageNode, imgParent)
      }
    })
  }
})()

export default legacyLazyload
