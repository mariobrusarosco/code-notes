import Display from './Display.tsx'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.handleDecrement = this.handleDecrement.bind(this)

    this.state = {
      counter: 0
    }
  }

  handleDecrement() {
    if (this.state.counter === 0) return

    this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    return (
      <div data-test="counter" className="counter">
        <Display counter={this.state.counter} title="Generic Counter" />
        <button
          data-test="counter-increment-button"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          increment
        </button>
        <button data-test="counter-decrement-button" onClick={this.handleDecrement}>
          decrement
        </button>
      </div>
    )
  }
}

export default Counter
