import styled from 'styled-components'
import PlayerControls from './PlayerControls'

const Thumbnail = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-width: 4px;
  border-style: solid;
  transition: all 0.4s;
  border-color: transparent;
  border-radius: 2px;
  box-shadow: 0 0 1px 1px rgba(0,0,0,0.1);
  &:hover {
    border-color: transparent;
    box-shadow: 0 0 1px 1px rgba(0,0,0,0);
  }
`

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

const AlbumCover = ({ image, audio }) => (
  <StyledAlbumCover>
    <Thumbnail src={image.url} />
    { audio &&
      <PlayerOverlay>
        <PlayerControls />
      </PlayerOverlay>
    }
  </StyledAlbumCover>
)

export default AlbumCover
