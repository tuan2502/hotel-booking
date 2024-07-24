import React from 'react';

const CityComponent = ({city}) => {
  const image = require('../../assets/images/' + city.image);
  return (
    <div
      className="relative flex-1 h-[320px] rounded-xl"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <div className="text-white absolute bottom-5 left-5 font-bold">
        <h1>{city.name}</h1>
        <p>{city.subText}</p>
      </div>
    </div>
  );
};

export default CityComponent;
