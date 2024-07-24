import Button from '@/components/button/Button';
import detail from '@data/detail';
import { IoLocationSharp } from 'react-icons/io5';

const Detail = () => {
  const RenderImages = () => {
    return detail.photos.map((photo, index) => {
      const image = require('../../assets/images/' + photo);
      return (
        <img
          key={index}
          className="col-span-1"
          src={image}
          alt="photos detail"
        />
      );
    });
  };

  return (
    <section className="container mx-auto p-10">
      <div className="flex justify-between mb-2">
        <div className="flex flex-col gap-y-2">
          <h3 className="font-bold">{detail.name}</h3>
          <p className="text-[14px]">
            <IoLocationSharp
              size={20}
              className="inline-block pb-1"
            />{' '}
            {detail.address}
          </p>
          <p className="text-blue">{detail.distance}</p>
          <p className="text-green-700">{detail.price}</p>
        </div>
        <div>
          <Button
            typeButton="secondary"
            className="rounded border hover:border"
            textContent={'Reverse or Book NoW!'}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-10">
        <RenderImages />
      </div>
      <div className="flex justify-between gap-5">
        <div className="grow w-[70%]">
          <h3 className="font-bold mb-5">{detail.title}</h3>
          <p>{detail.description}</p>
        </div>
        <div className="shirk w-[30%] bg-[#ebf3ff] p-4 flex flex-col gap-5">
          <h4 className="font-bold">Perfect for a 9-night stay!</h4>
          <p>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</p>
          <h3 className="font-bold">${detail.nine_night_price} <span className='font-light'>(9 nights)</span></h3>
          <Button
            typeButton="secondary"
            className="rounded border hover:border"
            textContent={'Reverse or Book NoW!'}
          />
        </div>
      </div>
    </section>
  );
};

export default Detail;
