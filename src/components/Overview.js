import React from 'react'

const Overview = () => {
  return (
    <div className='flex place-content-evenly gap-2  flex-wrap'>
      {/* card 1 */}
      <div className='flex flex-col bg-sky-600 text-white rounded-lg w-80'>
        <div className='flex items-center gap-1 px-4 pt-4'>
          <div>Next Payout</div>
          <i class="fas fa-circle-question"></i>
        </div>
        <div className='flex place-content-between px-4 gap-5 py-3'>
          <div className='text-2xl font-semibold'>2,312.23</div>
          <div className=' underline font-semibold'>23 orders</div>
        </div>
        <div className='flex place-content-between gap-5 text-xs bg-sky-800 p-2 px-4 rounded-lg'>
          <div>Next payout date:</div>
          <div className='font-semibold'>Today, 04;00PM</div>
        </div>

      </div>

      {/* card 2 */}
      <div className='flex flex-col bg-white shadow shadow-xs rounded-lg w-80'>
        <div className='flex items-center gap-1 px-4 pt-4 text-gray-600'>
          <div>Amount Pending</div>
          <i class="fas fa-circle-question"></i>
        </div>
        <div className='flex place-content-between px-4 gap-5 py-3'>
          <div className='text-2xl font-semibold'>2,312.23</div>
          <div className=' underline font-semibold text-sky-600'>23 orders</div>
        </div>
      </div>
      
      {/* card 3 */}
      <div className='flex flex-col bg-white shadow shadow-xs rounded-lg w-80'>
        <div className='flex items-center gap-1 px-4 pt-4 text-gray-600'>
          <div className=''>Amount Processed</div>
          <i class="fas fa-circle-question"></i>
        </div>
        <div className='flex place-content-between px-4 gap-5 py-3'>
          <div className='text-2xl font-semibold'>2,312.23</div>
          <div className=' underline font-semibold text-sky-600'>23 orders</div>
        </div>
      </div>
    </div>
  )
}

export default Overview