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
  <Box padding='0.4em 0 '>
    <ProjectName>{ title }</ProjectName>
    { artist && <ArtistName>{ artist }</ArtistName> }
  </Box>
)

class Project extends Component {
  render() {
    const { project, config } = this.props
    return (
      <Box>
        <ProjectPlayer config={config} image={project.image} audio={project.audio_sample} id={project._id} />
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
