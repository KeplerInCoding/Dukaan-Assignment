import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Sidebar = () => {
  const buttonNames = [
    'Home', 'Orders', 'Products', 'Delivery', 'Marketing', 'Analytics', 'Payouts', 'Tools', 'Discounts', 'Audience',
    'Appearance', 'Plugins'
  ];

  return (
    <div className="min-h-screen h-auto w-60 bg-blue text-white text-sm flex flex-col place-content-between">
      <div>
        <Logo />
        <nav className="m-2">
          <ul>
            {buttonNames.map((name, index) => (
              <li key={index}>
                <NavLink className="m-1 p-[7px] px-4 flex items-center gap-x-2 rounded-md hover:bg-gray-600/50" to={name === 'Payouts' ? '/' : `/progress`}>
                         
                  <i className="fa-solid fa-house"></i>
                  <div>{name}</div>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <div className="m-4 p-[7px] px-4 flex items-center gap-x-4 rounded-md bg-gray-600/50 self-end">
          <i className="fa-solid fa-credit-card fa-lg"></i>
          <div>
            <div className="text-xs">Available credits</div>
            <div>222.10</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
