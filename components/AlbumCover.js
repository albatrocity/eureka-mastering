import styled from 'styled-components'


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


const AlbumCover = ({ image }) => (
  <Thumbnail src={image.url} />
)

export default AlbumCover
