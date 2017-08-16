import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.div`
  padding: 0 1em;
`

const BrandingText = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-weight: 500 !important;
  color: ${p => p.color || '#fff'} !important;
  font-size: 1.5em;
  line-height: 1em;
`

const SiteTitle = ({ level, children, color }) => (
  <Container>
    <Link href='/'><BrandingText color={color}>eureka mastering</BrandingText></Link>
  </Container>
)

export default SiteTitle
