import React from 'react'

const Header = () => {
  return (
    <div className='flex place-content-between gap-1 p-2 items-center bg-white shadow-sm shadow-gray-300'>
        <div className='flex'>
            <div className=" font-semibold mx-3">Payouts</div>
            <div className='flex items-center gap-1 text-[10px] text-gray-600'>
              <i class="fas fa-circle-question"></i>
              <div>How it works</div>
            </div>
        </div>
        <div className=' text-gray-500 rounded-md text-xs bg-gray-100 p-2 w-2/5 flex items-center gap-x-2'>
            <i class="fas fa-search"></i>
            <input className='bg-gray-100 overflow-hidden' type="text" placeholder="Search features, tutorials." />
        </div>
        <div className='flex gap-1'>
          <div className='bg-gray-200 rounded-full h-7 w-7 flex items-center justify-center'><i class="fa-regular fa-comment-dots"></i></div>
          <div className='bg-gray-200 rounded-full h-7 w-7 flex items-center justify-center'><i class="fa-solid fa-caret-down"></i></div>        
        </div>
    </div>
  )
}

export default Header