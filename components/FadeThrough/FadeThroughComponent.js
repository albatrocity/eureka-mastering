import React, { Component } from 'react'
import FadeThroughChild from './FadeThroughChild'

export default class FadeThroughComponent extends Component {

  render() {
    const inactiveStyle = {
      position: 'absolute',
      top: 0,
      transition: `opacity ${this.props.fadeDuration || 3}s`,
      opacity: '0',
      width: '100%'
    }

    const activeStyle = {
      position: 'relative',
      transition: `opacity ${this.props.fadeDuration || 3}s`,
      opacity: '1',
      width: '100%'
    }

    return (
      <div style={{ position: 'relative'}} id='faderContainer'>
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

FadeThroughComponent.defaultProps = {
  activeIndex: 0,
}
