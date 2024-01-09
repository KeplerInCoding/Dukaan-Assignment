import React from 'react'
import Header from '../components/Header'
import Overview from '../components/Overview'
import Transactions from '../components/Transactions'

const Payouts = () => {
  return (
    <div>
      <Header/>
      <div>filter</div>
      <Overview/>
      <Transactions/>
    </div>
  )
}

export default Payouts