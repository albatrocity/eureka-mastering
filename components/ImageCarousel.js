import Slider from 'react-slick'

import Link from 'next/link'
import Box from 'react-boxen'
import styled from 'styled-components'

const config = {
  arrows: false,
  autoplay: true,
  fade: true,
  swipe: false,
  swipeToSlide: false,
  useCSS: true,
  lazyLoad: false,
  draggable: false,
  adaptiveHeight: false,
}

const StyledContainer = styled.div`
  width: 100%;
  heiht: 100px;
  overflow: hidden;
  background: yellow
  display: block
`

const ImageCarousel = ({ images }) => (
  <StyledContainer>
  
  </StyledContainer>
)

// { (images && images.length > 0) &&
//   <Slider {...config}>
//     { images.map(i => <img key={i._id} src={i.url} />)}
//   </Slider>
// }


export default ImageCarousel
