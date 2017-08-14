import Link from 'next/link'
import styled from 'styled-components'
import withRedux from 'next-redux-wrapper'
import ReactPlayer from 'react-player'
import Box from 'react-boxen'
import { initStore, startClock, addCount, serverRenderClock } from '../store'
import fetch from 'isomorphic-unfetch'

import MainLayout from '../components/MainLayout'
import { apiUrl } from '../config/urls'
import media from '../config/media'
import { gray, black } from '../config/colors'

import Service from '../components/Service'
import ImageCarousel from '../components/ImageCarousel'
import Heading from '../components/Text/Heading'
import ConstrainedContainer from '../components/ConstrainedContainer'
import ProjectGrid from '../components/ProjectGrid'
import SiteTitle from '../components/SiteTitle'
import Social from '../components/Social'

import setAudioLoading from '../store'

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

const Index = ({page, services, equipment, projects, contact, config, state, audioLoadingSet, url}) => (
  <MainLayout contact={contact} config={config} route={url} page={page}>
    <ReactPlayer
      url={state.audio_url}
      playing={state.audio_playing}
      onBuffer={() => setAudioLoading(true)}
      onPlay={() => setAudioLoading(false)}
      controls={false}
      style={{display: 'none'}}
      />
    <div id='about'>
      <ImageCarousel images={page.images} opacity='0.6' abstract={true}/>
      <SiteTitle>Eureka Mastering</SiteTitle>
      <ConstrainedContainer padding={'1em'}>
        <About>
          <Social color={config.main_color} />
          <div dangerouslySetInnerHTML={{__html: page.content}} />
        </About>
      </ConstrainedContainer>
    </div>
    <Section id='discography'>
      <ConstrainedContainer padding={'1em'}>
        <Heading>Discography</Heading>
      </ConstrainedContainer>
      <ProjectGrid items={projects} config={config} />
      <ConstrainedContainer padding={'1em'}>
        <Box childAlign='flex-end'>
          <p>see <Link prefetch href='/discography'><a>my full discography &rarr;</a></Link></p>
        </Box>
      </ConstrainedContainer>
    </Section>
    <Section id='equipment'>
      <ConstrainedContainer padding={'1em'}>
        <Heading>Equipment</Heading>
      </ConstrainedContainer>
      { equipment.images.length > 0 &&
        <div style={{margin: '2em 0', backgroundColor: black}} >
          <ImageCarousel
            images={equipment.images}
            height={'100vw'}
            fadeDuration={1.8}
            delay={4000}
            />
        </div>
      }
      <ConstrainedContainer padding={'1em'}>
        <div dangerouslySetInnerHTML={{__html: equipment.content}} />
      </ConstrainedContainer>
    </Section>
    <Section id='services'>
      <ConstrainedContainer padding={'1em'}>
        <Heading>Services</Heading>
        { services.map(c => <Service key={c._id} service={c} />)}
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

const mapStateToProps = (state) => ({
  state: state,
})

export default withRedux(initStore, mapStateToProps, { setAudioLoading })(Index)
