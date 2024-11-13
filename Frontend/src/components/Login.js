import React from 'react'
import {Link} from 'react-router-dom'
function Login() {
  return (

    <>
        <div className="container bg-[#D2D2D2] flex items-center flex-col justify-center min-h-[100vh] min-w-[100vw]">
            <form action="" className='form login-form'>
                <h3 className="text-center text-[27px] mt-3 mb-5">Login</h3>
                
                <div className="inputBox">
                    <input type="email" placeholder='Email' name="email" id="email" />
                </div>
                <div className="inputBox">
                    <input type="password" placeholder='Password' name="password" id="password" />
                </div>
                <button className="btnBig mt-3 mb-3">Login</button>
                <p className="mb-3 mt-2">Create a new account <Link to="/signup" className='text-[#f57e57]'>SignUp</Link></p>
            </form>
        </div>
    </>
  )
}

export default Login