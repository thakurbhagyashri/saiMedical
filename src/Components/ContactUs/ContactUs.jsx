import React from 'react';
import { FaEnvelope, FaFacebook, FaLinkedin, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-12 font-roboto">
      {/* Main Container */}
      <div className="w-full max-w-4xl text-gray-800">

        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-[#069b9b] mb-12">Contact Us</h1>

        {/* Contact Information Section */}
        <div className="space-y-12">
          {/* Company Details Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#069b9b] mb-6">Company Information</h2>
            <p className="text-lg text-gray-700 mb-2"><strong>Company Name:</strong> Shri Samarth Pharmaceuticals</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Address:</strong> 123 Pharma Street, Medic City, Healthville, 56789</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Email:</strong> <a href="mailto:info@shrisamarth.com" className="underline text-[#069b9b]">info@shrisamarth.com</a></p>
            <p className="text-lg text-gray-700"><strong>Phone:</strong> <a href="tel:+919876543210" className="underline text-[#069b9b]">+91-9876543210</a></p>
          </div>

          {/* Reach Us On Section */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#069b9b] mb-6">Reach Us On</h2>
            <div className="flex justify-around space-x-8">
              <a href="tel:+919876543210" className="p-5 bg-[#069b9b] text-white rounded-full shadow-md hover:bg-[#057f7f] transition-all">
                <FaPhone size={36} />
              </a>
              <a href="mailto:info@shrisamarth.com" className="p-5 bg-red-500 text-white rounded-full shadow-md hover:bg-red-700 transition-all">
                <FaEnvelope size={36} />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="p-5 bg-green-500 text-white rounded-full shadow-md hover:bg-green-700 transition-all">
                <FaWhatsapp size={36} />
              </a>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="text-center mt-12">
            <h2 className="text-3xl font-semibold text-[#069b9b] mb-6">Follow Us</h2>
            <div className="flex justify-center space-x-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={36} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={36} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                <FaLinkedin size={36} />
              </a>
            </div>
          </div>

          {/* Location Section */}
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-semibold text-[#069b9b] mb-6">Our Location</h2>
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509906!2d-122.42112398468165!3d37.77492967975815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d15b36eb%3A0x9e69c7f7c8abf8c7!2s123%20Pharma%20Street%2C%20San%20Francisco%2C%20CA%2094133%2C%20USA!5e0!3m2!1sen!2sin!4v1677149679677!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
     
    </div>
  );
};

export default Contact;