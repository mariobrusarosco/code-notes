import checkPropTypes from 'check-prop-types'
import GuessedWords from '../GuessedWords'

const setup = (Component, { props = {} }) => {
  return shallow(<Component {...props} />)
}

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
}

it('does not throw warnings of missing props', () => {
  const propsError = checkPropTypes(
    GuessedWords.propTypes,
    defaultProps,
    'props',
    GuessedWords
  )
  expect(propsError).toEqual(undefined)
})

describe('if there are no words guessed', () => {
  it('renders without error', () => {
    const wrapper = shallow(<GuessedWords guessedWords={[]} />)

    const component = wrapper.find('[data-test="guessed-words"]')

    expect(component.exists()).toBe(true)
  })

  it('renders instructions to guess a word', () => {
    const wrapper = shallow(<GuessedWords guessedWords={[]} />)

    const instructions = wrapper.find('[data-test="guess-intructions"]')

    expect(instructions.exists()).toBeTruthy()
  })
})
