import Link from 'next/link'
import styled from 'styled-components'
import MainLayout from '../components/MainLayout'
import fetch from 'isomorphic-unfetch'
import { apiUrl } from '../config/urls'
import media from '../config/media'
import { gray, black } from '../config/colors'

import Client from '../components/Client'
import Service from '../components/Service'
import ImageCarousel from '../components/ImageCarousel'
import Heading from '../components/Text/Heading'
import ConstrainedContainer from '../components/ConstrainedContainer'
import ProjectGrid from '../components/ProjectGrid'
import SiteTitle from '../components/SiteTitle'
import Social from '../components/Social'

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

const Index = ({page, clients, services, equipment, projects, contact}) => (
  <MainLayout contact={contact}>
    <div id='about'>
      <ImageCarousel images={page.images} opacity='0.6' abstract={true}/>
      <SiteTitle>Eureka Mastering</SiteTitle>
      <ConstrainedContainer>
        <About>
          <Social/>
          <div dangerouslySetInnerHTML={{__html: page.content}} />
        </About>
      </ConstrainedContainer>
    </div>
    <Section id='services'>
      <ConstrainedContainer>
        <Heading>Services</Heading>
        { services.map(c => <Service key={c._id} service={c} />)}
      </ConstrainedContainer>
    </Section>
    <Section id='equipment'>
      <ConstrainedContainer>
        <Heading>Equipment</Heading>
      </ConstrainedContainer>
      { equipment.images.length > 0 &&
        <div style={{margin: '2em 0', backgroundColor: black}} >
          <ImageCarousel
            images={equipment.images}
            height={800}
            fadeDuration={1.8}
            delay={4000}
            />
        </div>
      }
      <ConstrainedContainer>
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
            <span key={c._id}>
              <Client client={c} />
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
