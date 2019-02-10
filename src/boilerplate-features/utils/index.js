const generateBox = (boxName, markup) => {
  const boxContent = document.querySelector(`.${boxName}`)

  if (!!boxContent) {
    boxContent.innerHTML = markup
    return
  }

  const newboxContent = document.createElement('div')
  newboxContent.classList.add(boxName)
  newboxContent.innerHTML = markup

  document.body.append(newboxContent)
  return
}

export { generateBox }
