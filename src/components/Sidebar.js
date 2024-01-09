import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo';

const Sidebar = () => {
    const buttonNames = ['Home','Orders','Products','Delivery','Marketing','Analytics','Payments','Tools','Discounts','Audience',
        'Appearance','Plugins','Available credits',];
      
      return (
    <div className=" bg-blue text-white">
        <Logo/>
        <nav>
            <ul>
                
                {buttonNames.map((name, index) => (
                    <li key={index}>
                    <NavLink to={name === 'Discounts' ? '/' : `/progress`}>{name}</NavLink>
                    </li>
                ))}


            </ul>
        </nav>
    </div>
  )
}

export default Sidebar