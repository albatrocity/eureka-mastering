import Slider from 'react-slick'

import Link from 'next/link'
import Box from './Box'

const config = {
  arrows: false,
  autoplay: true,
  fade: true,
  swipe: false,
  swipeToSlide: false,
  useCSS: true,
  lazyLoad: false,
  draggable: false,
}

const ImageCarousel = ({ images }) => (
  <Slider {...config} style={{height: '200px'}}>
    { images.map(i => <img src={i.url} />)}
  </Slider>
)

export default ImageCarousel
