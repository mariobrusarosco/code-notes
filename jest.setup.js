const React = require('react')
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({
  adapter: new EnzymeAdapter()
})

global.React = React
global.Component = React.Component
global.Enzyme = Enzyme
global.shallow = shallow
