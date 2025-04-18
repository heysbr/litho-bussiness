// components/Header.js
"use client"
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import { useState } from "react";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="bg-white shadow-md">
      {/* Top bar */}
      <div className="flex justify-between items-center px-4 lg:px-8 py-2 border-b border-gray-200 text-sm">
        <div className="flex items-center space-x-4">
          <FiFacebook className="text-gray-500 hover:text-gray-700" />
          <FiTwitter className="text-gray-500 hover:text-gray-700" />
          <FiInstagram className="text-gray-500 hover:text-gray-700" />
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-gray-600">
            <HiOutlinePhone className="mr-1" />
            <span>022 8899900</span>
          </div>
          <div className="flex items-center text-gray-600">
            <HiOutlineLocationMarker className="mr-1" />
            <span>401 Broadway, 24th Floor, San Francisco</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-between items-center px-4 lg:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.svg"
            alt="Litho Logo"
            className="h-8 w-8 object-cover"
          />
          
          <span className="text-xl font-bold text-gray-800">LITHO</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 relative">
          {[
            { label: "Home", dropdown: ["Home 1", "Home 2", "Home 3"] },
            { label: "Pages", dropdown: ["About Us", "Contact Us", "Services"] },
            { label: "Portfolio", dropdown: ["Portfolio 1", "Portfolio 2"] },
            { label: "Elements", dropdown: ["Buttons", "Cards", "Tables"] },
            { label: "Features", dropdown: [] },
            { label: "Blog", dropdown: ["Blog 1", "Blog 2"] },
            { label: "Shop", dropdown: ["Shop 1", "Shop 2"] },
          ].map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900"
              >
                {item.label}
              </a>
              {item.dropdown.length > 0 && (
                <div
                  className={`absolute left-0 top-10 bg-white shadow-lg border border-gray-200 rounded-lg p-2 ${
                    activeDropdown === index ? "block" : "hidden"
                  }`}
                >
                  {item.dropdown.map((submenu, subIndex) => (
                    <a
                      key={subIndex}
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
                    >
                      {submenu}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button>
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-600 hover:text-gray-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 15.75L19.5 19.5m-4.75-9.25a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </button>
          <button>
            <span className="sr-only">Language</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-600 hover:text-gray-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v18m-9-9h18"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
