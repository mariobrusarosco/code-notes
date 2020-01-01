import walterEvaluator from '../index'

// Fixtures
import {
  idFailure,
  albumIdFailure,
  ruleNumberOneFailure,
  ruleNumberTwoFailure,
  allCasesOfFailure
} from './fixtures'

describe('Evaluation of a Item for [JESSE]', () => {
  describe('[FAILURE SCENARIO]', () => {
    it('must not have a [valid id]', () => {
      const result = walterEvaluator(idFailure)

      expect(result.hasValidId).not.toBeTruthy()
    })

    it('must not have a [albumId] equals to [1]', () => {
      const result = walterEvaluator(albumIdFailure)

      expect(result.albumIdIsOne).not.toBeTruthy()
    })

    it('must not fullfill the [ruleNumberOne]', () => {
      const result = walterEvaluator(ruleNumberOneFailure)

      expect(result.ruleNumberOne).not.toBeTruthy()
    })

    it('must not fullfill [ruleNumberTwo]', () => {
      const result = walterEvaluator(ruleNumberTwoFailure)

      expect(result.ruleNumberTwo).not.toBeTruthy()
    })

    it('must receive [invalidCases] and none of them can be evaluated as a [valid] item (fillAllConditions === true)', () => {
      const validItems = allCasesOfFailure.filter(data => {
        const result = walterEvaluator(data)

        return result.fillAllConditions
      })

      expect(validItems).toHaveLength(0)
    })
  })
})
