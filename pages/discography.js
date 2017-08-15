import Link from 'next/link'
import styled from 'styled-components'
import withRedux from 'next-redux-wrapper'
import ReactPlayer from 'react-player'
import { initStore, startClock, addCount, serverRenderClock } from '../store'
import fetch from 'isomorphic-unfetch'

import MainLayout from '../components/MainLayout'
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
import Head from 'next/head'

import setAudioLoading from '../store'

const Section = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  border-bottom: 1px solid ${gray};
  padding-bottom: 2em;
`

const Discography = ({page, clients, projects, contact, config, state, audioLoadingSet, url}) => (
  <MainLayout contact={contact} config={config} route={url} page={page}>
    <ReactPlayer
      url={state.audio_url}
      playing={state.audio_playing}
      onBuffer={() => setAudioLoading(true)}
      onPlay={() => setAudioLoading(false)}
      controls={false}
      style={{display: 'none'}}
      />
    <div>
      <ConstrainedContainer padding={'1em'}>
        <Social color={config.main_color} />
        <div dangerouslySetInnerHTML={{__html: page.content}} />
      </ConstrainedContainer>
    </div>
    <Section>
      <ConstrainedContainer padding={'1em'}>
        <Heading>Discography</Heading>
      </ConstrainedContainer>
      <ProjectGrid items={projects} config={config} />
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

Discography.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`${apiUrl}/pages/discography`)
  const page = await res.json()
  return page
}

const mapStateToProps = (state) => ({
  state: state,
})

export default withRedux(initStore, mapStateToProps, { setAudioLoading })(Discography)
