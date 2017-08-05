import Link from 'next/link'
import styled from 'styled-components'
import MainLayout from '../components/MainLayout'
import fetch from 'isomorphic-unfetch'
import { apiUrl } from '../config/urls'
import media from '../config/media'
import { gray } from '../config/colors'

import Client from '../components/Client'
import Service from '../components/Service'
import ImageCarousel from '../components/ImageCarousel'
import Heading from '../components/Text/Heading'
import ConstrainedContainer from '../components/ConstrainedContainer'
import ProjectGrid from '../components/ProjectGrid'
import SiteTitle from '../components/SiteTitle'

const About = styled.div`
  margin-top: 6em;
  ${media.tablet`margin-top: 0`}
  ${media.phone`margin-top: 0`}
`

const Section = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  border-bottom: 1px solid ${gray};
  padding-bottom: 2em;
`

const Index = ({page, clients, services, equipment, projects}) => (
  <MainLayout>
    <div id='about'>
      <ImageCarousel images={page.images} opacity='0.6'/>
      <SiteTitle>Eureka Mastering</SiteTitle>
      <ConstrainedContainer>
        <About dangerouslySetInnerHTML={{__html: page.content}} />
      </ConstrainedContainer>
    </div>
    <Section id='services'>
      <ConstrainedContainer>
        <Heading>Services</Heading>
        { services.map(c => <Service key={c._id} service={c} />)}
      </ConstrainedContainer>
    </Section>
    <Section id='equipment'>
      <ImageCarousel images={equipment.images} />
      <ConstrainedContainer>
        <Heading>Equipment</Heading>
        <div dangerouslySetInnerHTML={{__html: equipment.content}} />
      </ConstrainedContainer>
    </Section>
    <Section id='discography'>
      <ConstrainedContainer>
        <Heading>Discography</Heading>
      </ConstrainedContainer>
      <ProjectGrid items={projects} />
      <ConstrainedContainer>
        <div>{ clients.map((c, i) => {
          return (
            <span>
              <Client key={c._id} client={c} />
              { (i < clients.length-1) ? ', ' : '' }
            </span>
          )
        })}</div>
      </ConstrainedContainer>
    </Section>
  </MainLayout>
)

Index.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`${apiUrl}/pages/home`)
  const page = await res.json()
  return page
}

export default Index
