import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Areas from './components/Areas'
import Contact from './components/Contact'
import Location from './components/Location'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Areas />
        <Contact />
        <Location />
      </main>
      <Footer />
    </>
  )
}