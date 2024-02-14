import React from 'react';
import { Link } from 'react-router-dom';
import colle from './GHRCE-logo.svg';
function NavBar() {
  return (
    <div className='fixed w-full top-0 left-0 border-b'>
      <div className='flex items-center justify-between px-16 py-2 max-w-screen-xl mx-auto gap-4'>
        <div className='flex'>
          <img src='https://upload.wikimedia.org/wikipedia/en/7/70/Logo_of_G.H._Raisoni_College_of_Engineering_Nagpur.png' className='h-16 w-16' alt='Logo' />
          <div className='flex flex-col ml-6'>
            <span className='text-gray-800 dark:text-white font-semibold text-lg'>G H Raisoni College of Engineering</span>
            <span className='text-gray-600 dark:text-gray-200'>HIngna, Nagpur</span>
          </div>
        </div>
        <Link to="/" className="hover:text-indigo-600">Home</Link>
      </div>
    </div>
  );
}

export default NavBar;