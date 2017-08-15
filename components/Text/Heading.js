import styled from 'styled-components'
import media from '../../config/media'
import units from '../../config/units'

const H1 = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 3em;
  ${media.phone`font-size: 2.5em;`}
  margin-bottom: ${units[2]};
`
const H2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 2.25em;
`
const H3 = styled.h3`
  font-weight: 900;
  font-size: 1.75em;
`
const H4 = styled.h4`
  font-size: 1.125em;
`

const Heading = ({ level, children }) => {
  switch (level) {
    case 1:
      return <H1>{children}</H1>
    case 2:
      return <H2>{children}</H2>
    case 3:
      return <H3>{children}</H3>
    case 4:
      return <H4>{children}</H4>
    default:
      return <H1>{children}</H1>
  }

}

export default Heading
