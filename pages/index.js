import Link from 'next/link'
import MainLayout from '../components/MainLayout'

const Index = () => (
  <MainLayout>
    <p>Hello Next.js</p>
    <Link href="/about"><button>About</button></Link>
  </MainLayout>
)

export default Index
