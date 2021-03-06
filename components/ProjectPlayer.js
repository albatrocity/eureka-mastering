import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { playAudio, pauseAudio, advanceAudio } from '../store'
import AlbumCover from './AlbumCover'
import PlayerControls from './PlayerControls'

const StyledAlbumCover = styled.div`
  position: relative;
  transition: all 1s;

`
const PlayerOverlay = styled.div`
  opacity: 0;
  position: absolute;
  margin: 35% 4px 0 4px;
  transition: all 0.6s;

  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  ${props => props.isActive ? `
    transform: translate(0, -20px);
    opacity: 1;
  ` : ''}

  &:hover {
    opacity: 1;
  }
`

const ProjectPlayer = ({image, audio, id, state, playAudio, pauseAudio, updateProgress, config}) => (
  <div>
    <StyledAlbumCover>
      <AlbumCover image={image} active={audio && audio.url === state.audio_url} />
      { audio &&
        <PlayerOverlay isActive={state.audio_url === audio.url}>
          <PlayerControls
            audio={audio}
            id={id}
            state={state}
            onPlay={playAudio}
            onPause={pauseAudio}
            onProgress={updateProgress}
            color={config.main_color} grow/>
        </PlayerOverlay>
      }
    </StyledAlbumCover>
  </div>
)

ProjectPlayer.propTypes = {
  image: PropTypes.object,
  audio: PropTypes.object,
  id: PropTypes.string,
  playAudio: PropTypes.func,
  pauseAudio: PropTypes.func,
  state: PropTypes.object,
  updateProgress: PropTypes.func,
  config: PropTypes.object,
}

const mapStateToProps = (state) => ({
  state: state.app,
})

const mapDispatchToProps = (dispatch) => {
  return {
    playAudio: bindActionCreators(playAudio, dispatch),
    pauseAudio: bindActionCreators(pauseAudio, dispatch),
    updateProgress: bindActionCreators(advanceAudio, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPlayer)
