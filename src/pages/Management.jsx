import React from "react";
import { GrUserWorker } from "react-icons/gr";
import { HiUsers } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Management() {
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
          Property Management
        </h1>
        <div className="flex items-center">
          <GrUserWorker size={25} className="mr-2 text-orange-200" />
          <p className="inline-block text-gray-700 font-semibold">
            Home &gt; <span className="font-bold">Management</span>
          </p>
        </div>
      </div>

      {/* Hero Section with Image/Video Slot */}
      <section className="flex flex-col sm:px-[5rem] md:py-[5rem] md:px-[10rem] gap-6 items-center lg:flex-row">
        <div className="flex-none">
          {/* IMAGE/VIDEO SLOT 1 - Property Management Showcase */}
          <div className="h-[50rem] w-[40rem] shrink-0 shadow-lg object-cover rounded-md border-[1rem] border-white bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500 text-lg text-center">IMAGE/VIDEO SLOT 1<br/>Property Management Showcase</p>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-mainBlue mb-6">
            Professional Property Management
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our comprehensive property management services ensure your real estate investments are 
            expertly maintained and optimized for maximum returns. From tenant screening to maintenance 
            coordination, we handle all aspects of property management with professionalism and efficiency. 
            Trust us to protect your investment while providing exceptional service to your tenants.
          </p>
          
          {/* IMAGE/VIDEO SLOT 2 - Management Services */}
          <div className="my-8 h-[20rem] w-full bg-gray-200 rounded-md flex items-center justify-center">
            <p className="text-gray-500">IMAGE/VIDEO SLOT 2 - Management Services Overview</p>
          </div>
          
          <h3 className="text-xl font-semibold text-mainBlue mb-4">
            Our Management Services
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              Complete tenant screening and placement
            </li>
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              Rent collection and financial reporting
            </li>
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
            </li>
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              Legal compliance and property maintenance
            </li>
          </ul>
        </div>
      </section>

      {/* Management Services Section */}
      <section className="px-6 bg-customWhite lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">Comprehensive Management Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-md p-6">
            {/* IMAGE SLOT */}
            <div className="h-40 w-full bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              <p className="text-gray-500">TENANT MANAGEMENT IMAGE</p>
            </div>
            <h3 className="text-lg font-bold mb-2">Tenant Management</h3>
            <p className="text-gray-600 text-sm mb-3">Complete tenant lifecycle management</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Tenant screening and verification</li>
              <li>• Lease agreement management</li>
              <li>• Move-in/move-out coordination</li>
            </ul>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white shadow-lg rounded-md p-6">
            {/* IMAGE SLOT */}
            <div className="h-40 w-full bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              <p className="text-gray-500">FINANCIAL MANAGEMENT IMAGE</p>
            </div>
            <h3 className="text-lg font-bold mb-2">Financial Management</h3>
            <p className="text-gray-600 text-sm mb-3">Transparent financial services</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Rent collection and accounting</li>
              <li>• Expense management</li>
              <li>• Monthly financial reports</li>
            </ul>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white shadow-lg rounded-md p-6">
            {/* IMAGE SLOT */}
            <div className="h-40 w-full bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              <p className="text-gray-500">MAINTENANCE SERVICES IMAGE</p>
            </div>
            <h3 className="text-lg font-bold mb-2">Maintenance Services</h3>
            <p className="text-gray-600 text-sm mb-3">24/7 maintenance coordination</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Emergency repairs</li>
              <li>• Preventive maintenance</li>
              <li>• Vendor management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Managed Properties */}
      <section className="px-6 lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">Currently Managing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Property 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* IMAGE SLOT */}
            <div className="h-56 w-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">MANAGED PROPERTY IMAGE 1</p>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold mb-1">Garden Heights Apartments</h3>
                  <p className="text-gray-600 text-sm">Ikoyi, Lagos</p>
                </div>
                <div className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                  ACTIVE
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Units:</span> 48
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Occupancy:</span> 95%
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Type:</span> Residential
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Managed:</span> 3 Years
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Luxury residential complex with comprehensive amenities and services
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-newBlue text-white py-2 rounded hover:bg-blue-800 transition-colors">
                  View Details
                </button>
                <button className="flex-1 border border-newBlue text-newBlue py-2 rounded hover:bg-blue-50 transition-colors">
                  Performance Report
                </button>
              </div>
            </div>
          </div>
          
          {/* Property 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* IMAGE SLOT */}
            <div className="h-56 w-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">MANAGED PROPERTY IMAGE 2</p>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold mb-1">Bluewater Office Complex</h3>
                  <p className="text-gray-600 text-sm">Victoria Island, Lagos</p>
                </div>
                <div className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                  ACTIVE
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Units:</span> 120
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Occupancy:</span> 88%
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Type:</span> Commercial
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Managed:</span> 2 Years
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Premium commercial office space with modern facilities and security
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-newBlue text-white py-2 rounded hover:bg-blue-800 transition-colors">
                  View Details
                </button>
                <button className="flex-1 border border-newBlue text-newBlue py-2 rounded hover:bg-blue-50 transition-colors">
                  Performance Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Benefits */}
      <section className="px-6 bg-customWhite lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">Why Choose Our Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="h-20 w-20 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-mainBlue text-2xl">💰</span>
            </div>
            <h3 className="font-bold mb-2">Maximize Returns</h3>
            <p className="text-gray-600 text-sm">Optimize rental income and property value</p>
          </div>
          <div className="text-center">
            <div className="h-20 w-20 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-mainBlue text-2xl">⚖️</span>
            </div>
            <h3 className="font-bold mb-2">Legal Compliance</h3>
            <p className="text-gray-600 text-sm">Ensure all legal requirements are met</p>
          </div>
          <div className="text-center">
            <div className="h-20 w-20 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-mainBlue text-2xl">📊</span>
            </div>
            <h3 className="font-bold mb-2">Transparent Reports</h3>
            <p className="text-gray-600 text-sm">Regular performance and financial reports</p>
          </div>
          <div className="text-center">
            <div className="h-20 w-20 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-mainBlue text-2xl">🔧</span>
            </div>
            <h3 className="font-bold mb-2">Expert Maintenance</h3>
            <p className="text-gray-600 text-sm">Professional maintenance and repairs</p>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="px-6 lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">Properties We Manage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-md p-6 text-center">
            {/* IMAGE SLOT */}
            <div className="h-24 w-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <p className="text-gray-500">RESIDENTIAL</p>
            </div>
            <h3 className="text-lg font-bold mb-2">Residential Properties</h3>
            <p className="text-gray-600 text-sm">Apartments, houses, and multi-family units</p>
          </div>
          
          <div className="bg-white shadow-lg rounded-md p-6 text-center">
            {/* IMAGE SLOT */}
            <div className="h-24 w-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <p className="text-gray-500">COMMERCIAL</p>
            </div>
            <h3 className="text-lg font-bold mb-2">Commercial Properties</h3>
            <p className="text-gray-600 text-sm">Office spaces, retail shops, and warehouses</p>
          </div>
          
          <div className="bg-white shadow-lg rounded-md p-6 text-center">
            {/* IMAGE SLOT */}
            <div className="h-24 w-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <p className="text-gray-500">MIXED USE</p>
            </div>
            <h3 className="text-lg font-bold mb-2">Mixed-Use Properties</h3>
            <p className="text-gray-600 text-sm">Combined residential and commercial spaces</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 bg-customWhite lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-start mb-4">
              {/* IMAGE SLOT */}
              <div className="h-12 w-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                <p className="text-gray-500 text-xs">CLIENT 1</p>
              </div>
              <div>
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-gray-600 text-sm">Property Owner</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "The property management team has transformed my investment. Their attention to detail 
              and professional approach has increased my rental income by 20% while reducing vacancy rates."
            </p>
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-orange-400">⭐</span>
              ))}
            </div>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-start mb-4">
              {/* IMAGE SLOT */}
              <div className="h-12 w-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                <p className="text-gray-500 text-xs">CLIENT 2</p>
              </div>
              <div>
                <h4 className="font-bold">Michael Chen</h4>
                <p className="text-gray-600 text-sm">Commercial Property Investor</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Outstanding service! They handle everything from tenant screening to maintenance, 
              allowing me to focus on growing my portfolio. Their monthly reports are comprehensive and transparent."
            </p>
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-orange-400">⭐</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Video Slot */}
      <section className="px-6 lg:px-[10rem] py-12 bg-mainBlue">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Maximize Your Property Investment</h2>
          <p className="mb-8">Let our expert management team handle the details while you enjoy the returns</p>
          
          {/* VIDEO SLOT */}
          <div className="max-w-4xl mx-auto h-96 bg-gray-800 rounded-md mb-8 flex items-center justify-center">
            <p className="text-white text-xl">VIDEO SLOT - Management Services Overview</p>
          </div>
          
          <div className="flex gap-4 justify-center">
            <button className="bg-orange-200 text-mainBlue px-8 py-3 rounded-full font-semibold hover:bg-orange-300 transition-colors">
              Get Management Quote
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