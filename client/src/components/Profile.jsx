import React from 'react'

const Profile = () => {
  return (
    <div className='container-fluid p-4 m-4 d-flex justify-content-center flex-column'>
      <h1>Hello User!</h1>
      <div className="container-fluid w-50 shadow border rounded p-3 px-5">
      <div className="card">
        <img src="..." class="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Profile