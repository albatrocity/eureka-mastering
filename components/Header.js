import Link from 'next/link'
import Box from './Box'

const Header = () => (
  <div>

    <Box>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </Box>
  </div>
)

export default Header
