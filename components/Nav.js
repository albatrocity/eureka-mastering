import React from 'react'
import PropTypes from 'prop-types'
import Box from 'react-boxen'
import NavLink from './NavLink'

const Nav = (props) => (
  <Box childDirection={props.layout === 'vertical' ? 'column' : 'row'}>
    <NavLink onNavigate={props.onNavigate} color={props.color} inPage={props.inPage} route={props.route} id='about' title='About' />
    <NavLink onNavigate={props.onNavigate} color={props.color} inPage={props.inPage} route={props.route} id='discography' title='Discography' />
    <NavLink onNavigate={props.onNavigate} color={props.color} inPage={props.inPage} route={props.route} id='equipment' title='Equipment' />
    <NavLink onNavigate={props.onNavigate} color={props.color} inPage={props.inPage} route={props.route} id='services' title='Services' />
  </Box>
)

Nav.propTypes = {
  layout: PropTypes.string,
  onNavigate: PropTypes.func,
  color: PropTypes.string,
  route: PropTypes.object,
  inPage: PropTypes.bool,
}

export default Nav
