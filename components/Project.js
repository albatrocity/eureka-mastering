import Box from 'react-boxen'
import styled from 'styled-components'
import { grayShade1, gray, gold, black } from '../config/colors'
import units from '../config/units'

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
    <Thumbnail src={image.url} />
    <ProjectName>{ title }</ProjectName>
    { artist && <ArtistName>{ artist }</ArtistName> }
  </div>
)

const Project = ({ project }) => (
  <Box>
    { project.url ?
      <ProjectLink href={project.url}>{projectEl(project)}</ProjectLink>
      :
      projectEl(project)
    }
  </Box>
)

export default Project
