'use client';
import React from 'react';
import NavBar  from '../homePage/nav';

const services = [
  { name: 'Dr foulen', service: 'Physiothérapeute', available: true },
  { name: 'Mr. Alex Johnson', service: 'IT Instructor', available: true },
  { name: 'foulen', service: 'IT', available: false },
  { name: 'foulen', service: 'IT', available: false },
  { name: 'foulen', service: 'IT', available: true },
  { name: 'foulen', service: 'IT', available: false },
  { name: 'foulen', service: 'IT', available: true },
];

const BookingPage = () => {
  return (
    <>
    
    <NavBar/>
    
    <div className="flex flex-col items-center p-6">
      <div className="bg-yellow-400 text-xl font-bold py-2 px-6 rounded-md mb-6">BOOKING</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-md w-full bg-white"
          >
            <h3 className="text-lg font-semibold">{service.name}</h3>
            <p className="text-gray-600">Service</p>
            <p className="font-bold">{service.service}</p>
            <p className="mt-2">Availability :</p>
            <p className={service.available ? 'text-green-600' : 'text-red-600'}>
              {service.available ? 'Available' : 'Complete'}
            </p>
            <div className="mt-4">
              {service.available ? (
                <button className="text-blue-600 font-semibold">Schedule Now</button>
              ) : (
                <p className="text-gray-400">Fully Booked</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default BookingPage;
