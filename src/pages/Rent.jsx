import React from "react";
import { BiKey } from "react-icons/bi";
import { HiBuildingOffice } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Rent() {
  return (
    <section>
  <div className="sm:text-center bg-white py-4 shadow-lg flex flex-wrap rounded-full mx-6 lg:mx-[10rem] mt-4 mb-8 border border-orange-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center text-center">
            <div className="nav-links flex flex-wrap justify-center space-x-6" id="navLinks">
              <Link
                to="/buy"
                className="text-gray-700 hover:bg-orange-200 hover:text-blue-800 py-2 px-4 rounded-full transition-colors duration-300">
                Buy
              </Link>
              <Link
                to="/rent"
                className="text-gray-700 hover:bg-orange-200 hover:text-blue-800 py-2 px-4 rounded-full transition-colors duration-300">
                Rent
              </Link>
              <Link
                to="/sell"
                className="text-gray-700 hover:bg-orange-200 hover:text-blue-800 py-2 px-4 rounded-full transition-colors duration-300">
                Sell
              </Link>
              <Link
                to="/shortlets"
                className="text-gray-700 hover:bg-orange-200 hover:text-blue-800 py-2 px-4 rounded-full transition-colors duration-300">
                Shortlets
              </Link>
              <Link
                to="/construction"
                className="text-gray-700 hover:bg-orange-200 hover:text-blue-800 py-2 px-4 rounded-full transition-colors duration-300">
                Construction
              </Link>
              <Link
                to="/management"
                className="text-gray-700 hover:bg-orange-200 hover:text-blue-800 py-2 px-4 rounded-full transition-colors duration-300">
                Management
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb Section */}
      <div className="px-6 bg-customWhite lg:px-[10rem] py-12">
        <h1 className="text-2xl text-black md:text-4xl font-bold mb-8">
          Properties for Rent
        </h1>
        <div className="flex items-center">
          <BiKey size={25} className="mr-2 text-orange-200" />
          <p className="inline-block text-gray-700 font-semibold">
            Home &gt; <span className="font-bold">Rent</span>
          </p>
        </div>
      </div>

      {/* Hero Section with Image/Video Slot */}
      <section className="flex flex-col sm:px-[5rem] md:py-[5rem] md:px-[10rem] gap-6 items-center lg:flex-row">
        <div className="flex-none">
          {/* IMAGE/VIDEO SLOT 1 - Featured Rental Property */}
          <div className="h-[50rem] w-[40rem] shrink-0 shadow-lg object-cover rounded-md border-[1rem] border-white bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500 text-lg text-center">IMAGE/VIDEO SLOT 1<br/>Featured Rental Property</p>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-mainBlue mb-6">
            Your Perfect Rental Awaits
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Find your ideal rental property from our extensive portfolio of residential and commercial spaces. 
            Whether you're looking for a cozy apartment, spacious family home, or office space, we have options 
            that suit every lifestyle and budget. Our rental properties are located in prime areas with excellent 
            amenities and convenient access to essential services.
          </p>
          
          {/* IMAGE/VIDEO SLOT 2 - Rental Options Showcase */}
          <div className="my-8 h-[20rem] w-full bg-gray-200 rounded-md flex items-center justify-center">
            <p className="text-gray-500">IMAGE/VIDEO SLOT 2 - Rental Options Showcase</p>
          </div>
          
          <h3 className="text-xl font-semibold text-mainBlue mb-4">
            Why Rent With Us
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              Wide selection of verified rental properties
            </li>
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              Transparent pricing with no hidden fees
            </li>
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              Professional property management
            </li>
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              Quick and easy application process
            </li>
          </ul>
        </div>
      </section>

      {/* Rental Categories Section */}
      <section className="px-6 bg-customWhite lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">Rental Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Rental Category 1 */}
          <div className="bg-white shadow-lg rounded-md p-6">
            {/* IMAGE SLOT */}
            <div className="h-40 w-full bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              <p className="text-gray-500">APARTMENTS IMAGE</p>
            </div>
            <h3 className="text-lg font-bold mb-2">Apartments</h3>
            <p className="text-gray-600 text-sm mb-2">Modern apartments in prime locations</p>
            <p className="text-mainBlue font-semibold">Starting from ₦800,000/year</p>
          </div>
          
          {/* Rental Category 2 */}
          <div className="bg-white shadow-lg rounded-md p-6">
            {/* IMAGE SLOT */}
            <div className="h-40 w-full bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              <p className="text-gray-500">FAMILY HOMES IMAGE</p>
            </div>
            <h3 className="text-lg font-bold mb-2">Family Homes</h3>
            <p className="text-gray-600 text-sm mb-2">Spacious homes for growing families</p>
            <p className="text-mainBlue font-semibold">Starting from ₦1,500,000/year</p>
          </div>
          
          {/* Rental Category 3 */}
          <div className="bg-white shadow-lg rounded-md p-6">
            {/* IMAGE SLOT */}
            <div className="h-40 w-full bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              <p className="text-gray-500">COMMERCIAL SPACES IMAGE</p>
            </div>
            <h3 className="text-lg font-bold mb-2">Commercial Spaces</h3>
            <p className="text-gray-600 text-sm mb-2">Office spaces and retail locations</p>
            <p className="text-mainBlue font-semibold">Starting from ₦2,000,000/year</p>
          </div>
        </div>
      </section>

      {/* Featured Rental Properties */}
      <section className="px-6 lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">Featured Rentals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured Property 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* IMAGE SLOT */}
            <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">RENTAL PROPERTY IMAGE 1</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">3-Bedroom Apartment</h3>
              <p className="text-gray-600 mb-2">Lekki Phase 1, Lagos</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-mainBlue font-bold text-xl">₦1,200,000/year</span>
                <div className="text-sm text-gray-600">
                  3 Beds • 2 Baths • 1800 sqft
                </div>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fully furnished option available</li>
                <li>• 24/7 security and power backup</li>
                <li>• Swimming pool and gym access</li>
              </ul>
            </div>
          </div>
          
          {/* Featured Property 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* IMAGE SLOT */}
            <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">RENTAL PROPERTY IMAGE 2</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Office Space</h3>
              <p className="text-gray-600 mb-2">Victoria Island, Lagos</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-mainBlue font-bold text-xl">₦3,500,000/year</span>
                <div className="text-sm text-gray-600">
                  5000 sqft • Open Plan
                </div>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Premium commercial location</li>
                <li>• Meeting rooms and conference facilities</li>
                <li>• High-speed internet and parking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tenant Services Section */}
      <section className="px-6 bg-customWhite lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">Tenant Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="h-20 w-20 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <HiBuildingOffice className="text-mainBlue text-2xl" />
            </div>
            <h3 className="font-bold mb-2">Property Tours</h3>
            <p className="text-gray-600 text-sm">Schedule virtual or in-person property viewings</p>
          </div>
          <div className="text-center">
            <div className="h-20 w-20 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <BiKey className="text-mainBlue text-2xl" />
            </div>
            <h3 className="font-bold mb-2">Quick Application</h3>
            <p className="text-gray-600 text-sm">Streamlined rental application process</p>
          </div>
          <div className="text-center">
            <div className="h-20 w-20 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-mainBlue text-2xl">📋</span>
            </div>
            <h3 className="font-bold mb-2">Legal Support</h3>
            <p className="text-gray-600 text-sm">Lease agreement assistance and review</p>
          </div>
          <div className="text-center">
            <div className="h-20 w-20 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-mainBlue text-2xl">🔧</span>
            </div>
            <h3 className="font-bold mb-2">Maintenance</h3>
            <p className="text-gray-600 text-sm">24/7 maintenance and support services</p>
          </div>
        </div>
      </section>

      {/* CTA Section with Video Slot */}
      <section className="px-6 lg:px-[10rem] py-12 bg-mainBlue">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Find Your Perfect Rental Today</h2>
          <p className="mb-8">Browse our extensive collection of rental properties and connect with expert agents</p>
          
          {/* VIDEO SLOT */}
          <div className="max-w-4xl mx-auto h-96 bg-gray-800 rounded-md mb-8 flex items-center justify-center">
            <p className="text-white text-xl">VIDEO SLOT - Rental Property Tour</p>
          </div>
          
          <button className="bg-orange-200 text-mainBlue px-8 py-3 rounded-full font-semibold hover:bg-orange-300 transition-colors">
            Browse Available Rentals
          </button>
        </div>
      </section>
    </section>
  );
}