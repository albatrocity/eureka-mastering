import Scrollspy from 'react-scrollspy'
import units from '../config/units'
import styled from 'styled-components'
import media from '../config/media'
import NavLink from './NavLink'

const StyledSpy = styled(Scrollspy)`
  display: flex;
  padding: 0 ${units[4]} 0 ${units[4]};
  ${media.phone`padding: 0;`}
`

const SpyNav = (props) => (
  <StyledSpy
    items={ ['about', 'discography', 'equipment', 'services'] }
    currentClassName='is-current'
    componentTag='div'>
    <NavLink inPage={props.inPage} route={props.route} id='about' title='About' />
    <NavLink inPage={props.inPage} route={props.route} id='discography' title='Discography' />
    <NavLink inPage={props.inPage} route={props.route} id='equipment' title='Equipment' />
    <NavLink inPage={props.inPage} route={props.route} id='services' title='Services' />
  </StyledSpy>
)

export default SpyNav
