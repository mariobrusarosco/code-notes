const paginate = ({ array, perPage, resultStructureAs = 'object' }) => {
  const parsedPerPage = ~~perPage
  const numberOfPages = Math.ceil(array.length / parsedPerPage)
  let result = resultStructureAs === 'array' ? [] : {}

  for (
    let startPoint = 0, page = 1;
    startPoint < numberOfPages * parsedPerPage;
    startPoint += parsedPerPage, page++
  ) {
    const endPoint = startPoint + parsedPerPage

    if (resultStructureAs === 'array') {
      result = [
        ...result,
        {
          page,
          items: array.slice(startPoint, endPoint)
        }
      ]
    } else {
      result = {
        ...result,
        [page]: array.slice(startPoint, endPoint)
      }
    }
  }

  return result
}

export default paginate
