import React from 'react'
import PropTypes from 'prop-types'
import Box from 'react-boxen'
import styled from 'styled-components'
import { grayShade1, gray } from '../config/colors'
import units from '../config/units'

const StyledBox = styled(Box)`
  border-bottom: 1px solid ${gray};
`

const Pricing = styled.p`
  color: ${grayShade1};
  background: ${gray};
  padding: ${units[6]};
`

const Service = ({ service }) => (
  <StyledBox>
    <h2>{service.name}</h2>
    <div dangerouslySetInnerHTML={{__html: service.description}} />
    <Pricing>{ service.pricing }</Pricing>
  </StyledBox>
)

Service.propTypes = {
  service: PropTypes.object,
}

export default Service
