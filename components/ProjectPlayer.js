import styled from 'styled-components'
import PropTypes from 'prop-types'
import Box from 'react-boxen'
import units from '../config/units'
import { gray, grayTrans } from '../config/colors'
import Play from 'react-icons/lib/io/play'
import Pause from 'react-icons/lib/io/pause'
import AlbumCover from './AlbumCover'

const ProjectPlayer = ({image, audio}) => (
  <div>{ image && <AlbumCover image={image} audio={audio} /> }</div>
)

ProjectPlayer.propTypes = {
}

export default ProjectPlayer
