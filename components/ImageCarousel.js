import styled from 'styled-components'

import FadeThrough from './FadeThrough/FadeThroughContainer'
import PropTypes from 'prop-types'
import { black } from '../config/colors'

const ImageCarousel = (props) => {
  const { images, children, opacity, abstract, height, fadeDuration, delay } = props

  const config = {
    delay: delay || 5000,
    height: `${height || 400}px`,
    width: '100%',
    fadeDuration: fadeDuration
  }

  const StyledContainer = styled.div`
    overflow: hidden;
    display: block;
    height: ${height || 400}px;
    width: 100%;
    background-color: ${black};
    background-repeat: no-repeat;
    ${props => props.abstract ? `
      background-position: 50% 100%;
      background-size: cover;
      background-attachment: fixed;
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
}

export default ImageCarousel
