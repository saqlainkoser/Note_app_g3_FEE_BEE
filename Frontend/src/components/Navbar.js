import React from 'react'

function Navbar() {
  return (
    <>
        <div className="navbar w-screen h-[90px] px-[50px] bg-[#f4f4f4] flex items-center justify-between">
            <div className="logo text-2xl">Keep Notes</div>
            <div className="right flex items-center gap-[10px]">
                <button className='btnNormal'>Add Note</button>
                <div className="profileCircle w-[50px] h-[50px] rounded-[50%] bg-[#D9D9D9]"></div>
            </div>
        </div>
    </>
  )
}

export default Navbar