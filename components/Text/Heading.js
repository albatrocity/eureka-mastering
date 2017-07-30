import styled from 'styled-components'
import { blue } from '../../config/colors'
import units from '../../config/units'

const H1 = styled.h1`
  font-family: 'Titan One', cursive;
  font-size: 3em;
  color: ${blue};
  margin-bottom: ${units[2]};
`
const H2 = styled.h1`
  font-family: 'Titan One', cursive;
  font-size: 2.25em;
  color: ${blue};
`
const H3 = styled.h1`
  font-size: 1.75em;
  color: ${blue};
`
const H4 = styled.h1`
  font-size: 1.125em;
  color: ${blue};
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
