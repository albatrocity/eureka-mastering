import Header from './Header'
import Box from 'react-boxen'
import styled from 'styled-components'
import { StickyContainer, Sticky } from 'react-sticky'

const HeaderContainer = styled.div`
  z-index: 100
`

const StyledLayout = styled(Box)`
  font-family: 'Hind Siliguri', sans-serif;

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
    </StickyContainer>
  </StyledLayout>
)

export default MainLayout
