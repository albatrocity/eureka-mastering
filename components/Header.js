import React from 'react'
import PropTypes from 'prop-types'
import { blue } from '../config/colors'
import styled from 'styled-components'
import ConstrainedContainer from './ConstrainedContainer'
import SiteTitle from './SiteTitle'
import Nav from './Nav'
import MenuIcon from 'react-icons/lib/io/navicon'
import CloseIcon from 'react-icons/lib/io/close'
import media from '../config/media'

const StyledHeader = styled.div`
  background: ${props => props.color || blue};
  transition: 0.4s all;
  border-bottom: 2px solid ${props => props.color || blue};
`
const BurgerButton = styled.div`
  cursor: pointer;
`
const MobileHidden = styled.div`
  display: block;
  ${media.tablet`display: none;`}
`
const MobileVisible = styled.div`
  display: none;
  ${media.tablet`display: block;`}
`

const Header = (props) => {
  const { toggleMenu, isMenuOpen, textColor, mainColor} = props
  return (
    <StyledHeader color={mainColor} isSticky={props.isSticky}>
      <ConstrainedContainer childDirection='row' childAlign='center' childJustify='space-around'>
        <SiteTitle color={textColor} />
        <MobileHidden>
          <Nav
            color={textColor}
            shrink
            inPage={props.route.pathname === '/'}
            route={props.route}
          />
        </MobileHidden>
        <MobileVisible>
          <BurgerButton onClick={() => toggleMenu(!isMenuOpen)}>
            { isMenuOpen ?
              <CloseIcon size={20} color={textColor || '#fff'} />
              :
              <MenuIcon size={24} color={textColor || '#fff'} />
            }
          </BurgerButton>
        </MobileVisible>
      </ConstrainedContainer>
    </StyledHeader>
  )
}

Header.propTypes = {
  textColor: PropTypes.string,
  mainColor: PropTypes.string,
  route: PropTypes.object,
  isSticky: PropTypes.bool,
  toggleMenu: PropTypes.func,
  menu: PropTypes.object,
  isMenuOpen: PropTypes.boolean,
}

export default Header
