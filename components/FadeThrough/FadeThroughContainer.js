import React, { Component } from 'react'
import FadeThroughComponent from './FadeThroughComponent'

export default class FadeThroughContainer extends Component {

  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
  }

  componentDidMount() {
    this.interval = setInterval(
      this.next(),
      this.props.delay
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  next() {
    return () => {
      this.setState({ activeIndex: this.state.activeIndex + 1 })
      if (this.state.activeIndex === this.props.children.length)
        this.setState({ activeIndex: 0 })
    }
  }

  render() {
    const style = {
      width: this.props.width,
      height: this.props.height,
      transform: 'translate3d(0, 0, 0)'
    }
    return (
      <div style={ style }>
        <FadeThroughComponent
          activeIndex={ this.state.activeIndex }
          delay={ this.props.delay }
          fadeDuration={ this.props.fadeDuration || 3}
        >
          { this.props.children }
        </FadeThroughComponent>
      </div>
    )
  }
}

FadeThroughContainer.propTypes = {
  width: React.PropTypes.string.isRequired,
  height: React.PropTypes.string.isRequired,
  delay: React.PropTypes.number.isRequired,
  fadeDuration: React.PropTypes.number,
}
