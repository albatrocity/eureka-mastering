import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "./Header";
import Box from "react-boxen";
import styled from "styled-components";
import Footer from "./Footer";
import { blue } from "../config/colors";
import Head from "next/head";
import Menu from "./Menu";
import Nav from "./Nav";
import { action as toggleMenu } from "redux-burger-menu";

const HeaderContainer = styled.div`
  z-index: 10;
  position: fixed;
  width: 100%;
`;

const StyledLayout = styled(Box)`
  font-family: "Palanquin", sans-serif;

  h3,
  h2 {
    margin-bottom: 0;
  }

  p {
    font-weight: 100;
    margin-top: 0;
  }

  ul,
  ol,
  blockquote,
  a {
    font-weight: 100;
  }

  p a {
    color: ${props => props.color || blue};
    &:hover {
      text-decoration: none;
    }
  }

  h1,
  h2,
  h3 {
    color: ${props => props.color || blue};
    font-weight: 900;
  }
`;

const StyledWrapper = styled.div`
  padding-top: 3em;
`;

const MainLayout = props => (
  <StyledLayout color={props.config.main_color} id="outer-container">
    <Head>
      <title>{`${
        props.page.slug === "home" ? "" : `${props.page.name} | `
      }Eureka Mastering`}</title>
      <meta name="description" content={props.config.meta_description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <HeaderContainer>
      <Header
        mainColor={props.config.main_color}
        textColor={props.config.header_text_color}
        route={props.route}
        toggleMenu={props.toggleMenu}
        isMenuOpen={props.menu.isOpen}
      />
    </HeaderContainer>

    <StyledWrapper>
      <Menu
        config={props.config}
        right
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        <Nav
          onNavigate={() => props.toggleMenu(false)}
          layout="vertical"
          inPage={props.route.pathname === "/"}
          route={props.route}
        />
      </Menu>
      <div id="page-wrap">{props.children}</div>
    </StyledWrapper>

    <Footer color={props.config.footer_color} contact={props.contact} />
  </StyledLayout>
);

MainLayout.propTypes = {
  page: PropTypes.object,
  config: PropTypes.object,
  contact: PropTypes.object,
  route: PropTypes.object,
  children: PropTypes.array,
  toggleMenu: PropTypes.func,
  menu: PropTypes.object
};

const mapStateToProps = state => ({
  menu: state.burgerMenu
});

export default connect(mapStateToProps, { toggleMenu })(MainLayout);
