import React from 'react'
import Header from '../components/Header'
import Overview from '../components/Overview'
import Transactions from '../components/Transactions'
import Filter from '../components/Filter'

const Payouts = () => {
  return (
    <div className='w-full bg-gray-50'>
      <Header/>
      <Filter/>
      <Overview/>
      <Transactions/>
    </div>
  )
}

export default Payouts