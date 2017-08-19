import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Box from 'react-boxen'


const Thumbnail = styled(Box)`
  border-width: 4px;
  border-style: solid;
  transition: all 0.4s;
  border-color: transparent;
  border-radius: 2px;
  box-shadow: 0 0 1px 1px rgba(0,0,0,0.1);
  background: url(${props => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  ${props => props.active ? `
    transform: translate(0, -20px);
    box-shadow: 0 0 16px rgba(0,0,0,0.4);
  ` : ''}
`


const AlbumCover = ({ image, active }) => (
  <Thumbnail childBasis={'220px'} grow url={image.url} active={active}>
    &nbsp;
  </Thumbnail>
)

AlbumCover.propTypes = {
  image: PropTypes.string,
  active: PropTypes.bool,
}

export default AlbumCover
