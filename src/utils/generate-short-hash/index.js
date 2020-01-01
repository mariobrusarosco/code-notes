const generateShortHash = () => {
  return Math.random()
    .toString(16)
    .substring(2)
}

export default generateShortHash
