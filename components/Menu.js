import React from 'react'
import PropTypes from 'prop-types'
import BurgerMenu from './BurgerMenu'


const Menu = (props) => {
  const styles = {
    bmBurgerButton: {
      display: 'none',
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmCrossButton: {
      display: 'none',
      height: '24px',
      width: '24px'
    },
    bmMenu: {
      background: props.config.footer_color,
      padding: '2.5em 1.5em 0',
    },

    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  return (
    <BurgerMenu {...props} styles={styles}>
    </BurgerMenu>
  )
}

Menu.propTypes = {
  config: PropTypes.object,
}

export default Menu
