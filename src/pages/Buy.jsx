import React from "react";
import { HiHome } from "react-icons/hi";
import { BiHome } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Buy() {
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
          Properties for Sale
        </h1>
        <div className="flex items-center">
          <HiHome size={25} className="mr-2 text-orange-200" />
          <p className="inline-block text-gray-700 font-semibold">
            Home &gt; <span className="font-bold">Buy</span>
          </p>
        </div>
      </div>

      {/* Hero Section with Image/Video Slot */}
      <section className="flex flex-col sm:px-[5rem] md:py-[5rem] md:px-[10rem] gap-6 items-center lg:flex-row">
        <div className="flex-none">
          {/* IMAGE/VIDEO SLOT 1 - Featured Property */}
          <div className="h-[50rem] w-[40rem] shrink-0 shadow-lg object-cover rounded-md border-[1rem] border-white bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500 text-lg text-center">IMAGE/VIDEO SLOT 1<br/>Featured Property</p>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-mainBlue mb-6">
            Find Your Dream Home
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Discover exceptional properties for sale across prime locations. From luxury apartments to spacious family homes, 
            we offer a carefully curated selection that meets every lifestyle and budget. Our expert team is dedicated to 
            helping you find the perfect property that matches your vision and investment goals.
          </p>
          
          {/* IMAGE/VIDEO SLOT 2 - Property Showcase */}
          <div className="my-8 h-[20rem] w-full bg-gray-200 rounded-md flex items-center justify-center">
            <p className="text-gray-500">IMAGE/VIDEO SLOT 2 - Property Showcase</p>
          </div>
          
          <h3 className="text-xl font-semibold text-mainBlue mb-4">
            Why Buy With Us
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              Extensive portfolio of verified properties
            </li>
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              Competitive pricing and market insights
            </li>
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              Expert legal and financial guidance
            </li>
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              Transparent transaction process
            </li>
          </ul>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="px-6 bg-customWhite lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Property Card 1 */}
          <div className="bg-white shadow-lg rounded-md p-6">
            {/* IMAGE SLOT */}
            <div className="h-40 w-full bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              <p className="text-gray-500">PROPERTY IMAGE 1</p>
            </div>
            <h3 className="text-lg font-bold mb-2">Luxury Villa</h3>
            <p className="text-gray-600 text-sm mb-2">Banana Island, Lagos</p>
            <p className="text-mainBlue font-bold text-xl mb-2">₦2,500,000</p>
            <p className="text-gray-600 text-sm">4 Beds • 3 Baths • 4500 sqft</p>
          </div>
          
          {/* Property Card 2 */}
          <div className="bg-white shadow-lg rounded-md p-6">
            {/* IMAGE SLOT */}
            <div className="h-40 w-full bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              <p className="text-gray-500">PROPERTY IMAGE 2</p>
            </div>
            <h3 className="text-lg font-bold mb-2">Modern Apartment</h3>
            <p className="text-gray-600 text-sm mb-2">Victoria Island, Lagos</p>
            <p className="text-mainBlue font-bold text-xl mb-2">₦1,800,000</p>
            <p className="text-gray-600 text-sm">3 Beds • 2 Baths • 2800 sqft</p>
          </div>
          
          {/* Property Card 3 */}
          <div className="bg-white shadow-lg rounded-md p-6">
            {/* IMAGE SLOT */}
            <div className="h-40 w-full bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              <p className="text-gray-500">PROPERTY IMAGE 3</p>
            </div>
            <h3 className="text-lg font-bold mb-2">Penthouse Suite</h3>
            <p className="text-gray-600 text-sm mb-2">Ikoyi, Lagos</p>
            <p className="text-mainBlue font-bold text-xl mb-2">₦5,500,000</p>
            <p className="text-gray-600 text-sm">5 Beds • 4 Baths • 5200 sqft</p>
          </div>
        </div>
      </section>

      {/* Buying Process Section */}
      <section className="px-6 lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">Simple Buying Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="h-24 w-24 bg-newBlue rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h3 className="font-bold mb-2">Browse Properties</h3>
            <p className="text-gray-600 text-sm">Explore our extensive collection of verified properties</p>
          </div>
          <div className="text-center">
            <div className="h-24 w-24 bg-newBlue rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="font-bold mb-2">Schedule Viewing</h3>
            <p className="text-gray-600 text-sm">Visit properties that match your preferences</p>
          </div>
          <div className="text-center">
            <div className="h-24 w-24 bg-newBlue rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="font-bold mb-2">Make Offer</h3>
            <p className="text-gray-600 text-sm">Submit your offer with our expert guidance</p>
          </div>
          <div className="text-center">
            <div className="h-24 w-24 bg-newBlue rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">4</span>
            </div>
            <h3 className="font-bold mb-2">Close Deal</h3>
            <p className="text-gray-600 text-sm">Complete legal documentation and get your keys</p>
          </div>
        </div>
      </section>

      {/* CTA Section with Video Slot */}
      <section className="px-6 lg:px-[10rem] py-12 bg-mainBlue">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
          <p className="mb-8">Let our expert team guide you through every step of your property buying journey</p>
          
          {/* VIDEO SLOT */}
          <div className="max-w-4xl mx-auto h-96 bg-gray-800 rounded-md mb-8 flex items-center justify-center">
            <p className="text-white text-xl">VIDEO SLOT - Client Testimonials</p>
          </div>
          
          <button className="bg-orange-200 text-mainBlue px-8 py-3 rounded-full font-semibold hover:bg-orange-300 transition-colors">
            Start Your Property Search
          </button>
        </div>
      </section>
    </section>
  );
}