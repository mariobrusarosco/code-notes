import CodeEditor from 'components/CodeEditor'

describe('Component | CodeEditor', () => {
  it('render without error', () => {
    const wrapper = shallow(<CodeEditor />)
    const initialState = wrapper.state()

    console.log(initialState)
  })
})
