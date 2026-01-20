import './App.css'
import { useEffect , useState } from 'react'
import Navbar from './components/Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Education from './components/Education'
import Projects from './components/Projects'

function App() {
  const [darkMode , setDarkMode] = useState(true)
   const [activeSection, setActiveSection] = useState('home')

  useEffect(()=>{
    AOS.init({
      duration: 1000,
      once : false,
      offset :100
    });
    document.documentElement.classList.add('dark');

    // ✅ NEW: Clear URL hash on refresh
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.6,
      }
    )
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])



  useEffect(()=>{
    AOS.refresh()
  },[darkMode])

  const toggleDarkMode = ()=>{
    const newMode  = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark')
  };

  return (
    <div className={
      darkMode
      ? 'bg-liner-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen'
      : ' bg-liner-to-br from-gray-50 to-blue-50 min-h-screen'
    }> 
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero darkMode={darkMode}/>
      <About darkMode={darkMode}/>
      <Skills darkMode={darkMode}/>
      <Education darkMode={darkMode} />
      <Projects darkMode={darkMode}/>
      <Contact darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  )
}

export default App
