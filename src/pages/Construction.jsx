import React from "react";
import { GoTools } from "react-icons/go";
import { HiPaintBrush } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Construction() {
  return (
    <section>
      <div className="sm:text-center bg-white py-4 shadow-lg flex flex-wrap rounded-full mx-6 lg:mx-[10rem] mt-4 mb-8 border border-orange-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center text-center">
            <div
              className="nav-links flex flex-wrap justify-center space-x-6"
              id="navLinks">
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
          Construction Services
        </h1>
        <div className="flex items-center">
          <GoTools size={25} className="mr-2 text-orange-200" />
          <p className="inline-block text-gray-700 font-semibold">
            Home &gt; <span className="font-bold">Construction</span>
          </p>
        </div>
      </div>

      {/* Hero Section with Image/Video Slot */}
      <section className="flex flex-col sm:px-[5rem] md:py-[5rem] md:px-[10rem] gap-6 items-center lg:flex-row">
        <div className="flex-none">
          {/* IMAGE/VIDEO SLOT 1 - Construction Project Showcase */}
          <div className="h-[50rem] w-[40rem] shrink-0 shadow-lg rounded-md border-[1rem] border-white bg-gray-200">
            <img
              className="w-full h-full rounded-md object-cover"
              src="public/WhatsApp Image 2026-01-06 at 16.46.31.jpeg"
              alt="Construction Project Showcase"
            />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-mainBlue mb-6">
            Building Dreams Into Reality
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our construction division brings architectural visions to life with
            precision, quality, and innovation. From residential developments to
            commercial complexes, we deliver exceptional construction services
            that meet international standards. Our experienced team combines
            traditional craftsmanship with modern technology to create
            structures that stand the test of time.
          </p>

          {/* IMAGE/VIDEO SLOT 2 - Construction Process */}

          <div className="my-8 h-[20rem] w-full bg-gray-200 rounded-md overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="public/WhatsApp Image 2026-01-06 at 16.46.36.jpeg"
              alt="Construction Process"
            />
          </div>

          <h3 className="text-xl font-semibold text-mainBlue mb-4">
            Our Construction Expertise
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              Custom residential and commercial construction
            </li>
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              Renovation and remodeling services
            </li>
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              Project management and supervision
            </li>
            <li className="flex items-center">
              <span className="text-newBlue mr-3">•</span>
              Quality control and safety compliance
            </li>
          </ul>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="px-6 bg-customWhite lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">
          Our Construction Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-md p-6">
            {/* IMAGE SLOT */}
            <div className="h-40 w-full bg-gray-200 rounded-md mb-4 overflow-hidden">
              <p className="w-full h-full text-gray-500 object-contain">
                <img
                  src="public/WhatsApp Image 2026-01-06 at 16.46.40.jpeg"
                  alt=""
                />
              </p>
            </div>
            <h3 className="text-lg font-bold mb-2">Residential Construction</h3>
            <p className="text-gray-600 text-sm mb-3">
              Custom homes, apartments, and housing developments
            </p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Custom home design & build</li>
              <li>• Multi-unit residential complexes</li>
              <li>• Luxury villa construction</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-lg rounded-md p-6">
            {/* IMAGE SLOT */}
            <div className="h-40 w-full bg-gray-200 rounded-md mb-4 overflow-hidden">
              <p className="text-gray-500">
                <img
                  src="public/WhatsApp Image 2026-01-06 at 16.46.37.jpeg"
                  alt=""
                />
              </p>
            </div>
            <h3 className="text-lg font-bold mb-2">Commercial Construction</h3>
            <p className="text-gray-600 text-sm mb-3">
              Office buildings, retail spaces, and industrial facilities
            </p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Office building construction</li>
              <li>• Retail and shopping centers</li>
              <li>• Warehouse and industrial facilities</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-lg rounded-md p-6">
            {/* IMAGE SLOT */}
            <div className="h-40 w-full bg-gray-200 rounded-md mb-4 overflow-hidden">
              <p className="text-gray-500">
                <img
                  src="public/WhatsApp Image 2026-01-06 at 16.46.36.jpeg"
                  alt=""
                />
              </p>
            </div>
            <h3 className="text-lg font-bold mb-2">Renovation & Remodeling</h3>
            <p className="text-gray-600 text-sm mb-3">
              Transform existing spaces with expert renovation services
            </p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Interior and exterior renovation</li>
              <li>• Space optimization and redesign</li>
              <li>• Modernization and upgrades</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* IMAGE SLOT */}
            <div className="h-56 w-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">CONSTRUCTION PROJECT IMAGE 1</p>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    Luxury Residential Complex
                  </h3>
                  <p className="text-gray-600 text-sm">Lekki, Lagos</p>
                </div>
                <div className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                  COMPLETED
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Type:</span> Residential
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Year:</span> 2024
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                A 24-unit luxury residential complex featuring modern amenities,
                green spaces, and sustainable design elements.
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-newBlue text-white py-2 rounded hover:bg-blue-800 transition-colors">
                  View Gallery
                </button>
                <button className="flex-1 border border-newBlue text-newBlue py-2 rounded hover:bg-blue-50 transition-colors">
                  Project Details
                </button>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* IMAGE SLOT */}
            <div className="h-56 w-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">CONSTRUCTION PROJECT IMAGE 2</p>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    Commercial Office Tower
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Victoria Island, Lagos
                  </p>
                </div>
                <div className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-xs font-semibold">
                  IN PROGRESS
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Type:</span> Commercial
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Est. Completion:</span> Q4
                  2024
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                A 15-story commercial office tower with advanced infrastructure,
                smart building features, and premium office spaces.
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-newBlue text-white py-2 rounded hover:bg-blue-800 transition-colors">
                  View Progress
                </button>
                <button className="flex-1 border border-newBlue text-newBlue py-2 rounded hover:bg-blue-50 transition-colors">
                  Project Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="px-6 bg-customWhite lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">
          Our Construction Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="text-center">
            <div className="h-20 w-20 bg-newBlue rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-xl font-bold">1</span>
            </div>
            <h3 className="font-bold mb-2">Consultation</h3>
            <p className="text-gray-600 text-sm">
              Initial project assessment and requirements gathering
            </p>
          </div>
          <div className="text-center">
            <div className="h-20 w-20 bg-newBlue rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-xl font-bold">2</span>
            </div>
            <h3 className="font-bold mb-2">Design</h3>
            <p className="text-gray-600 text-sm">
              Architectural planning and engineering design
            </p>
          </div>
          <div className="text-center">
            <div className="h-20 w-20 bg-newBlue rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-xl font-bold">3</span>
            </div>
            <h3 className="font-bold mb-2">Permitting</h3>
            <p className="text-gray-600 text-sm">
              Securing necessary permits and approvals
            </p>
          </div>
          <div className="text-center">
            <div className="h-20 w-20 bg-newBlue rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-xl font-bold">4</span>
            </div>
            <h3 className="font-bold mb-2">Construction</h3>
            <p className="text-gray-600 text-sm">
              Building and project execution
            </p>
          </div>
          <div className="text-center">
            <div className="h-20 w-20 bg-newBlue rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-xl font-bold">5</span>
            </div>
            <h3 className="font-bold mb-2">Handover</h3>
            <p className="text-gray-600 text-sm">
              Final inspection and project delivery
            </p>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="px-6 lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">
          Quality & Safety Standards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="h-20 w-20 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-mainBlue text-2xl">🏆</span>
            </div>
            <h3 className="font-bold mb-2">Premium Materials</h3>
            <p className="text-gray-600 text-sm">
              Only high-quality building materials and finishes
            </p>
          </div>
          <div className="text-center">
            <div className="h-20 w-20 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-mainBlue text-2xl">🛡️</span>
            </div>
            <h3 className="font-bold mb-2">Safety First</h3>
            <p className="text-gray-600 text-sm">
              Strict adherence to safety protocols and regulations
            </p>
          </div>
          <div className="text-center">
            <div className="h-20 w-20 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-mainBlue text-2xl">⏱️</span>
            </div>
            <h3 className="font-bold mb-2">Timely Delivery</h3>
            <p className="text-gray-600 text-sm">
              Projects completed on schedule with quality assurance
            </p>
          </div>
          <div className="text-center">
            <div className="h-20 w-20 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-mainBlue text-2xl">🌱</span>
            </div>
            <h3 className="font-bold mb-2">Sustainable Building</h3>
            <p className="text-gray-600 text-sm">
              Eco-friendly construction practices and materials
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 bg-customWhite lg:px-[10rem] py-12">
        <h2 className="text-3xl font-bold text-mainBlue mb-8 text-center">
          Our Expert Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <div className="bg-white shadow-lg rounded-md p-6 text-center">
            {/* IMAGE SLOT */}
            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <p className="text-gray-500">TEAM MEMBER 1</p>
            </div>
            <h3 className="text-lg font-bold mb-1">Architectural Lead</h3>
            <p className="text-gray-600 text-sm mb-2">15+ years experience</p>
            <p className="text-gray-600 text-xs">
              Expert in modern architectural design and sustainable building
              solutions
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white shadow-lg rounded-md p-6 text-center">
            {/* IMAGE SLOT */}
            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <p className="text-gray-500">TEAM MEMBER 2</p>
            </div>
            <h3 className="text-lg font-bold mb-1">Project Manager</h3>
            <p className="text-gray-600 text-sm mb-2">20+ years experience</p>
            <p className="text-gray-600 text-xs">
              Specializes in large-scale project coordination and delivery
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white shadow-lg rounded-md p-6 text-center">
            {/* IMAGE SLOT */}
            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <p className="text-gray-500">TEAM MEMBER 3</p>
            </div>
            <h3 className="text-lg font-bold mb-1">Structural Engineer</h3>
            <p className="text-gray-600 text-sm mb-2">12+ years experience</p>
            <p className="text-gray-600 text-xs">
              Expert in structural analysis and engineering solutions
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section with Video Slot */}
      <section className="px-6 lg:px-[10rem] py-12 bg-mainBlue">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Let's Build Your Vision Together
          </h2>
          <p className="mb-8">
            Transform your ideas into reality with our expert construction
            services
          </p>

          {/* VIDEO SLOT */}
          <div className="max-w-4xl mx-auto h-96 bg-gray-800 rounded-md mb-8 overflow-hidden">
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop>
              <source
                src="/WhatsApp Video 2026-01-06 at 16.46.58.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="flex gap-4 justify-center">
            <button className="bg-orange-200 text-mainBlue px-8 py-3 rounded-full font-semibold hover:bg-orange-300 transition-colors">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-mainBlue transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
