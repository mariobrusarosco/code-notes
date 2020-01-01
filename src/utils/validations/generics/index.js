export const validateNumber = input => {
  if (!input) return false

  let sanitizedInput

  if (typeof input === 'string') {
    sanitizedInput = input.replace(/\s/gim, '')
  }

  const parsedNumber = ~~sanitizedInput || ~~input

  return !!parsedNumber ? parsedNumber : false
}

export const validateString = input => {
  if (typeof input !== 'string') return false

  const sanitizedString = input.replace(/\s/gim, '')
  const lowercaseString = sanitizedString.toLowerCase()
  const trimmedString = lowercaseString.trim()

  const isFalsyString = ['null', 'undefined', 'false', 'nan'].some(
    string => string === trimmedString
  )

  if (isFalsyString || !trimmedString) {
    return false
  }

  return input
}

export const validateEmail = input => {
  if (!input || !validateString(input)) return false

  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return regex.test(input)
}
