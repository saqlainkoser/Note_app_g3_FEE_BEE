import React from 'react'

function Note({title,description,isImportatnt,date,height}) {
  return (
    <>
        <div className="note relative">
            <p className='text-[grey]'>Note 1</p>
            <h1 className="text-[#000] text-[20px] w-[80%]">Website Design</h1>
            <p className='text-[grey] w-[80%] line-clamp-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis laudantium itaque nobis molestias rem animi, impedit accusamus non deleniti ipsam, necessitatibus, earum iusto? Molestiae molestias perspiciatis quo! Repellat, fugiat dolorum.</p>
            <div className="noteBottom absolute bottom-5 w-[90%] flex justify-between items-center">
                <p className='text-[grey]'>2/3/2024</p>
                <div className="flex items-center gap-1">
                    <img className="w-[30px] h-[30px]" src={require("../images/delete.png")} alt='Delete'/>
                    <img className="w-[30px] h-[30px]" src={require("../images/edit.png")} alt='Edit'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Note