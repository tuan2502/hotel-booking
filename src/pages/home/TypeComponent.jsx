import React from 'react'

const TypeComponent = ({type}) => {
  const image = require('../../assets/images/' + type.image);
  // Hiển thị Type
  return (
    <div className='flex-1 rounded-xl overflow-hidden'>
      <img src={image} alt="type images" className='h-[190px] w-full'/>
      <div className='py-3'>
        <p className='font-bold'>{type.name}</p>
        <p className='text-[14px] text-gray'>{type.count} hotels</p>
      </div>
    </div>
  )
}

export default TypeComponent