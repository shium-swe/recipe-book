import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-dark bd-navbar sticky-top shadow-lg' >
      <div className="container-fluid">
        <span href="/" className="navbar-brand mb-0 h1 text-light">Recipe Book 📖</span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-light" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar