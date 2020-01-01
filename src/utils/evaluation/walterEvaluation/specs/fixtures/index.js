export const idFailure = {
  id: null,
  albumId: 100000000
}

export const albumIdFailure = {
  id: 32,
  albumId: 2
}

export const ruleNumberOneFailure = {
  id: 10000,
  albumId: 1312
}

export const ruleNumberTwoFailure = {
  id: 201,
  albumId: 1
}

export const allCasesOfFailure = [idFailure, ruleNumberOneFailure, ruleNumberTwoFailure]

export const idSuccess = {
  id: 101,
  albumId: null
}

export const albumIdSuccess = {
  id: null,
  albumId: 3
}

export const ruleNumberOneSucess = {
  id: null,
  albumId: 4
}

export const ruleNumberTwoSuccess = {
  id: 200,
  albumId: null
}

export const validCase = {
  id: 187,
  albumId: 3
}

export const allCasesOfSuccess = [
  idSuccess,
  albumIdSuccess,
  ruleNumberOneSucess,
  ruleNumberTwoSuccess,
  validCase
]
