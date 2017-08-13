import styled from 'styled-components'
import PropTypes from 'prop-types'
import Box from 'react-boxen'
import units from '../config/units'
import media from '../config/media'
import { gray, grayTrans } from '../config/colors'

const StyledAnchor = styled.a`
  color: ${p => p.isActive ? gray : grayTrans };
  background: ${p => p.isActive ? `rgba(0, 0, 0, 0.3)` : 'transparent'};
  transition: 0.4s all;
  padding: 0.5em 1em;
  ${media.phone`padding-left: 0.3em; padding-right: 0.3em;`}
  text-decoration: none;
  font-weight: 700;
`

const NavLink = (props) => {

  const BoxWrapper = (p) => (
    <Box padding={units[3]}>
      <StyledAnchor isActive={p.isActive} href={p.href}>{p.children}</StyledAnchor>
    </Box>
  )

  const Link = styled(BoxWrapper)`
    cursor: pointer;
  `

  return (
    <Link grow isActive={props.className === 'is-current'} href={`#${props.id}`}>
      { props.title }
    </Link>
  )
}

NavLink.propTypes = {
  className: PropTypes.string,
}

export default NavLink
