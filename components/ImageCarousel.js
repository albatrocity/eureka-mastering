import styled from 'styled-components'

import FadeThrough from './FadeThrough/FadeThroughContainer'
import Heading from './Text/Heading'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Box from 'react-boxen'
import media from '../config/media'

const config = {
  delay: 5000,
  height: '400px',
  width: '100%',
}

const StyledContainer = styled.div`
  overflow: hidden;
  background: yellow;
  display: block;
  height: 400px;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  ${media.tablet`height: 200px; margin-bottom: -200px`}
`
const ImageContainer = styled.div`
  height: 400px;
  width: 100%;
`

const ImageCarousel = ({ images, children, opacity }) => (
  <FadeThrough {...config}>
    { images.map((img) => (
      <StyledContainer key={img._id} style={{backgroundImage: `url(${img.url})`, opacity: opacity || 1}}>
        { children }
      </StyledContainer>
    )
    ) }

  </FadeThrough>
)

ImageCarousel.propTypes = {
  images: PropTypes.array,
}

export default ImageCarousel
