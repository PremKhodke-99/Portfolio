import Navbar from './Components/Navbar'
import { About, ContactMe, Footer, Hero, Projects } from './Sections'

function App() {

  return (
    <main className='relative'>
      <Navbar />
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <ContactMe />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  )
}

export default App
