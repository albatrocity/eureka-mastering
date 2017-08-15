import styled from 'styled-components'
import { blue } from '../config/colors'
import units from '../config/units'
import media from '../config/media'

const Container = styled.div`
  padding: 0 1em;
`

const BrandingText = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-weight: 500 !important;
  color: ${p => p.color || '#fff'} !important;
  font-size: 1.5em;
  line-height: 1em;
  ${media.phone`font-size: 1em;`}
`

const SiteTitle = ({ level, children, color }) => {
  console.log(color)
  return (
    <Container>
      <BrandingText color={color}>eureka mastering</BrandingText>
    </Container>
  )}

export default SiteTitle
