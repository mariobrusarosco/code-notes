// Vendor
import { pipe } from 'ramda'

// CONSTANTS
const { BUSINESS } = APP
const { WALTER, JESSE } = BUSINESS

// Evaluations
import evaluateForWalter from './walterEvaluation'

const evaluateItems = items => {
  // Using reduce
  const initialAccumulator = { [WALTER]: [], all: [] }

  // debugger
  return items.reduce((gradeList, item, i) => {
    const walterEvaluation = evaluateForWalter(item)

    if (walterEvaluation.fillAllConditions) {
      item[WALTER] = true
      gradeList[WALTER] = [...gradeList[WALTER], item]
    }

    gradeList['all'] = [...gradeList['all'], item]

    return gradeList
  }, initialAccumulator)

  // Using ForEach
  // const walter = []
  // const jesse = []

  // items.forEach(item => {
  //   const evaluatedItem = evaluate(item)

  //   if(evaluatedItem.isWalter) {
  //     walter = [...walter, item]
  //   }
  // })

  // return { walter, jesse }
}

export default evaluateItems
