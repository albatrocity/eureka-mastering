import React, { Component } from 'react'
import Box from 'react-boxen'
import styled from 'styled-components'

import { grayShade1, gray, gold, black } from '../config/colors'
import units from '../config/units'
import PlayerControls from './PlayerControls'
import ProjectPlayer from './ProjectPlayer'

const ProjectName = styled.h3`
  margin: 0;
  line-height: 1.2em;
`
const ArtistName = styled.span`
  color: ${grayShade1};
  font-weight: normal
`
const ProjectLink = styled.a`
  text-decoration: none;
  color: ${black}
`

const projectEl = ({image, title, artist}) => (
  <div>
    <ProjectName>{ title }</ProjectName>
    { artist && <ArtistName>{ artist }</ArtistName> }
  </div>
)

class Project extends Component {
  render() {
    const { project } = this.props
    return (
      <Box>
        <ProjectPlayer image={project.image} audio={project.audio_sample} id={project._id} />
        { project.url ?
          <ProjectLink href={project.url}>{projectEl(project)}</ProjectLink>
          :
          projectEl(project)
        }
      </Box>
    )
  }
}

export default Project
