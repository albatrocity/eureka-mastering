import React from 'react'
import PropTypes from 'prop-types'
import { gray, blue } from '../config/colors'
import styled from 'styled-components'
import ConstrainedContainer from './ConstrainedContainer'
import SiteTitle from './SiteTitle'
import Nav from './Nav'

const StyledHeader = styled.div`
  background: ${props => props.color || blue};
  transition: 0.4s all;
  border-bottom: 2px solid ${props => props.color || blue};
`

const Header = (props) => {
  return (
    <StyledHeader color={props.mainColor} isSticky={props.isSticky}>
      <ConstrainedContainer childDirection='row' childAlign='center' childJustify='space-around'>
        <SiteTitle color={props.textColor} />
        <Nav shrink inPage={props.route.pathname === '/'} route={props.route}/>
      </ConstrainedContainer>
    </StyledHeader>
  )
}

Header.propTypes = {
  textColor: PropTypes.string,
  mainColor: PropTypes.string,
  route: PropTypes.object,
  isSticky: PropTypes.bool,
}

export default Header
