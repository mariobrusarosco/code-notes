const toCurrency = (input, locale = 'pt-BR') => {
  const options = { style: 'currency', currency: 'BRL' }
  const result = new Intl.NumberFormat(locale, options).format(input)

  return result || input
}

export default toCurrency
