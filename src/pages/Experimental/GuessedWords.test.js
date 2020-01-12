import GuessedWords from './GuessedWords'

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
}

describe('', () => {
  it('', () => {
    const component = shallow(<GuessedWords {...defaultProps} />)

    // console.log(component.debug())
    // expect()
  })
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

    // console.log(wrapper.debug())

    expect(instructions.exists()).toBeTruthy()
  })
})

describe('if there are guessed words', () => {})
