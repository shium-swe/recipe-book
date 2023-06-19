import React from 'react'

const Auth = () => {
  return (
    <div className="container-fluid d-flex mt-4 justify-content-center">
      <div className='w-50 mt-4 mb-3 p-4 border shadow rounded'>
        <h1 className='fw-bold mb-3'>Login</h1>
        <form action="post">
          <label for="emailFormControl" class="form-label">Email</label>
          <input
            className='form-control mb-3'
            type="text"
            name="login"
            placeholder="Email"
            aria-label="Email"
            autocomplete="email"
            required
          />
          <label for="passwordFormControl" class="form-label">Password</label>
          <input
            className='form-control mb-3'
            type="password"
            name="password"
            placeholder="Password"
            aria-label="Password"
            autocomplete="current-password"
            required
          />
          <div class="form-check mb-4">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button type="submit" class=" w-100 p-2 btn btn-outline-dark mb-3">Submit</button>
          <a href="/create" className='mb-4 h6'>Create account?</a>
        </form>
      </div>
    </div>
  )
}

export default Auth