import Box from 'react-boxen'
import Scrollspy from 'react-scrollspy'
import NavLink from './NavLink'
import units from '../config/units'
import styled from 'styled-components'

const StyledContainer = styled(Box)`
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;

`

const ConstrainedContainer = (props) => (
  <StyledContainer>
    { props.children }
  </StyledContainer>
)

export default ConstrainedContainer
