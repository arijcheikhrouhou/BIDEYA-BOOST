'use client';
import React from 'react';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
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
    
    <nav className="flex items-center justify-between px-3 py-2 bg-white shadow-sm">
      {/* Logo centré */}
      <div className="text-2xl font-extrabold text-blue-900 ml-8"> {/* Taille et position de "Bideya Boost" */}
        Bideya Boost
      </div>

      {/* Navigation */}
      <ul className="flex space-x-10 flex-1 justify-center text-blue-700 text-l font-semibold"> {/* Modifications ici */}
        <li>
          <Link href="/" className="text-blue-700 hover:text-blue-900 hover:border-b-2 border-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="" className="text-blue-900 hover:border-b-2">
           Booking
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-blue-900 hover:border-b-2">
            Podcast
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-blue-900 hover:border-b-2">
            Reels
          </Link>
        </li>
        <li>
          <Link href="/features" className="text-blue-900 hover:border-b-2">
            Features
          </Link>
        </li>
      </ul>

      {/* Icône et bouton alignés à droite */}
      <div className="flex items-center space-x-4 ml-auto">
        <FiSearch className="text-blue-500 w-6 h-6 hover:border-b-2 cursor-pointer" /> {/* Taille de l'icône augmentée */}
        <button className="px-4 py-3 text-blue-700 border border-blue-700 rounded-full  hover:border-b-2  text-l font-semibold"> {/* Taille du bouton augmentée */}
          Get Started
        </button>
      </div>
    </nav>
    
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
