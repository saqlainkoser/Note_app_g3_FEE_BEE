import React from 'react'
import Navbar from '../components/Navbar'
import Note from '../components/Note'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <div className="mt-[20px] px-[50px] flex items-center justify-between w-screen">
        <h1 className="text-2xl">Hi, Shaan</h1>
        <div className="inputBox !w-[350px]">
          <input type="text" placeholder='Search Notes' className='!p-[11px]'/>
        </div>
      </div>
      <div className="gridItems">
        <Note/>
        <Note/>
        <Note/>
        <Note/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home