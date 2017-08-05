import styled from 'styled-components'
import { gray, grayShade1, grayShade2 } from '../config/colors'

const ClientText = styled.span`
  color: ${grayShade1};
`

const Client = ({ client }) => (
  <ClientText>{client.name}</ClientText>
)

export default Client
