// Vendors
import { pathOr } from 'ramda'

// Conditions
import {
  betweenOneAndTwoHundread,
  albumdIdBetweenTwoAndFour,
  validId
} from '../conditions'

export const walterEvaluator = item => {
  const id = pathOr(0, ['id'], item)
  const albumId = pathOr(0, ['albumId'], item)

  // Conditions
  const hasValidId = validId(id)
  const albumIdIsBetweenTwoAndFour = albumdIdBetweenTwoAndFour(albumId)
  const idIsBetweenOneAndTwoHundread = betweenOneAndTwoHundread(id)

  const ruleNumberOne = [albumIdIsBetweenTwoAndFour].every(condition => condition)

  const ruleNumberTwo = [idIsBetweenOneAndTwoHundread].every(condition => condition)

  // Mandatory Evaluation
  const mandatoryConditions = [ruleNumberOne || ruleNumberTwo, hasValidId].every(
    condition => condition
  )

  return {
    hasValidId,
    albumIdIsBetweenTwoAndFour,
    idIsBetweenOneAndTwoHundread,
    ruleNumberOne,
    ruleNumberTwo,
    fillAllConditions: mandatoryConditions
  }
}

export default walterEvaluator
