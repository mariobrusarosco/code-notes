import HeaderApplication from 'components/HeaderApplication'

/**
  * Factory function to create a ShallowWrapper
  * @function setup
  * @param {React Component} Component
  * @param {object} props - React Props
  * @returns {ShallowWrapper}
*/

const setup = (Component, props = {}) => {
  return shallow(<Component {...props} />)
}

it('renders without error', () => {
  const wrapper = shallow(<HeaderApplication />)
  const component = wrapper.find("[data-test='header-application']")

  console.warn(wrapper.length)
  expect(component.length).toBe(1)
})
