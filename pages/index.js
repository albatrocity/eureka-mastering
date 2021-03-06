import Link from "next/link";
import styled from "styled-components";
import withRedux from "next-redux-wrapper";
import Box from "react-boxen";
import { initStore, startClock, addCount, serverRenderClock } from "../store";
import fetch from "isomorphic-unfetch";
import ReactHowler from "react-howler";

import MainLayout from "../components/MainLayout";
import { apiUrl } from "../config/urls";
import media from "../config/media";
import { gray, black } from "../config/colors";

import Service from "../components/Service";
import ImageCarousel from "../components/ImageCarousel";
import Heading from "../components/Text/Heading";
import ConstrainedContainer from "../components/ConstrainedContainer";
import ProjectGrid from "../components/ProjectGrid";
import SiteTitle from "../components/SiteTitle";
import Social from "../components/Social";

import { setAudioLoading, pauseAudio } from "../store";

const Section = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
`;

const Index = ({
  page,
  services,
  equipment,
  projects,
  contact,
  config,
  state,
  setAudioLoading,
  pauseAudio,
  url
}) => (
  <MainLayout contact={contact} config={config} route={url} page={page}>
    {state.audio_url && (
      <ReactHowler
        src={state.audio_url}
        playing={state.audio_playing}
        onPlay={() => setAudioLoading(false)}
        onLoad={() => setAudioLoading(false)}
        xhrWithCredentials={true}
        onEnd={() => pauseAudio()}
      />
    )}
    <div id="about">
      <ImageCarousel images={page.images} opacity="0.6" abstract={true} />
      <ConstrainedContainer padding={"1em"}>
        <Social color={config.main_color} />
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </ConstrainedContainer>
    </div>
    <Section id="discography">
      <ConstrainedContainer padding={"1em"}>
        <Heading>Discography</Heading>
      </ConstrainedContainer>
      <ProjectGrid items={projects} config={config} />
      <ConstrainedContainer padding={"1em"}>
        <Box childAlign="flex-end">
          <p>
            see{" "}
            <Link prefetch href="/discography">
              <a>my full discography &rarr;</a>
            </Link>
          </p>
        </Box>
      </ConstrainedContainer>
    </Section>
    <Section id="equipment">
      <ConstrainedContainer padding={"1em"}>
        <Heading>Equipment</Heading>
      </ConstrainedContainer>
      {equipment.images.length > 0 && (
        <div style={{ margin: "2em 0" }}>
          <ImageCarousel
            images={equipment.images}
            fadeDuration={1.5}
            delay={4000}
          />
        </div>
      )}
      <ConstrainedContainer padding={"1em"}>
        <div dangerouslySetInnerHTML={{ __html: equipment.content }} />
      </ConstrainedContainer>
    </Section>
    <Section id="services">
      <ConstrainedContainer padding={"1em"}>
        <Heading>Services</Heading>
        {services.map(c => <Service key={c._id} service={c} />)}
      </ConstrainedContainer>
    </Section>
  </MainLayout>
);

Index.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`${apiUrl}/pages/home`);
  const page = await res.json();
  return page;
};

const mapStateToProps = state => ({
  state: state.app
});

export default withRedux(initStore, mapStateToProps, {
  setAudioLoading,
  pauseAudio
})(Index);
