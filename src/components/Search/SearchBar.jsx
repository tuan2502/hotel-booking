import React, { useState } from 'react';
import { FaBed } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import { FaPerson } from 'react-icons/fa6';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

const Search = () => {
  const [form, setForm] = useState({
    location: '',
    startDate: '',
    endDate: '',
    adult: 1,
    children: 0,
    room: 1,
  });
  const [location, setLocation] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [adultMount, setAdultMount] = useState();
  const [childrenMount, setChildrenMount] = useState();
  const [roomMount, setRoomMount] = useState();

  const handleLocation = (e) => {
    const { value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      location: value,
    }));
  };

  const handleStartDate = (e) => {
    const { value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      startDate: value,
    }));
  };

  const handleEndDate = (e) => {
    const { value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      endDate: value,
    }));
  };

  const handleSearch = e => {
    e.preventDefault();
    console.log(form);
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
        <div className="flex gap-5 items-center">
          {/* <SlCalender size={20} color="#d3d3d3" /> */}
          <input
            type="date"
            className="focus:outline-none date-input text-gray"
            min={new Date().toISOString().split("T")[0]}
            value={form.startDate}
            onChange={handleStartDate}
          />
          <p className="text-gray">to</p>
          <input
            type="date"
            className="focus:outline-none date-input text-gray"
            value={form.endDate}
            onChange={handleEndDate}
          />
        </div>
        <div className="flex gap-5 items-center">
          <FaPerson
            size={20}
            color="#d3d3d3"
          />
          <div className="text-gray">
            <span className="cursor-pointer">{form.adult} adult</span> •
            <span className="cursor-pointer"> {form.children} children</span> •
            <span className="cursor-pointer"> {form.room} room</span>
          </div>
        </div>
        <div>
          <Button
            type="submit"
            typeButton="secondary"
            textContent="Search"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
