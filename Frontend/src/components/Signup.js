import React from 'react'
import {Link} from 'react-router-dom'
function Signup() {
  return (

    <>
        <div className="container bg-[#D2D2D2] flex items-center flex-col justify-center min-h-[100vh] min-w-[100vw]">
            <form action="" className='form'>
                <h3 className="text-center text-[27px] mt-3 mb-5">Sign Up</h3>
                <div className="inputBox">
                    <input type="text" placeholder='Username' name="username" id="username" />
                </div>
                <div className="inputBox">
                    <input type="text" placeholder='Name' name="name" id="name" />
                </div>
                <div className="inputBox">
                    <input type="email" placeholder='Email' name="email" id="email" />
                </div>
                <div className="inputBox">
                    <input type="password" placeholder='Password' name="password" id="password" />
                </div>
                <button className="btnBig mt-3 mb-3">Sign Up</button>
                <p className="mb-3 mt-2">Already Have An Account <Link to="/login" className='text-[#f57e57]'>Login</Link></p>
            </form>
        </div>
    </>
  )
}

export default Signup