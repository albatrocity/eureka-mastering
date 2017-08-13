import styled from 'styled-components'
import PropTypes from 'prop-types'
import Box from 'react-boxen'
import units from '../config/units'
import media from '../config/media'
import { gray, grayTrans } from '../config/colors'
import Link from 'next/link'

const StyledAnchor = styled.a`
  color: ${p => p.isActive ? gray : grayTrans };
  background: ${p => p.isActive ? `rgba(0, 0, 0, 0.3)` : 'transparent'};
  transition: 0.4s all;
  padding: 0.5em 1em;
  ${media.phone`padding-left: 0.3em; padding-right: 0.3em;`}
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
`

const StyledLink = styled(Link)`
  cursor: pointer;
`

const NavLink = (props) => {

  const BoxWrapper = (p) => (
    <Box padding={units[3]}>
      { p.inPage ?
        <StyledAnchor isActive={p.isActive} href={p.href}>{p.children}</StyledAnchor>
        :
        <StyledLink href={{ pathname: '/', hash: p.href}}><StyledAnchor isActive={p.isActive}>{p.children}</StyledAnchor></StyledLink>
      }
    </Box>
  )

  const SpyLink = styled(BoxWrapper)`
    cursor: pointer;
  `
  const isCurrentPage = props.route.pathname.replace('/','') === props.id
  return (
    <SpyLink grow inPage={props.inPage} isActive={props.className === 'is-current' || isCurrentPage} href={`#${props.id}`}>
    { props.title }
    </SpyLink>
  )
}

NavLink.propTypes = {
  className: PropTypes.string,
}

export default NavLink
