import React from 'react'
import PropTypes from 'prop-types'
import Box from 'react-boxen'
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

const ProjectGrid = ({ items, config }) => (
  <Box {...boxOptions}>
    { items.map((item) => <Project config={config} key={item._id} project={item}/>) }
  </Box>
)

ProjectGrid.propTypes = {
  items: PropTypes.array,
  config: PropTypes.object,
}

export default ProjectGrid
