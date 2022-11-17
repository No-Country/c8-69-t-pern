import React from 'react'
import Card from './Card'
import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 

const Home = () => {
  return (
    <div className='container-fluid'>

      <Router>
          <NavBar />
          <Header />
      </Router>
      
      <main >
        <Card />
      </main>
      <Footer />
    </div>
  )
}

export default Home