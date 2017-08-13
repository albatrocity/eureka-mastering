import Box from 'react-boxen'
import Scrollspy from 'react-scrollspy'
import NavLink from './NavLink'
import units from '../config/units'
import { gray, blue } from '../config/colors'
import styled from 'styled-components'
import media from '../config/media'
import ConstrainedContainer from './ConstrainedContainer'

const StyledSpy = styled(Scrollspy)`
  display: flex;
  padding: 0 ${units[4]} 0 ${units[4]};
  ${media.phone`padding: 0;`}
`

const StyledHeader = styled.div`
  background: ${props => props.color || blue};
  transition: 0.4s all;
  border-bottom: 2px solid ${props => props.color || blue};
`

const Header = (props) => {
  return (
    <StyledHeader color={props.color} isSticky={props.isSticky}>
      <ConstrainedContainer>
        <StyledSpy
          items={ ['about', 'services', 'equipment', 'discography'] }
          currentClassName='is-current'
          componentTag='div'>
          <NavLink id='about' title='About' />
          <NavLink id='discography' title='Discography' />
          <NavLink id='equipment' title='Equipment' />
          <NavLink id='services' title='Services' />
        </StyledSpy>
      </ConstrainedContainer>
    </StyledHeader>
  )
}

export default Header
