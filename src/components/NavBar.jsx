import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  // State to toggle mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-stone-900 shadow-lg">
      {/* Container for the navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flexbox container for positioning */}
        <div className="relative flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="text-xl font-semibold text-gray-900 dark:text-white">
            <Link to="/">Aaron Nader Portfolio</Link>
          </div>

          {/* Desktop Menu: Hidden on mobile, shown on larger screens */}
          <div className="hidden sm:flex space-x-6">
            <Link
              to="/"
              className="text-gray-900 dark:text-white text-lg font-semibold px-4 py-2 rounded-md transition duration-300 transform hover:bg-violet-300 dark:hover:bg-violet-600 hover:scale-105"
            >
              Home
            </Link>
            <Link
              to="/Timeline"
              className="text-gray-900 dark:text-white text-lg font-semibold px-4 py-2 rounded-md transition duration-300 transform hover:bg-violet-300 dark:hover:bg-violet-600 hover:scale-105"
            >
              Timeline
            </Link>
            <Link
              to="/portfolio"
              className="text-gray-900 dark:text-white text-lg font-semibold px-4 py-2 rounded-md transition duration-300 transform hover:bg-violet-300 dark:hover:bg-violet-600 hover:scale-105"
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="text-gray-900 dark:text-white text-lg font-semibold px-4 py-2 rounded-md transition duration-300 transform hover:bg-violet-300 dark:hover:bg-violet-600 hover:scale-105"
            >
              Contact
            </Link>
            <Link
              to="/stats"
              className="text-gray-900 dark:text-white text-lg font-semibold px-4 py-2 rounded-md transition duration-300 transform hover:bg-violet-300 dark:hover:bg-violet-600 hover:scale-105"
            >
              Statistics
            </Link>
            <Link
              to="/offers"
              className="text-gray-900 dark:text-white text-lg font-semibold px-4 py-2 rounded-md transition duration-300 transform hover:bg-violet-300 dark:hover:bg-violet-600 hover:scale-105"
            >
              Immaculate Tech
            </Link>
          </div>

          {/* Mobile Menu Button (hidden on larger screens) */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu: Shown when isOpen is true (only on small screens) */}
      {isOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-900 py-4 px-4 rounded-md shadow-lg">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="block text-gray-900 dark:text-white text-lg font-semibold px-4 py-2 rounded-md transition duration-300 transform hover:bg-violet-300 dark:hover:bg-violet-600 hover:scale-105"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Timeline"
                className="block text-gray-900 dark:text-white text-lg font-semibold px-4 py-2 rounded-md transition duration-300 transform hover:bg-violet-300 dark:hover:bg-violet-600 hover:scale-105"
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                to="/offers"
                className="block text-gray-900 dark:text-white text-lg font-semibold px-4 py-2 rounded-md transition duration-300 transform hover:bg-violet-300 dark:hover:bg-violet-600 hover:scale-105"
              >
                Services at IHT
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="block text-gray-900 dark:text-white text-lg font-semibold px-4 py-2 rounded-md transition duration-300 transform hover:bg-violet-300 dark:hover:bg-violet-600 hover:scale-105"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-gray-900 dark:text-white text-lg font-semibold px-4 py-2 rounded-md transition duration-300 transform hover:bg-violet-300 dark:hover:bg-violet-600 hover:scale-105"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/stats"
                className="block text-gray-900 dark:text-white text-lg font-semibold px-4 py-2 rounded-md transition duration-300 transform hover:bg-violet-300 dark:hover:bg-violet-600 hover:scale-105"
              >
                Statistics
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
