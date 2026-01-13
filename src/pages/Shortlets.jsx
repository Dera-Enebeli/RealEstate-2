import React from "react";
import { BiCalendar } from "react-icons/bi";
import { HiCalendarDays } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Shortlets() {
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
          Short-Term Rentals
        </h1>
        <div className="flex items-center">
          <BiCalendar size={25} className="mr-2 text-orange-200" />
          <p className="inline-block text-gray-700 font-semibold">
            Home &gt; <span className="font-bold">Shortlets</span>
          </p>
        </div>
      </div>

      {/* Hero Section with Image/Video Slot */}
      <section className="flex flex-col sm:px-[5rem] md:py-[5rem] md:px-[10rem] gap-6 items-center lg:flex-row">
        <div className="flex-none">
          {/* IMAGE/VIDEO SLOT 1 - Featured Shortlet Property */}
          <div className="h-[50rem] w-[40rem] shrink-0 shadow-lg object-cover rounded-md border-[1rem] border-white bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500 text-lg text-center">IMAGE/VIDEO SLOT 1<br/>Featured Shortlet Property</p>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-mainBlue mb-6">
            Premium Short-Term Stays
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Experience luxury and comfort with our premium short-term rental properties. 
            Perfect for business trips, vacation getaways, or temporary relocations, our fully 
            furnished properties offer hotel-like amenities with the privacy and space of a home. 
            Enjoy flexible booking options, prime locations, and exceptional service throughout your stay.
          </p>
          
          {/* IMAGE/VIDEO SLOT 2 - Property Amenities */}
          <div className="my-8 h-[20rem] w-full bg-gray-200 rounded-md flex items-center justify-center">
            <p className="text-gray-500">IMAGE/VIDEO SLOT 2 - Property Amenities</p>
          </div>
          
          <h3 className="text-xl font-semibold text-mainBlue mb-4">
            Why Choose Our Shortlets
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              Fully furnished with modern amenities
            </li>
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              Flexible booking from daily to monthly stays
            </li>
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              Prime locations in business and leisure districts
            </li>
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              24/7 concierge and housekeeping services
            </li>
          </ul>
        </div>
      </section>

      {/* Shortlet Categories Section */}
      <section className="px-6 bg-customWhite lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">Shortlet Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Category 1 */}
          <div className="bg-white shadow-lg rounded-md p-6">
            {/* IMAGE SLOT */}
            <div className="h-40 w-full bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              <p className="text-gray-500">BUSINESS APARTMENTS IMAGE</p>
            </div>
            <h3 className="text-lg font-bold mb-2">Business Apartments</h3>
            <p className="text-gray-600 text-sm mb-2">Corporate-friendly spaces with work areas</p>
            <p className="text-mainBlue font-semibold">From ₦25,000/night</p>
          </div>
          
          {/* Category 2 */}
          <div className="bg-white shadow-lg rounded-md p-6">
            {/* IMAGE SLOT */}
            <div className="h-40 w-full bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              <p className="text-gray-500">VACATION VILLAS IMAGE</p>
            </div>
            <h3 className="text-lg font-bold mb-2">Vacation Villas</h3>
            <p className="text-gray-600 text-sm mb-2">Luxury villas for holiday experiences</p>
            <p className="text-mainBlue font-semibold">From ₦85,000/night</p>
          </div>
          
          {/* Category 3 */}
          <div className="bg-white shadow-lg rounded-md p-6">
            {/* IMAGE SLOT */}
            <div className="h-40 w-full bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              <p className="text-gray-500">STUDIO APARTMENTS IMAGE</p>
            </div>
            <h3 className="text-lg font-bold mb-2">Studio Apartments</h3>
            <p className="text-gray-600 text-sm mb-2">Compact spaces for solo travelers</p>
            <p className="text-mainBlue font-semibold">From ₦15,000/night</p>
          </div>
        </div>
      </section>

      {/* Featured Shortlets */}
      <section className="px-6 lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">Featured Shortlets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Property 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* IMAGE SLOT */}
            <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">SHORTLET PROPERTY IMAGE 1</p>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold mb-1">Executive Suite</h3>
                  <p className="text-gray-600 text-sm">Victoria Island, Lagos</p>
                </div>
                <div className="bg-orange-200 text-mainBlue px-2 py-1 rounded text-xs font-semibold">
                  POPULAR
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-mainBlue font-bold text-xl">₦35,000/night</span>
                <div className="text-sm text-gray-600">
                  1 Bed • 1 Bath • 750 sqft
                </div>
              </div>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• High-speed WiFi & workspace</li>
                <li>• Kitchenette & laundry facilities</li>
                <li>• 24/7 security & power backup</li>
              </ul>
              <div className="flex gap-2">
                <button className="flex-1 bg-newBlue text-white py-2 rounded hover:bg-blue-800 transition-colors">
                  Book Now
                </button>
                <button className="flex-1 border border-newBlue text-newBlue py-2 rounded hover:bg-blue-50 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
          
          {/* Property 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* IMAGE SLOT */}
            <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">SHORTLET PROPERTY IMAGE 2</p>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold mb-1">Holiday Villa</h3>
                  <p className="text-gray-600 text-sm">Lekki Phase 1, Lagos</p>
                </div>
                <div className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                  NEW
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-mainBlue font-bold text-xl">₦95,000/night</span>
                <div className="text-sm text-gray-600">
                  3 Beds • 2 Baths • 2200 sqft
                </div>
              </div>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Private pool & garden area</li>
                <li>• Full kitchen & entertainment system</li>
                <li>• Housekeeping service included</li>
              </ul>
              <div className="flex gap-2">
                <button className="flex-1 bg-newBlue text-white py-2 rounded hover:bg-blue-800 transition-colors">
                  Book Now
                </button>
                <button className="flex-1 border border-newBlue text-newBlue py-2 rounded hover:bg-blue-50 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="px-6 bg-customWhite lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">Premium Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="h-20 w-20 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-mainBlue text-2xl">📶</span>
            </div>
            <h3 className="font-bold mb-2">High-Speed Internet</h3>
            <p className="text-gray-600 text-sm">Fast reliable WiFi for work and entertainment</p>
          </div>
          <div className="text-center">
            <div className="h-20 w-20 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-mainBlue text-2xl">🧺</span>
            </div>
            <h3 className="font-bold mb-2">Housekeeping</h3>
            <p className="text-gray-600 text-sm">Daily cleaning and fresh linens provided</p>
          </div>
          <div className="text-center">
            <div className="h-20 w-20 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-mainBlue text-2xl">🔋</span>
            </div>
            <h3 className="font-bold mb-2">24/7 Power Backup</h3>
            <p className="text-gray-600 text-sm">Uninterrupted power supply throughout your stay</p>
          </div>
          <div className="text-center">
            <div className="h-20 w-20 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-mainBlue text-2xl">🚗</span>
            </div>
            <h3 className="font-bold mb-2">Parking Space</h3>
            <p className="text-gray-600 text-sm">Secure parking for multiple vehicles</p>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="px-6 lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">Easy Booking Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="h-16 w-16 bg-newBlue rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-xl font-bold">1</span>
            </div>
            <h3 className="font-bold mb-2">Select Dates</h3>
            <p className="text-gray-600 text-sm">Choose your check-in and check-out dates</p>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 bg-newBlue rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-xl font-bold">2</span>
            </div>
            <h3 className="font-bold mb-2">Choose Property</h3>
            <p className="text-gray-600 text-sm">Browse and select your preferred shortlet</p>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 bg-newBlue rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-xl font-bold">3</span>
            </div>
            <h3 className="font-bold mb-2">Confirm Booking</h3>
            <p className="text-gray-600 text-sm">Review details and make secure payment</p>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 bg-newBlue rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-xl font-bold">4</span>
            </div>
            <h3 className="font-bold mb-2">Check-in</h3>
            <p className="text-gray-600 text-sm">Receive keys and enjoy your stay</p>
          </div>
        </div>
      </section>

      {/* CTA Section with Video Slot */}
      <section className="px-6 lg:px-[10rem] py-12 bg-mainBlue">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Your Perfect Short Stay Awaits</h2>
          <p className="mb-8">Book your ideal short-term rental with flexible options and premium amenities</p>
          
          {/* VIDEO SLOT */}
          <div className="max-w-4xl mx-auto h-96 bg-gray-800 rounded-md mb-8 flex items-center justify-center">
            <p className="text-white text-xl">VIDEO SLOT - Virtual Property Tours</p>
          </div>
          
          <div className="flex gap-4 justify-center">
            <button className="bg-orange-200 text-mainBlue px-8 py-3 rounded-full font-semibold hover:bg-orange-300 transition-colors">
              Browse Available Shortlets
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-mainBlue transition-colors">
              Check Availability
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}