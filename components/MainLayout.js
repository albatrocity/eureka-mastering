import Header from './Header'
import Box from 'react-boxen'
import styled from 'styled-components'
import { StickyContainer, Sticky } from 'react-sticky'
import Footer from './Footer'

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
`

const MainLayout = (props) => (
  <StyledLayout>
    <StickyContainer>
      <Sticky>
        {
          ({style, isSticky}) => (
            <HeaderContainer style={style}>
              <Header isSticky={isSticky}/>
            </HeaderContainer>
          )
        }
      </Sticky>
      {props.children}
      <Footer contact={props.contact} />
    </StickyContainer>
  </StyledLayout>
)

export default MainLayout
