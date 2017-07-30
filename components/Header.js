import Box from 'react-boxen'
import Scrollspy from 'react-scrollspy'
import NavLink from './NavLink'
import units from '../config/units'
import { gray, blue } from '../config/colors'
import styled from 'styled-components'
import ConstrainedContainer from './ConstrainedContainer'

const StyledSpy = styled(Scrollspy)`
  display: flex;
  padding: 0 ${units[4]} 0 ${units[4]};
`

const StyledHeader = styled.div`
  background: ${p => p.isSticky ? gray : 'transparent' };
  transition: 0.4s all;
  border-bottom: 2px solid ${blue}
`

const Header = (props) => {
  return (
    <StyledHeader isSticky={props.isSticky}>
      <ConstrainedContainer>
        <StyledSpy
          items={ ['about', 'services', 'equipment', 'discography'] }
          currentClassName='is-current'
          componentTag='div'>
          <NavLink id='about' title='About' />
          <NavLink id='services' title='Services' />
          <NavLink id='equipment' title='Equipment' />
          <NavLink id='discography' title='Discography' />
        </StyledSpy>
      </ConstrainedContainer>
    </StyledHeader>
  )
}

export default Header
