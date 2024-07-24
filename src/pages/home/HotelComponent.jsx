import React from 'react'
import { Link } from 'react-router-dom';

const HotelComponent = ({hotel}) => {
    const image = require('../../assets/images/' + hotel.image_url);
    return (
      <div className='flex-1 rounded-xl overflow-hidden'>
        <img src={image} alt="type images" className='h-[250px] w-full'/>
        <div className='py-3'>
          <Link to='/'><p className='font-bold underline text-primary mb-3'>{hotel.name}</p></Link>
          <p className='text-[14px] text-gray mb-3'>{hotel.city}</p>
          <p to='/' className='font-bold mb-3'>Starting from ${hotel.price}</p>
          <p className='text-[14px]'><span className='font-bold bg-primary mb-3 text-white rounded-xl p-2 me-2'>{hotel.rate}</span> {hotel.type}</p>
        </div>
      </div>
    )
}

export default HotelComponent