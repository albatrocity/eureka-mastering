import Box from 'react-boxen'
import styled from 'styled-components'
import { grayShade1, gray } from '../config/colors'
import units from '../config/units'
import Project from '../components/Project'

const boxOptions = {
  padding: '20px',
  childDirection: 'row',
  childBasis: '250px',
  childSpacing: '20px',
  childAlign: 'flex-start',
  childJustify: 'center',
  childWrap: 'wrap',
}

const ProjectGrid = ({ items, itemComponent, config }) => (
  <Box {...boxOptions}>
    { items.map((item) => <Project config={config} key={item._id} project={item}/>) }
  </Box>
)

export default ProjectGrid
