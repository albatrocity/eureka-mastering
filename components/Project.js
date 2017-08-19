import React, { Component } from 'react'
import Box from 'react-boxen'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { grayShade1, black } from '../config/colors'
import ProjectPlayer from './ProjectPlayer'

const ProjectName = styled.h4`
  margin: 0;
  line-height: 1.2em;
  font-weight: 500;
  font-size: 1.4em;
  margin-top: 0;
  color: ${black};
`
const ArtistName = styled.span`
  color: ${grayShade1};
  font-weight: 100;
`
const ProjectLink = styled.a`
  text-decoration: none;
  color: ${black}
`

const projectEl = ({title, artist}) => (
  <Box padding='0.4em 0 '>
    <ProjectName level={3}>{ title }</ProjectName>
    { artist && <ArtistName>{ artist }</ArtistName> }
  </Box>
)

projectEl.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
}

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

Project.propTypes = {
  project: PropTypes.object,
  config: PropTypes.object,
}

export default Project
