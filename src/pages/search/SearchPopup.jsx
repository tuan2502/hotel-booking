import Button from '@/components/button/Button';
import FormatDate from '@/components/formatDate/FormatDate';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';


const SearchPopup = ({ onSearch }) => {
  let { state } = useLocation();
  const [form, setForm] = useState({
    ...state.form,
    description: '',
    minPrice: 0,
    maxPrice: 0,
  });

  const [activeDate, setActiveDate] = useState(false);

  //Xử lý mở hiển thị popup chọn ngày
  const handleDatePicker = () => {
    setActiveDate(!activeDate);
  };

  const [date, setDate] = useState([
    {
      startDate: form.startDate,
      endDate: form.endDate,
      key: 'selection',
    },
  ]);

  //Xử lý input description
  const handleDescription = (e) => {
    const { value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      description: value,
    }));
  };

  //Xử lý input minPrice
  const handleMinPrice = (e) => {
    const { value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      minPrice: value,
    }));
  };

  //Xử lý input maxPrice
  const handleMaxPrice = (e) => {
    const { value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      maxPrice: value,
    }));
  };


  //Xử lý chọn ngày
  const handleDate = (item) => {
    setDate([item.selection]);
    setForm((prevForm) => ({
      ...prevForm,
      startDate: item.selection.startDate,
      endDate: item.selection.endDate,
    }));
  };

  //Xử lý input người lớn
  const handleAdult = (e) => {
    const { value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      adult: value,
    }));
  };
  

  //Xử lý input trẻ con
  const handleChildren = (e) => {
    const { value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      children: value,
    }));
  };

  //Xử lý input room
  const handleRoom = (e) => {
    const { value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      room: value,
    }));
  };
  

  return (
    <nav className="col-span-1 rounded-xl overflow-hidden">
      <form
        onSubmit={(e) => onSearch(form, e)}
        className="bg-yellow p-3"
      >
        <h3 className="mb-4 font-bold">Search</h3>
        <div className="mb-2">
          <label>Destination</label>
          <input
            className="block w-full h-[45px] outline-none rounded px-2"
            type="text"
            value={form.description}
            onChange={handleDescription}
            aria-label="Destination"
          />
        </div>
        <div className="mb-2 relative">
          <label>Check-in Date</label>
          <p
            className="block w-full h-[45px] outline-none rounded px-2 bg-white leading-[45px] cursor-pointer"
            onClick={handleDatePicker}
          >
            {FormatDate(form.startDate)} to {FormatDate(form.endDate)}
          </p>
          <div
            className={`absolute bottom z-10 ${
              activeDate ? 'block' : 'hidden'
            }`}
          >
            <DateRange
              editableDateInputs={true}
              onChange={handleDate}
              moveRangeOnFirstSelection={false}
              minDate={new Date()}
              ranges={date}
              dateDisplayFormat="dd/MM/yyyy"
            />
          </div>
        </div>
        <div className="mb-10">
          <p>Options</p>
          <div>
            <div className="flex justify-between items-center m-3">
              <label className="text-primary">Min price per night</label>
              <input
                className="max-w-[70px] h-[30px] outline-none rounded px-2"
                type="number"
                min={0}
                value={form.minPrice}
                onChange={handleMinPrice}
                aria-label="Min price per night"
              />
            </div>
            <div className="flex justify-between items-center m-3">
              <label className="text-primary">Max price per night</label>
              <input
                className="max-w-[70px] h-[30px] outline-none rounded px-2"
                type="number"
                min={0}
                value={form.maxPrice}
                onChange={handleMaxPrice}
                aria-label="Max price per night"
              />
            </div>
            <div className="flex justify-between items-center m-3">
              <label className="text-primary">Adults</label>
              <input
                className="max-w-[70px] h-[30px] outline-none rounded px-2"
                type="number"
                min={1}
                value={form.adult}
                onChange={handleAdult}
                aria-label="Adults"
              />
            </div>
            <div className="flex justify-between items-center m-3">
              <label className="text-primary">Children</label>
              <input
                className="max-w-[70px] h-[30px] outline-none rounded px-2"
                type="number"
                min={0}
                value={form.children}
                onChange={handleChildren}
                aria-label="Children"
              />
            </div>
            <div className="flex justify-between items-center m-3">
              <label className="text-primary">Room</label>
              <input
                className="max-w-[70px] h-[30px] outline-none rounded px-2"
                type="number"
                min={1}
                value={form.room}
                onChange={handleRoom}
                aria-label="Room"
              />
            </div>
          </div>
        </div>
        <div>
          <Button
            className="w-full rounded-xl"
            typeButton="secondary"
            textContent={'Search'}
          />
        </div>
      </form>
    </nav>
  );
};

export default SearchPopup;
