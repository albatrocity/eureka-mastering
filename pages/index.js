import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import fetch from 'isomorphic-unfetch'
import { apiUrl } from '../config/urls'

import Client from '../components/Client'
import Service from '../components/Service'
import ImageCarousel from '../components/ImageCarousel'
import Heading from '../components/Text/Heading'
import ConstrainedContainer from '../components/ConstrainedContainer'

const Index = ({page, clients, services, equipment}) => (
  <MainLayout>
    <div id='about'>
      <ImageCarousel images={page.images} />
      <ConstrainedContainer>
        <div dangerouslySetInnerHTML={{__html: page.content}} />
      </ConstrainedContainer>
    </div>
    <div id='services'>
      <ConstrainedContainer>
        <Heading>Services</Heading>
        { services.map(c => <Service key={c._id} service={c} />)}
      </ConstrainedContainer>
    </div>
    <div id='equipment'>
      <ImageCarousel images={equipment.images} />
      <ConstrainedContainer>
        <Heading>Equipment</Heading>
        <div dangerouslySetInnerHTML={{__html: equipment.content}} />
      </ConstrainedContainer>
    </div>
    <div id='discography'>
      <ConstrainedContainer>
        <Heading>Discography</Heading>
        { clients.map(c => <Client key={c._id} client={c} />)}
      </ConstrainedContainer>
    </div>
  </MainLayout>
)

Index.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`${apiUrl}/pages/home`)
  const page = await res.json()
  return page
}

export default Index
