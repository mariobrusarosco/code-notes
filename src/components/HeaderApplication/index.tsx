import { Link } from 'react-router-dom'

import ROUTES from 'routes'

// import './styles.css'
// import { Header } from './styles'

import Header from './styles'

import Button from '../Button'

console.log({ Header })
// const Header = styled.header`
//   display: grid;
//   grid-template-columns: auto 1fr auto;
//   padding: 20px 0;
//   background-color: var(--primary-pink);
// `

const Logo = styled.div``
const ProjectTitle = styled.span``

const Menu = styled.div``
const List = styled.ul`
  display: none;
`

const HeaderItem = styled(Link)``

const UserDropdownButton = styled(Button)`
  background-color: var(--primary-dark-blue);
  color: var(--neutral-white);
  border-radius: 50%;
  padding: 10px;
`

const LogoutButton = styled(Button)`
  background-color: var(--primary-dark-blue);
  color: var(--primary-white);
`

const HeaderApplication: React.FunctionComponent = () => {
  // TODO remove console.log
  // console.log('[ HeaderApplication ]')
  return (
    <Header data-test="header-application">
      <Logo />
      <ProjectTitle>
        <HeaderItem className="item" to={ROUTES.HOME}>
          Code Notes
        </HeaderItem>
      </ProjectTitle>
      <Menu>
        <UserDropdownButton>MB</UserDropdownButton>
        <List>
          <HeaderItem className="item" to={ROUTES.CONFIG}>
            config
          </HeaderItem>
          <LogoutButton className="item" onClick={() => console.log('logging out')}>
            Logout
          </LogoutButton>
        </List>
      </Menu>
    </Header>
  )
}

export default HeaderApplication
