import Box from 'react-boxen'
import Scrollspy from 'react-scrollspy'
import NavLink from './NavLink'
import units from '../config/units'
import { gray, blue } from '../config/colors'
import styled from 'styled-components'
import media from '../config/media'
import ConstrainedContainer from './ConstrainedContainer'
import SpyNav from './SpyNav'

const StyledHeader = styled.div`
  background: ${props => props.color || blue};
  transition: 0.4s all;
  border-bottom: 2px solid ${props => props.color || blue};
`

const Header = (props) => {
  return (
    <StyledHeader color={props.color} isSticky={props.isSticky}>
      <ConstrainedContainer>
        <SpyNav inPage={props.route.pathname === '/'} route={props.route}/>
      </ConstrainedContainer>
    </StyledHeader>
  )
}

export default Header
