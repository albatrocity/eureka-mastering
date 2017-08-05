import Box from 'react-boxen'
import Scrollspy from 'react-scrollspy'
import NavLink from './NavLink'
import units from '../config/units'
import { gray, blue, gold, black } from '../config/colors'
import styled from 'styled-components'
import ConstrainedContainer from './ConstrainedContainer'

const StyledFooter = styled.div`
  background: ${black};
  transition: 0.4s all;
  border-bottom: 2px solid ${blue}
  min-height: 200px;
  padding: 2em 0.4em;
  color: ${gray};
  a {
    color: ${gray}
  }
`

const Footer = (props) => {
  console.log(props)
  return (
    <StyledFooter>
      <ConstrainedContainer>
        <div dangerouslySetInnerHTML={{__html: props.contact.content}} />
      </ConstrainedContainer>
    </StyledFooter>
  )
}

export default Footer
