import React from 'react';
import NavItems from './NavItems';
import Button from '@/components/button/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-dark-blue w-full text-white pb-10">
      <div className="container mx-auto px-10 pt-5">
        {/* Navbar above */}
        <div className="flex justify-between items-center pb-5">
          <Link to='/'>
            <h1 className="text-2xl">Booking Website</h1>
          </Link>
          <div>
            <Button
              textContent="Register"
              className="mr-5"
            />
            <Button textContent="Login" />
          </div>
        </div>
        {/* Navbar below */}
        <NavItems />
      </div>
    </div>
  );
};

export default Navbar;
