import Hero from './components/Hero'
import DestinationGallery from './components/DestinationGallery'
import ParallaxLayers from './components/ParallaxLayers'
import CallToAction from './components/CallToAction'

function App() {
  return (
    <div className="min-h-screen bg-[#2C2C2C] text-white antialiased">
      <Hero />
      <DestinationGallery />
      <ParallaxLayers />
      <CallToAction />
      <footer className="bg-[#1a1a1a] py-10 text-center text-white/60 text-sm">
        Old Japan heritage meets modern travel experience with immersive scroll animations
      </footer>
    </div>
  )
}

export default App
