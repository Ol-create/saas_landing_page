import reactLogo from './assets/react.svg'
import './App.css'


import Header from './sections/Header'
import Hero from './sections/Hero'
import Features from './sections/Features'

function App() {

  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
    </main>
  )
}

export default App
