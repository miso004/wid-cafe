import { useEffect } from 'react'
import { StagewiseToolbar } from '@stagewise/toolbar-react'
import ReactPlugin from '@stagewise-plugins/react'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Menu from './components/Menu'
import Contact from './components/Contact'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(e.target.getAttribute('href'))
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    // Add fade-in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in')
        }
      })
    }, observerOptions)

    // Observe all cards and sections
    document.querySelectorAll('.card, section').forEach(el => {
      observer.observe(el)
    })

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return (
    <div className="min-h-screen">

      
      <Hero />
      <About />
      <Features />
      <Menu />
      <Contact />
      <CallToAction />
      <Footer />
      
      <StagewiseToolbar 
        config={{
          plugins: [ReactPlugin]
        }}
      />
    </div>
  )
}

export default App
