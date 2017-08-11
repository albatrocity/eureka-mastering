import styled from 'styled-components'
import PropTypes from 'prop-types'
import Box from 'react-boxen'
import units from '../config/units'
import { gray, grayTrans } from '../config/colors'
import Play from 'react-icons/lib/io/play'
import Pause from 'react-icons/lib/io/pause'

const PlayerControls = ({audio, onPlay, onPause, state, id}) => {
  console.log(state)
  console.log(audio)
  return (
    <div>
      { (state.audio_playing && state.audio_url === audio.url) ?
        <Pause onClick={() => onPause() }/>
        :
        <Play onClick={() => onPlay(audio.url) } />
      }
    </div>
  )
}

PlayerControls.propTypes = {
}

export default PlayerControls
