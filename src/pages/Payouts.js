import React, { useState } from 'react'
import Header from '../components/Header'
import Overview from '../components/Overview'
import Transactions from '../components/Transactions'
import Filter from '../components/Filter'

const Payouts = () => {
    const [option, setOption] = useState('This Month');

    const handleOptionChange = (event) => {
      setOption(event.target.value);
    };
  return (
    <div className='w-full bg-gray-50'>
      <Header/>
      <div className='flex place-content-between p-5 py-8'>
        <div className='font-semibold'>Overview</div>
        <Filter option={option} handleOptionChange={handleOptionChange}/>
      </div>
      
      <Overview/>
      <Transactions option={option}/>
    </div>
  )
}

export default Payouts