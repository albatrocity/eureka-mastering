import React from 'react'
import PropTypes from 'prop-types'
import Box from 'react-boxen'
import styled from 'styled-components'

const StyledContainer = styled(Box)`
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;

`

const ConstrainedContainer = (props) => (
  <StyledContainer {...props}>
    { props.children }
  </StyledContainer>
)

ConstrainedContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ])
}

export default ConstrainedContainer
