import Headline from './headline'
import About from './about'
import Works from './works'
import Contact from './contact'
import Media from './media'
import Navbar from './nav'

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Headline></Headline>
      <About></About>
      <Works></Works>
      <Contact></Contact>
      <Media></Media>
    </>
  )
}

export default Home
