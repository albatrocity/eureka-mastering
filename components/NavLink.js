import styled from 'styled-components'
import PropTypes from 'prop-types'
import Box from 'react-boxen'
import units from '../config/units'
import media from '../config/media'
import { gray, grayTrans } from '../config/colors'
import Link from 'next/link'

const StyledAnchor = styled.a`
  color: ${p => p.color || `#fff` };
  background: ${p => p.isActive ? `rgba(0, 0, 0, 0.3)` : 'transparent'};
  opacity: 0.7;
  transition: 0.4s all;
  padding: 0.5em 0.8em;
  ${media.phone`padding: 0.7em 0.5em; font-size: 0.8em`}
  ${media.sixplus`padding: 0.7em 0.5em; font-size: 0.8em`}
  text-decoration: none;
  font-weight: 100;
  cursor: pointer;
`

const StyledLink = styled(Link)`
  cursor: pointer;
`

const NavLink = (props) => {
  const navigate = () => {
    if (props.onNavigate) {
      props.onNavigate()
    }
  }


  const BoxWrapper = (p) => (
    <Box shrink padding={units[3]} childSpacing={0} childAlign='center'>
      { p.inPage ?
        <StyledAnchor onClick={navigate} isActive={p.isActive} href={p.href} color={props.color}>{p.children}</StyledAnchor>
        :
        <StyledLink href={{ pathname: '/', hash: p.href}} color={props.color}><StyledAnchor isActive={p.isActive}>{p.children}</StyledAnchor></StyledLink>
      }
    </Box>
  )

  const BoxNavLink = styled(BoxWrapper)`
    cursor: pointer;
  `
  const isCurrentPage = props.route.pathname.replace('/','') === props.id
  return (
    <BoxNavLink color={props.color} inPage={props.inPage} href={`#${props.id}`}>
      { props.title }
    </BoxNavLink>
  )
}

NavLink.propTypes = {
  className: PropTypes.string,
}

export default NavLink
