import React from 'react'
import PropTypes from 'prop-types'
import { gray, black } from '../config/colors'
import styled from 'styled-components'
import ConstrainedContainer from './ConstrainedContainer'

const StyledFooter = styled.div`
  background: ${props => props.color || black};
  transition: 0.4s all;
  min-height: 200px;
  padding: 2em 0.4em;
  color: ${gray};
  a {
    color: ${gray}
  }
`

const Footer = (props) => {
  return (
    <StyledFooter color={props.color}>
      <ConstrainedContainer>
        <div dangerouslySetInnerHTML={{__html: props.contact.content}} />
      </ConstrainedContainer>
    </StyledFooter>
  )
}

Footer.propTypes = {
  color: PropTypes.string,
  contact: PropTypes.object,
}

export default Footer
