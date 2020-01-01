import walterEvaluator from '../index'

// Fixtures
import {
  idSuccess,
  albumIdSuccess,
  ruleNumberOneSucess,
  ruleNumberTwoSuccess,
  allCasesOfFailure
} from './fixtures'

describe('Evaluation of a Item for [WALTER]', () => {
  describe('[SUCCESS SCENARIO]', () => {
    it('must have a valid [id]', () => {
      const result = walterEvaluator(idSuccess)

      expect(result.hasValidId).toBeTruthy()
    })

    it('must have an [albumId] between [2] and [4]', () => {
      const result = walterEvaluator(albumIdSuccess)

      expect(result.albumIdIsBetweenTwoAndFour).toBeTruthy()
    })

    it('must fill [ruleNumberOne]', () => {
      const result = walterEvaluator(ruleNumberOneSucess)

      expect(result.ruleNumberOne).toBeTruthy()
    })

    it('must fill all [ruleNumberTwo]', () => {
      const result = walterEvaluator(ruleNumberTwoSuccess)

      expect(result.ruleNumberTwo).toBeTruthy()
    })

    it('must receive [invalidCase] and can acept any of them as [valid]', () => {
      const validItems = allCasesOfFailure.filter(data => {
        const result = walterEvaluator(data)

        return result.fillAllConditions
      })

      expect(validItems).toHaveLength(0)
    })
  })
})
