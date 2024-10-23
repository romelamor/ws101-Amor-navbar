import Navbar  from './navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact.js'



function App() {
  let component

  switch (window.location.pathname) {
    case "/home":
      component = <Home />
      break
    case "/about" :
      component = <About />
      break
    case "/contact" :
      component = <Contact />
      break


  }
  return (
    <>
      <Navbar />
      <div className='container'>{component}</div>

      
    </>
  )
  }

export default App;