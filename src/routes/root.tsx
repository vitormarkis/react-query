import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Root: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center">
      <nav className="">
        <ul className='flex gap-4'>
          <NavLink className="text-sm block px-3 py-1 shadow-sm sh" to={'/'}>Items</NavLink>
          <NavLink className="text-sm block px-3 py-1 shadow-sm sh font-semibold text-blue-600" to={'/edit'}>New Item</NavLink>
        </ul>
      </nav>
      <div className='w-[520px] h-full bg-zinc-200 mt-12 p-4'>
      <Outlet />
      </div>
    </div>
  );
};

export default Root;
