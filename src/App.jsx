import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import { Toaster } from 'react-hot-toast'

function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current

    const moveCursor = (e) => {
      if (!cursor) return
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return <div ref={cursorRef} className="simple-cursor" />
}


function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2800)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <>
  <Toaster
  position="top-right"
  toastOptions={{
    style: {
      zIndex: 99999,
    },
  }}
/>
      <CustomCursor />
      <div className="noise-overlay" />
      
      <div className="min-h-screen bg-background text-text overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
