import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { playAudio, pauseAudio, advanceAudio } from '../store'
import Box from 'react-boxen'
import units from '../config/units'
import { gray, grayTrans } from '../config/colors'
import Play from 'react-icons/lib/io/play'
import Pause from 'react-icons/lib/io/pause'
import AlbumCover from './AlbumCover'
import PlayerControls from './PlayerControls'

const StyledAlbumCover = styled.div`
  position: relative;
`
const PlayerOverlay = styled.div`
  opacity: 0;
  background: rgba(0,0,0,0.5);
  position: absolute;
  margin: 4px;
  transition: all 0.6s;

  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  &:hover {
    opacity: 1;
  }
`

const ProjectPlayer = ({image, audio, id, state, playAudio, pauseAudio, updateProgress}) => (
  <div>
    <StyledAlbumCover>
      <AlbumCover image={image} />
      { audio &&
        <PlayerOverlay>
          <PlayerControls
            audio={audio}
            id={id}
            state={state}
            onPlay={playAudio}
            onPause={pauseAudio}
            onProgress={updateProgress} />
        </PlayerOverlay>
      }
    </StyledAlbumCover>
  </div>
)

ProjectPlayer.propTypes = {
}

const mapStateToProps = (state) => ({
  state: state,
})

const mapDispatchToProps = (dispatch) => {
  return {
    playAudio: bindActionCreators(playAudio, dispatch),
    pauseAudio: bindActionCreators(pauseAudio, dispatch),
    updateProgress: bindActionCreators(advanceAudio, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPlayer)
