import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Box from 'react-boxen'
import styled from 'styled-components'
import { StickyContainer, Sticky } from 'react-sticky'
import Footer from './Footer'
import { blue } from '../config/colors'
import Head from 'next/head'

const HeaderContainer = styled.div`
  z-index: 10
`

const StyledLayout = styled(Box)`
  font-family: 'Palanquin', sans-serif;

  h3, h2 {
    margin-bottom: 0;
  }

  p {
    font-weight: 100;
    margin-top: 0;
  }

  ul, ol, blockquote, a {
    font-weight: 100;

  }

  p a {
    color: ${props => props.color || blue};
    &:hover {
      text-decoration: none;
    }
  }

  h1, h2, h3, h4 {
    color: ${props => props.color || blue};
    font-weight: 900;
  }
`

const MainLayout = (props) => (
  <StyledLayout color={props.config.main_color}>
    <Head>
      <title>{ `${props.page.slug === 'home' ? '' : `${props.page.name} | `}Eureka Mastering` }</title>
      <meta name="description" content={props.config.meta_description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <StickyContainer>
      <Sticky>
        {
          ({style, isSticky}) => (
            <HeaderContainer style={style}>
              <Header isSticky={isSticky} color={props.config.main_color} route={props.route} />
            </HeaderContainer>
          )
        }
      </Sticky>
      {props.children}
      <Footer color={props.config.footer_color} contact={props.contact} />
    </StickyContainer>
  </StyledLayout>
)

MainLayout.propTypes = {
  page: PropTypes.object,
  config: PropTypes.object,
  contact: PropTypes.object,
  route: PropTypes.object,
  children: PropTypes.array,
}

export default MainLayout
