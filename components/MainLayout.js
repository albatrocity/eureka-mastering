import Header from './Header'
import Box from './Box'

const MainLayout = (props) => (
  <Box>
    <Header />
    {props.children}
  </Box>
)

export default MainLayout
