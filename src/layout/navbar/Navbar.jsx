import React from 'react';
import NavItems from './NavItems';
import Button from '@/components/button/Button';

const Navbar = () => {
  return (
    <div className="bg-dark-blue w-full text-white">
      <div className="container mx-auto px-10 pt-5">
        {/* Navbar above */}
        <div className="flex justify-between items-center pb-5">
          <div>
            <h1 className="text-2xl">Booking Website</h1>
          </div>
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
