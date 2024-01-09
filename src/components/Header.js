import React from 'react'

const Header = () => {
  return (
    <div>
        <div>
            <div className=" font-semibold">Payouts</div>
            <div>How it works ?</div>
        </div>
        <div>
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search for products or categories" />
            <button>Go</button>
        </div>
    </div>
  )
}

export default Header