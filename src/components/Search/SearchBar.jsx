import React, { useState } from 'react';
import { FaBed } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import { FaPerson } from 'react-icons/fa6';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import FormatDate from '../formatDate/FormatDate';


const Search = () => {
  const [form, setForm] = useState({
    location: '',
    startDate: new Date(),
    endDate: new Date(),
    adult: 1,
    children: 0,
    room: 1,
  });

  const [date, setDate] = useState([
    {
      startDate: form.startDate,
      endDate: form.endDate,
      key: 'selection',
    },
  ]);

  const [activeToggle, setActiveToggle] = useState(false);
  const [activeDate, setActiveDate] = useState(false);

  // Xử lý active input form (Chưa hoạt động tốt)
  const handleToggle = () => {
    setActiveToggle(!activeToggle);
  };

  const handleDatePicker = () => {
    setActiveDate(!activeDate);
  };

  const handleAdult = (e) => {
    const { value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      adult: value,
    }));
  };

  // Handle form input
  const handleLocation = (e) => {
    const { value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      location: value,
    }));
  };

  const handleDate = (item) => {
    setDate([item.selection]);
    setForm((prevForm) => ({
      ...prevForm,
      startDate: item.selection.startDate,
      endDate: item.selection.endDate,
    }));
  };

  const handleChildren = (e) => {
    const { value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      children: value,
    }));
  };

  const handleRoom = (e) => {
    const { value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      room: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative py-10">
      <form
        onSubmit={handleSearch}
        className="search-form flex justify-between bg-white px-6 py-2 absolute w-full top-[85px] border-4 rounded border-yellow-400"
      >
        <div className="flex gap-3 items-center">
          <FaBed
            size={20}
            color="#d3d3d3"
          />
          <input
            type="text"
            className="focus:outline-none text-gray"
            placeholder="Where are you going?"
            value={form.location}
            onChange={handleLocation}
          />
        </div>
        <div className="flex gap-5 items-center cursor-pointer relative">
          <div
            className="flex gap-2 items-center"
            onClick={handleDatePicker}
          >
            <SlCalender
              size={20}
              color="#d3d3d3"
            />
            <p className="text-gray">
              {FormatDate(form.startDate)} to {FormatDate(form.endDate)}
            </p>
          </div>
          <div
            className={`absolute top-10 z-10 ${
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
        <div className="flex gap-5 items-center">
          <FaPerson
            size={20}
            color="#d3d3d3"
          />
          <div className="text-gray cursor-pointer relative">
            <div onClick={handleToggle}>
              <span> {form.adult} adult</span> •
              <span> {form.children} children</span> •
              <span> {form.room} room</span>
            </div>
            <div
              className={`absolute top-10 z-10 p-2 bg-white shadow-lg shadow-black w-[200px] divide-y ${
                activeToggle ? 'block' : 'hidden'
              }`}
            >
              <div className="flex justify-between items-center">
                <label>Adult</label>
                <input
                  type="number"
                  min={1}
                  className="w-[60px] border border-gray px-2 my-2 rounded"
                  value={form.adult}
                  onChange={handleAdult}
                />
              </div>
              <div className="flex justify-between items-center">
                <label>Children</label>
                <input
                  type="number"
                  min={0}
                  className="w-[60px] border border-gray px-2 my-2 rounded"
                  value={form.children}
                  onChange={handleChildren}
                />
              </div>
              <div className="flex justify-between items-center">
                <label>Room</label>
                <input
                  type="number"
                  min={1}
                  className="w-[60px] border border-gray px-2 my-2 rounded"
                  value={form.room}
                  onChange={handleRoom}
                />
              </div>
            </div>
          </div>
        </div>
        <Link
          to="/search"
          state={{ form }}
        >
          <Button
            type="submit"
            typeButton="secondary"
            textContent="Search"
          />
        </Link>
      </form>
    </div>
  );
};

export default Search;
