import React from 'react'
import Table from './Table'

const Transactions = ({option}) => {
  return (
    <div className='p-5 w-full'>
      <div className='font-semibold text-xl'>Transactions | {option}</div>

      <div className='flex gap-4 my-5'>
        <div className='bg-gray-200 rounded-full text-xs font-semibold text-gray-500 p-1 px-4'>Payouts (22)</div>
        <div className='bg-sky-700 rounded-full text-xs font-semibold text-white p-1 px-4'>Refunds (6)</div>
      </div>

      <Table/>
    </div>
  )
}

export default Transactions