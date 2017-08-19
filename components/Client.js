import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { grayShade1 } from '../config/colors'

const ClientText = styled.span`
  color: ${grayShade1};
`

const Client = ({ client }) => (
  <ClientText>{client.name}</ClientText>
)

Client.propTypes = {
  client: PropTypes.object
}

export default Client
