import Button from '@/components/button/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const SearchListItem = ({ item }) => {
  const image = require('../../assets/images/' + item.image_url);
  return (
    <div className="grid grid-cols-4 min-h-[300px] border rounded border-gray mb-5 p-3">
      {/* image */}
      <div className="col-span-1">
        <img
          src={image}
          alt="hotel_image"
          className="w-[240px] h-full"
        />
      </div>
      {/* description */}
      <div className="col-span-2">
        <h3 className="text-blue font-bold cursor-pointer">{item.name}</h3>

        <p className="mb-3">{item.distance} from center</p>
        <p className="mb-3 bg-green text-white p-2 w-[150px] rounded-xl text-center">
          {item.tag}
        </p>
        <p className="font-bold mb-3">{item.description}</p>
        <p className="mb-3">{item.type}</p>
        {item.free_cancel ? (
          <div className="text-green-600">
            <p className="font-bold mb-3">Free cancellation</p>
            <p className="mb-3">
              You can cancel later. so lock in this great price today!
            </p>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="col-span-1">
        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-between items-center gap-5">
            <span className="font-bold text-primary">{item.rate_text}</span>
            <span className="font-bold bg-primary text-white rounded-xl p-2">
              {item.rate}
            </span>
          </div>
          <div className="text-end flex flex-col gap-3">
            <h3>${item.price}</h3>
            <p className="text-gray">Includes taxes and fees</p>
            <Link to={'/detail'} state={{itemDetail: item}}>
              <Button
                typeButton="secondary"
                className="rounded border hover:border"
                textContent="See availability"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchListItem;
