import React from 'react'
import Nav from './component/Navbar/Nav'
import Hero from './component/Hero/Hero'
import Blog from "./component/Blogs/Blog"
import Footer from "./component/footer/Footer"
const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
