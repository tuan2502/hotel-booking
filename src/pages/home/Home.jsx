import React, { useState } from 'react';
import CityComponent from './CityComponent';
import TypeComponent from './TypeComponent';
import HotelComponent from './HotelComponent';
import Header from '@/layout/Header';

import city from '@/data/city';
import types from '@/data/type';
import hotelList from '@/data/hotel_list';
const Home = () => {
  const [cityData, setCityData] = useState(city);
  const [typeData, setTypeData] = useState(types);

  return (
    <>
      <Header />
      <div className="container mx-auto p-10">
        {/* city component */}
        <section className="flex justify-between items-center mt-3 gap-5">
          {cityData.map((city, index) => (
            <CityComponent
              key={index}
              city={city}
            />
          ))}
        </section>
        {/* type component */}
        <section>
          <h3 className="font-bold block my-6">Browse by property type</h3>
          <div className="flex justify-between items-center mt-3 gap-5">
            {typeData.map((type, index) => (
              <TypeComponent
                key={index}
                type={type}
              />
            ))}
          </div>
        </section>
        {/* hotel list */}
        <section>
          <h3 className="font-bold block my-6">Homes guest love</h3>
          <div className="flex justify-between items-center mt-3 gap-5">
            {hotelList.map((hotel, index) => (
              <HotelComponent
                key={index}
                hotel={hotel}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
