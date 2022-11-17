import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const NavBar = () => {
  return (
<div className='container'>
    
<nav className="navbar navbar-expand-lg navbar-light bg-light navbarprinc">
  <div className="container-fluid">

<div className='container_logo'>
    <Link to= '/'> 
      <img className="logo" src={logo} alt="imagen"/>
    </Link>

</div>


    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link className="nav-link" to='/'>Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to='/courses'>Courses</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to='/categories'>Categories</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to='/sign'>Sign</Link>
        </li>
      </ul>
      <div className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar