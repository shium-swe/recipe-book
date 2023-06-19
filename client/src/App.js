import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from "./components/Auth"
import Navbar from './components/Navbar'
import CreateUser from './components/CreateUser'
import Profile from './components/Profile'

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route exact path="/create" element={<CreateUser />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App