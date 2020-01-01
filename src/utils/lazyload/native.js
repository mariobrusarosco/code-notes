/*
  This module's purpose is to deal with necessary fallback actions
  when using 'lazyload' until it's fully or almost fully supported
*/

const nativeLazyload = (imagesOnDOM = []) => {
  document.addEventListener('DOMContentLoaded', () => {
    imagesOnDOM.forEach(image => {
      image.src = image.dataset.src
    })
  })
}

export default nativeLazyload
