import Box from 'react-boxen'
import { SocialIcon } from 'react-social-icons'
import { blue } from '../config/colors'

const iconSize = 30

const style = {
  height: `${iconSize}px`,
  width: `${iconSize}px`,
}

const Social = ({color}) => (
  <Box childDirection='row' childJustify='flex-end' childSpacing={'10px'}>
    <SocialIcon style={style} color={color || blue} url="https://www.facebook.com/mikenoltemastering" />
    <SocialIcon style={style} color={color || blue} url="http://instagram.com/eurekamastering" />
  </Box>
)

export default Social
