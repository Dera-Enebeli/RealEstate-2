import React from "react";
import { GoGraph } from "react-icons/go";
import { BiMoney } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Sell() {
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
          Sell Your Property
        </h1>
        <div className="flex items-center">
          <GoGraph size={25} className="mr-2 text-orange-200" />
          <p className="inline-block text-gray-700 font-semibold">
            Home &gt; <span className="font-bold">Sell</span>
          </p>
        </div>
      </div>

      {/* Hero Section with Image/Video Slot */}
      <section className="flex flex-col sm:px-[5rem] md:py-[5rem] md:px-[10rem] gap-6 items-center lg:flex-row">
        <div className="flex-none">
          {/* IMAGE/VIDEO SLOT 1 - Selling Success Story */}
          <div className="h-[50rem] w-[40rem] shrink-0 shadow-lg object-cover rounded-md border-[1rem] border-white bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500 text-lg text-center">IMAGE/VIDEO SLOT 1<br/>Selling Success Story</p>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-mainBlue mb-6">
            Get the Best Value for Your Property
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Selling your property is one of the most significant financial decisions you'll make. 
            Our expert team leverages extensive market knowledge, advanced marketing strategies, and 
            a vast network of potential buyers to ensure you get the best possible value. From property 
            valuation to closing the deal, we guide you through every step with transparency and expertise.
          </p>
          
          {/* IMAGE/VIDEO SLOT 2 - Market Analysis */}
          <div className="my-8 h-[20rem] w-full bg-gray-200 rounded-md flex items-center justify-center">
            <p className="text-gray-500">IMAGE/VIDEO SLOT 2 - Market Analysis Chart</p>
          </div>
          
          <h3 className="text-xl font-semibold text-mainBlue mb-4">
            Why Choose Our Selling Services
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              Comprehensive property valuation and market analysis
            </li>
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              Professional photography and virtual tours
            </li>
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              Extensive marketing across multiple platforms
            </li>
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              Qualified buyer screening and negotiation
            </li>
          </ul>
        </div>
      </section>

      {/* Selling Process Section */}
      <section className="px-6 bg-customWhite lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">Our Selling Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Process Step 1 */}
          <div className="text-center">
            <div className="h-24 w-24 bg-newBlue rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h3 className="font-bold mb-2">Property Valuation</h3>
            <p className="text-gray-600 text-sm">Free professional valuation with market insights</p>
          </div>
          {/* Process Step 2 */}
          <div className="text-center">
            <div className="h-24 w-24 bg-newBlue rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="font-bold mb-2">Marketing Strategy</h3>
            <p className="text-gray-600 text-sm">Customized marketing plan with professional media</p>
          </div>
          {/* Process Step 3 */}
          <div className="text-center">
            <div className="h-24 w-24 bg-newBlue rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="font-bold mb-2">Buyer Matching</h3>
            <p className="text-gray-600 text-sm">Connect with qualified buyers from our network</p>
          </div>
          {/* Process Step 4 */}
          <div className="text-center">
            <div className="h-24 w-24 bg-newBlue rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">4</span>
            </div>
            <h3 className="font-bold mb-2">Close Deal</h3>
            <p className="text-gray-600 text-sm">Expert negotiation and seamless closing process</p>
          </div>
        </div>
      </section>

      {/* Marketing Services Section */}
      <section className="px-6 lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">Our Marketing Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-md p-6">
            {/* IMAGE SLOT */}
            <div className="h-40 w-full bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              <p className="text-gray-500">PROFESSIONAL PHOTOGRAPHY IMAGE</p>
            </div>
            <h3 className="text-lg font-bold mb-2">Professional Photography</h3>
            <p className="text-gray-600 text-sm">High-quality images and virtual tours to showcase your property's best features</p>
            <div className="flex items-center mt-3">
              <BiMoney className="text-newBlue mr-2" />
              <span className="text-mainBlue font-semibold">Premium Service</span>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white shadow-lg rounded-md p-6">
            {/* IMAGE SLOT */}
            <div className="h-40 w-full bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              <p className="text-gray-500">DIGITAL MARKETING IMAGE</p>
            </div>
            <h3 className="text-lg font-bold mb-2">Digital Marketing</h3>
            <p className="text-gray-600 text-sm">Targeted online campaigns across social media and property portals</p>
            <div className="flex items-center mt-3">
              <BiMoney className="text-newBlue mr-2" />
              <span className="text-mainBlue font-semibold">Standard Service</span>
            </div>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white shadow-lg rounded-md p-6">
            {/* IMAGE SLOT */}
            <div className="h-40 w-full bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              <p className="text-gray-500">OPEN HOUSE IMAGE</p>
            </div>
            <h3 className="text-lg font-bold mb-2">Open House Events</h3>
            <p className="text-gray-600 text-sm">Organized property viewings and open house events for serious buyers</p>
            <div className="flex items-center mt-3">
              <BiMoney className="text-newBlue mr-2" />
              <span className="text-mainBlue font-semibold">Premium Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recently Sold Properties */}
      <section className="px-6 bg-customWhite lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">Recently Sold Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Sold Property 1 */}
          <div className="bg-white shadow-lg rounded-md overflow-hidden">
            {/* IMAGE SLOT */}
            <div className="h-32 w-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">SOLD PROPERTY 1</p>
            </div>
            <div className="p-4">
              <div className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                SOLD
              </div>
              <h4 className="font-bold text-sm mb-1">Luxury Villa</h4>
              <p className="text-gray-600 text-xs mb-2">Banana Island</p>
              <p className="text-mainBlue font-bold">₦2,800,000</p>
            </div>
          </div>
          
          {/* Sold Property 2 */}
          <div className="bg-white shadow-lg rounded-md overflow-hidden">
            {/* IMAGE SLOT */}
            <div className="h-32 w-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">SOLD PROPERTY 2</p>
            </div>
            <div className="p-4">
              <div className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                SOLD
              </div>
              <h4 className="font-bold text-sm mb-1">Modern Apartment</h4>
              <p className="text-gray-600 text-xs mb-2">Victoria Island</p>
              <p className="text-mainBlue font-bold">₦1,950,000</p>
            </div>
          </div>
          
          {/* Sold Property 3 */}
          <div className="bg-white shadow-lg rounded-md overflow-hidden">
            {/* IMAGE SLOT */}
            <div className="h-32 w-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">SOLD PROPERTY 3</p>
            </div>
            <div className="p-4">
              <div className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                SOLD
              </div>
              <h4 className="font-bold text-sm mb-1">Townhouse</h4>
              <p className="text-gray-600 text-xs mb-2">Lekki Phase 1</p>
              <p className="text-mainBlue font-bold">₦1,650,000</p>
            </div>
          </div>
          
          {/* Sold Property 4 */}
          <div className="bg-white shadow-lg rounded-md overflow-hidden">
            {/* IMAGE SLOT */}
            <div className="h-32 w-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">SOLD PROPERTY 4</p>
            </div>
            <div className="p-4">
              <div className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                SOLD
              </div>
              <h4 className="font-bold text-sm mb-1">Penthouse</h4>
              <p className="text-gray-600 text-xs mb-2">Ikoyi</p>
              <p className="text-mainBlue font-bold">₦5,800,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seller Resources Section */}
      <section className="px-6 lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">Seller Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-mainBlue mb-4">Property Preparation Tips</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-newBlue mr-2">✓</span>
                <span>Declutter and depersonalize living spaces</span>
              </li>
              <li className="flex items-start">
                <span className="text-newBlue mr-2">✓</span>
                <span>Make minor repairs and improvements</span>
              </li>
              <li className="flex items-start">
                <span className="text-newBlue mr-2">✓</span>
                <span>Enhance curb appeal with landscaping</span>
              </li>
              <li className="flex items-start">
                <span className="text-newBlue mr-2">✓</span>
                <span>Stage rooms to highlight functionality</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-mainBlue mb-4">Market Insights</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-newBlue mr-2">📈</span>
                <span>Current market trends and pricing analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-newBlue mr-2">🏘️</span>
                <span>Neighborhood development and amenities</span>
              </li>
              <li className="flex items-start">
                <span className="text-newBlue mr-2">⏰</span>
                <span>Best timing for listing your property</span>
              </li>
              <li className="flex items-start">
                <span className="text-newBlue mr-2">💰</span>
                <span>Financing options for potential buyers</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section with Video Slot */}
      <section className="px-6 lg:px-[10rem] py-12 bg-mainBlue">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Sell Your Property?</h2>
          <p className="mb-8">Get a free property valuation and expert guidance from our experienced team</p>
          
          {/* VIDEO SLOT */}
          <div className="max-w-4xl mx-auto h-96 bg-gray-800 rounded-md mb-8 flex items-center justify-center">
            <p className="text-white text-xl">VIDEO SLOT - Seller Testimonials</p>
          </div>
          
          <div className="flex gap-4 justify-center">
            <button className="bg-orange-200 text-mainBlue px-8 py-3 rounded-full font-semibold hover:bg-orange-300 transition-colors">
              Get Free Valuation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-mainBlue transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}