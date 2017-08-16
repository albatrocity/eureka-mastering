import Box from 'react-boxen'
import units from '../config/units'
import styled from 'styled-components'
import media from '../config/media'
import NavLink from './NavLink'

const Nav = (props) => (
  <Box childDirection={props.layout === 'vertical' ? 'column' : 'row'}>
    <NavLink onNavigate={props.onNavigate} color={props.color} inPage={props.inPage} route={props.route} id='about' title='About' />
    <NavLink onNavigate={props.onNavigate} color={props.color} inPage={props.inPage} route={props.route} id='discography' title='Discography' />
    <NavLink onNavigate={props.onNavigate} color={props.color} inPage={props.inPage} route={props.route} id='equipment' title='Equipment' />
    <NavLink onNavigate={props.onNavigate} color={props.color} inPage={props.inPage} route={props.route} id='services' title='Services' />
  </Box>
)

export default Nav
