import React, { useEffect, useState } from 'react';
import { FaBed, FaCar, FaTaxi } from 'react-icons/fa';
import { MdFlightTakeoff } from 'react-icons/md';
import NavItem from './NavItem';

const navItems = [
  {
    type: 'Stays',
    icon: <FaBed />,
    active: true,
  },
  {
    type: 'Flights',
    icon: <MdFlightTakeoff />,
    active: false,
  },
  {
    type: 'Car rentals',
    icon: <FaBed />,
    active: false,
  },
  {
    type: 'Attractions',
    icon: <FaCar />,
    active: false,
  },
  {
    type: 'Airport taxis',
    icon: <FaTaxi />,
    active: false,
  },
];

const NavItems = () => {
  const [items, setItems] = useState(navItems);

  const onActiveNav = (index) => {
    setItems((prev) => {
      return prev.map((item, i) => {
        if (i === index) {
          return { ...item, active: true };
        } else {
          return { ...item, active: false };
        }
      });
    });
  };

  return (
    <div className="flex justify-start items-center">
      {items.map((item, index) => (
        <NavItem
          item={item}
          key={index}
          onActiveNav={() => onActiveNav(index)}
        />
      ))}
    </div>
  );
};

export default NavItems;
