import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FadeThroughChild from './FadeThroughChild'

export default class FadeThroughComponent extends Component {

  render() {
    const inactiveStyle = {
      position: 'absolute',
      top: 0,
      transition: `opacity ${this.props.fadeDuration}s`,
      opacity: '0',
      width: '100%',
      transform: 'translate3d(0, 0, 0)',
      willChange: 'transform',
    }

    const activeStyle = {
      position: 'relative',
      transition: `opacity ${this.props.fadeDuration}s`,
      opacity: '1',
      width: '100%',
      transform: 'translate3d(0, 0, 0)',
      willChange: 'transform',
    }

    return (
      <div style={{ position: 'relative', transform: 'translate3d(0, 0, 0)'}} id='faderContainer'>
        { this.props.children.map((child, index) => (

          <FadeThroughChild
            key={ 'fade-through-child' + index }
            style={ index === this.props.activeIndex ? activeStyle : inactiveStyle }
          >
            { child }
          </FadeThroughChild>

        )) }
      </div>
    )
  }
}

FadeThroughComponent.propTypes = {
  activeIndex: PropTypes.number,
  fadeDuration: PropTypes.number,
  children: PropTypes.array,
}
FadeThroughComponent.defaultProps = {
  activeIndex: 0,
  fadeDuration: 3,
}
