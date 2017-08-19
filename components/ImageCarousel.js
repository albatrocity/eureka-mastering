import React from 'react'
import styled from 'styled-components'

import FadeThrough from './FadeThrough/FadeThroughContainer'
import PropTypes from 'prop-types'
import { black } from '../config/colors'

const ImageCarousel = (props) => {
  const { images, children, abstract, height, fadeDuration, delay } = props

  const config = {
    delay: delay || 5000,
    height: `${height || '400px'}`,
    width: '100%',
    fadeDuration: fadeDuration
  }

  const StyledContainer = styled.div`
    overflow: hidden;
    display: block;
    height: ${height || '400px'};
    width: 100%;
    background-color: ${black};
    background-repeat: no-repeat;
    ${props => props.abstract ? `
      background-position: 50% 100%;
      background-size: cover;
      background-attachment: fixed;
      @media (max-width: ${768 / 16}em) {
        background-attachment: scroll
      }
    ` : `
      background-size: scale;
      background-size: contain;
      background-position: center center;
    `}
  `
  return (
    <FadeThrough {...config}>
      { images.map((img) => (
        <StyledContainer abstract={abstract} key={img._id} style={{backgroundImage: `url(${img.url})`}}>
          { children }
        </StyledContainer>
      )
      ) }

    </FadeThrough>
  )
}

ImageCarousel.propTypes = {
  images: PropTypes.array,
  children: PropTypes.array,
  abstract: PropTypes.bool,
  height: PropTypes.string,
  fadeDuration: PropTypes.number,
  delay: PropTypes.number,
}

export default ImageCarousel
