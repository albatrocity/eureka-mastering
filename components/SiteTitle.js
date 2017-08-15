import styled from 'styled-components'
import { blue } from '../config/colors'
import units from '../config/units'
import media from '../config/media'

const Container = styled.div`
  position: ${p => p.config === 'normal' ? 'relative' : 'absolute'};
  ${p => p.config !== 'normal' && `
    z-index: 9;
    top: 50px;
    left: 0;
    ${media.title1`top: 50px;`}
    ${media.title2`top: 100px;`}
    ${media.title3`top: 170px;`}
    ${media.title4`top: 240px;`}
    ${media.tablet`top: 0; padding-left: 1em; max-width: 36.5em; margin: 0 auto; position: relative`}
    ${media.phone`top: 0; max-width: 35.5em; margin: 0 auto; position: relative`}
  `}
`

const BrandingText = styled.h1`
  font-family: 'Oswald', sans-serif;
  color: ${blue};
  margin-bottom: ${units[2]};
  text-transform: uppercase;
  ${p => p.config === 'normal' ?
    `
      font-size: 3.5em !important;
    `
    :
    `
      line-height: 0.9em;
    `
}
  font-size: 12em;
  ${media.title1`font-size: 12em`}
  ${media.title2`font-size: 10em`}
  ${media.title3`font-size: 8em;`}
  ${media.title4`font-size: 6em;`}
  ${media.tablet`font-size: 3.5em;`}
  ${media.phone`font-size: 3em; line-height: 1em`}
`

const SiteTitle = ({ level, children, config }) => {
  return (
    <Container config={config}>
      <BrandingText config={config}>Eureka Mastering</BrandingText>
    </Container>
  )}

export default SiteTitle
