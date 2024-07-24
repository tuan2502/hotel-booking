import Button from '@/components/button/Button';
import React, { useState } from 'react';

const SendMail = () => {
  const [email, setEmail] = useState('');

  const onSubmit = () => {
    console.log(email);
  }

  return (
    <div className="bg-dark-blue w-full text-white">
      <div className="container mx-auto p-10">
        <div className="mx-auto w-[30%] text-center">
          <h1 className="font-bold pb-4">Save time, save money!</h1>
          <p className="pb-3">Sign up and we'll send the best deals to you</p>
          <div className="flex gap-3">
            <input
              type="email"
              aria-label="Email"
              className="p-3 text-primary rounded-lg w-full"
              placeholder="Your Email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
            <Button
              onClick={onSubmit}
              className="rounded-lg"
              typeButton="secondary"
              textContent="Subscribe"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMail;
