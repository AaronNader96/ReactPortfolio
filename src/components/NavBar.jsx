import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-center pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap justify-center sm:justify-between space-x-4">
          <li>
            <Link
              to="/"
              className="text-black dark:text-white border border-black dark:border-white rounded h-15 px-4 flex items-center justify-center hover:bg-orange-500 hover:text-black dark:hover:text-white transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Timeline"
              className="text-black dark:text-white border border-black dark:border-white rounded h-15 px-4 flex items-center justify-center hover:bg-orange-500 hover:text-black dark:hover:text-white transition duration-300"
            >
              Career
            </Link>
          </li>
          <li>
            <Link
              to="/offers"
              className="text-black dark:text-white border border-black dark:border-white rounded h-15 px-4 flex items-center justify-center hover:bg-orange-500 hover:text-black dark:hover:text-white transition duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="text-black dark:text-white border border-black dark:border-white rounded h-15 px-4 flex items-center justify-center hover:bg-orange-500 hover:text-black dark:hover:text-white transition duration-300"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-black dark:text-white border border-black dark:border-white rounded h-15 px-4 flex items-center justify-center hover:bg-orange-500 hover:text-black dark:hover:text-white transition duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/stats"
              className="text-black dark:text-white border border-black dark:border-white rounded h-15 px-4 flex items-center justify-center hover:bg-orange-500 hover:text-black dark:hover:text-white transition duration-300"
            >
              Statistics
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
