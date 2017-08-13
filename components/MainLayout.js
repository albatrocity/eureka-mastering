import Header from './Header'
import Box from 'react-boxen'
import styled from 'styled-components'
import { StickyContainer, Sticky } from 'react-sticky'
import Footer from './Footer'
import { blue } from '../config/colors'

const HeaderContainer = styled.div`
  z-index: 10
`

const StyledLayout = styled(Box)`
  font-family: 'Palanquin', sans-serif;

  h3, h2 {
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
  }

  h1, h2, h3, h4 {
    color: ${props => props.color || blue};
    font-weight: 100;
  }
`

const MainLayout = (props) => (
  <StyledLayout color={props.config.main_color}>
    <StickyContainer>
      <Sticky>
        {
          ({style, isSticky}) => (
            <HeaderContainer style={style}>
              <Header isSticky={isSticky} color={props.config.main_color} />
            </HeaderContainer>
          )
        }
      </Sticky>
      {props.children}
      <Footer color={props.config.footer_color} contact={props.contact} />
    </StickyContainer>
  </StyledLayout>
)

export default MainLayout
