import styled from 'styled-components'
import PropTypes from 'prop-types'
import Box from 'react-boxen'
import units from '../config/units'
import { gray, grayTrans, white } from '../config/colors'
import Play from 'react-icons/lib/io/play'
import Pause from 'react-icons/lib/io/pause'
import Loading from './Loading'

const Circle = styled.div`
  border-radius: 100%;
  background: rgba(255,255,255, 0.4);
  box-shadow: 0 0 4px rgba(0,0,0,0.4);
  padding: 0.6em;
  text-align: center;
`

const PlayerControls = ({audio, onPlay, onPause, state, id, color}) => {
  return (
    <Box childAlign='center' childJustify='center' grow>
      <Circle>
        { state.audio_loading &&
          <Loading />
        }
        { (state.audio_playing && state.audio_url === audio.url) ?
          <Pause
            size={60}
            color={color}
            onClick={() => onPause() }
          />
          :
          <Play
            size={60}
            color={color}
            style={{left: '4px', position: 'relative'}}
            onClick={() => onPlay(audio.url) }
          />
        }
      </Circle>
    </Box>
  )
}

PlayerControls.propTypes = {
}

export default PlayerControls