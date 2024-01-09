import React from 'react'

const Filter = ({option, handleOptionChange}) => {
  return (
    <div className='border border-gray-300 w-fit text-sm'>
      <select className='rounded-sm px-2 ' id="dropdown" value={option} onChange={handleOptionChange}>
        <option value="This Month">This Month</option>
        <option value="Last Month">Last Month</option>
        <option value="All">All</option>
      </select>
{/* 
      {option && <p>You selected: {option}</p>} */}
    </div>
  )
}

export default Filter