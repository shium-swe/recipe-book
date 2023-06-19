import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const CreateUser = () => {
  
  let navigate = useNavigate()

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const {firstName, lastName, email, password} = userData

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:8080/api/v1/user/create", userData)
    navigate("/")
  }

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }
    
  return (
    <div className="container-fluid d-flex mt-4 justify-content-center">
      <div className='w-50 mt-4 mb-3 p-4 border shadow rounded'>
        <h1 className='fw-bold mb-3'>Sign Up</h1>
        <form method='post' onSubmit={(e) => handleSubmit(e)}>
          <label for="firstNameFormControl" class="form-label">First Name</label>
          <input
            className='form-control mb-3'
            type="firstName"
            name="firstName"
            placeholder="First Name"
            aria-label="First Name"
            autocomplete="First Name"
            value={firstName}
            onChange={(e) => handleChange(e)}
            required
          />
          <label for="lastNameFormControl" class="form-label">Last Name</label>
          <input
            className='form-control mb-3'
            type="lastName"
            name="lastName"
            placeholder="Last Name"
            aria-label="Last Name"
            autocomplete="Last Name"
            value={lastName}
            onChange={(e) => handleChange(e)}
            required
          />
          <label for="emailFormControl" class="form-label">Email</label>
          <input
            className='form-control mb-3'
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
            autocomplete="email"
            value={email}
            onChange={(e) => handleChange(e)}
            required
          />
          <label for="passwordFormControl" class="form-label">Password</label>
          <input
            className='form-control mb-4'
            type="password"
            name="password"
            placeholder="Password"
            aria-label="Password"
            autocomplete="current-password"
            value={password}
            onChange={(e) => handleChange(e)}
            required
          />
          <button type="submit" class="w-100 p-2 btn btn-outline-dark mb-3">Submit</button>
        </form>
      </div>
    </div>
  )
}


export default CreateUser