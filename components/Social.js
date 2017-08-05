import Box from 'react-boxen'
import { SocialIcon } from 'react-social-icons'
import { blue } from '../config/colors'

const iconSize = 30

const style = {
  height: `${iconSize}px`,
  width: `${iconSize}px`,
}

const Social = () => (
  <Box childSpacing='0.6em' childDirection='row' childJustify='flex-end'>
    <SocialIcon style={style} color={blue} url="https://www.facebook.com/mikenoltemastering" />
    <SocialIcon style={style} color={blue} url="http://instagram.com/eurekamastering" />
  </Box>
)

export default Social
