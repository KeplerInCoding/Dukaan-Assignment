import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo';

const Sidebar = () => {
    const buttonNames = ['Home','Orders','Products','Delivery','Marketing','Analytics','Payouts','Tools','Discounts','Audience',
        'Appearance','Plugins'];
      
      return (
    <div className="h-screen w-52 bg-blue text-white text-sm">
        <Logo/>
        <nav className="m-2">
            <ul>
                
                {buttonNames.map((name, index) => (
                    <li className="m-1 p-[7px] px-4 flex items-center gap-x-2 rounded-md hover:bg-gray-600/50" key={index}>
                        <i class="fa-solid fa-house"></i>
                        <NavLink to={name === 'Payouts' ? '/' : `/progress`}>{name}</NavLink>
                    </li>
                ))}


            </ul>
        </nav>
    </div>
  )
}

export default Sidebar