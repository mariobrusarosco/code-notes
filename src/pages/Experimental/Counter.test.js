import Counter, { Display } from 'pages/Experimental/Counter'

describe('<Counter />', () => {
  it('renders without error', () => {
    const wrapper = shallow(<Counter />)
    const component = wrapper.find('[data-test="counter"]')
    // OR
    // const component = wrapper.find({ ['data-test']: "counter" })

    expect(component.exists()).toBe(true)
  })

  it('renders display counter', () => {
    const wrapper = shallow(<Counter />)
    const counterDisplay = wrapper.find(Display)

    expect(counterDisplay.exists()).toBe(true)
  })

  it('renders increment button', () => {
    const wrapper = shallow(<Counter />)
    const incrementButton = wrapper.find('[data-test="counter-increment-button"]')

    expect(incrementButton.exists()).toBe(true)
  })

  it('must have "counter" state starting at "0"', () => {
    const wrapper = shallow(<Counter />)
    const initialCounter = wrapper.state('counter')

    expect(initialCounter).toBe(0)
  })

  it('must increment "counter" when user clicks on "increment" button', () => {
    const wrapper = shallow(<Counter />)
    const incrementButton = wrapper.find('[data-test="counter-increment-button"]')

    incrementButton.simulate('click')
    const counterState = wrapper.state('counter')

    expect(counterState).toBe(1)

    // Or
    const counterDisplay = wrapper.find('[data-test="counter-display"]')
    expect(counterDisplay.text()).toContain('1')

    // Or
    // wrapper.setState({ counter: 10 })
    // const counterDisplay = wrapper.find('[data-test="counter-display"]')
    // expect(counterDisplay.text()).toContain("10")
  })

  it('must decrement "counter" when user clicks on "decrement" button', () => {
    const wrapper = shallow(<Counter />)
    const decrementButton = wrapper.find('[data-test="counter-decrement-button"]')

    wrapper.setState({ counter: 2 })
    decrementButton.simulate('click')
    const counterDisplay = wrapper.find('[data-test="counter-display"]')

    expect(counterDisplay.text()).toContain('1')
  })

  it('must avoid to decrement the counter "lower" that "zero"', () => {
    const wrapper = shallow(<Counter />)
    const decrementButton = wrapper.find('[data-test="counter-decrement-button"]')

    decrementButton.simulate('click')
    const counterDisplay = wrapper.find('[data-test="counter-display"]')

    expect(counterDisplay.text()).not.toContain('-1')
  })
})
