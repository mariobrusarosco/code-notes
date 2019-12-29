import Enzyme from 'enzyme'

declare global {
  const React: typeof React;
  const shallow: typeof Enzyme.shallow;
}
