import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import fetch from 'isomorphic-unfetch'
import { apiUrl } from '../config/urls'

import Client from '../components/Client'
import Service from '../components/Service'

const Index = ({page, clients, services}) => (
  <MainLayout>
    <div dangerouslySetInnerHTML={{__html: page.content}} />
    { clients.map(c => <Client key={c._id} client={c} />)}
    { services.map(c => <Service key={c._id} service={c} />)}
  </MainLayout>
)

Index.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`${apiUrl}/pages/home`)
  const page = await res.json()
  return page
}

export default Index
