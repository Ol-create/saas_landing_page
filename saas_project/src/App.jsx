import reactLogo from './assets/react.svg'
import './App.css'


import Features from './sections/Features'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Pricing from './sections/Pricing'

function App() {

  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
    </main>
  )
}

export default App
