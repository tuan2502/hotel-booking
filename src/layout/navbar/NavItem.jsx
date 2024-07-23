import React, { useState } from 'react';

const NavItem = ({ item, onActiveNav }) => {


  return (
    <div
      className={`${
        item.active ? 'active' : ''
      } flex justify-start items-center gap-x-2 p-2 me-3 cursor-pointer`}
      onClick={onActiveNav}
    >
      <span>{item.icon}</span>
      <span>{item.type}</span>
    </div>
  );
};
export default NavItem;
