import Button from '@/components/button/Button';
import Search from '@/components/Search/SearchBar';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-dark-blue w-full text-white">
      <div className="container mx-auto p-10">
        <div>
          <h1 className="font-bold pb-4">
            A lifetime of discounts? It's Genius.
          </h1>
          <p className="pb-3">
            Get rewarded for your travels - unlock instant savings of or more
            with a free account
          </p>
          <Link to='/sign-in'>
            <Button
              type="secondary"
              textContent="Sign in / Register"
            />
          </Link>
        </div>
        {/* Search bar */}
        <Search />
      </div>
    </div>
  );
};

export default Header;
