import React from 'react'
import Card from './Card'
import Footer from './Footer'
import NavBar from './NavBar'

const Home = () => {
  return (
    <div className='container'>
      <NavBar />
      <main>
        <Card />
      </main>
      <Footer />
    </div>
  )
}

export default Home