import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = `fixed w-full top-0 z-50 transition-all duration-300 ${
    scrolled
      ? "bg-white/90 dark:bg-stone-900/90 backdrop-blur-md shadow-lg"
      : "bg-white dark:bg-stone-900"
  }`;

  const linkClasses =
    "relative text-gray-900 dark:text-white text-lg font-semibold px-4 py-2 rounded-md transition duration-300 hover:text-violet-600 dark:hover:text-violet-400";

  const activeLinkClasses =
    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-violet-600 dark:after:bg-violet-400";

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold text-gray-900 dark:text-white"
          >
            <Link to="/">Aaron Nader Portfolio</Link>
          </motion.div>

          <div className="hidden sm:flex space-x-6">
            {[
              { path: "/", label: "Home" },
              { path: "/Timeline", label: "Timeline" },
              { path: "/portfolio", label: "Portfolio" },
              { path: "/contact", label: "Contact" },
              { path: "/stats", label: "Statistics" },
              { path: "/offers", label: "Immaculate Tech" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${linkClasses} ${
                  location.pathname === item.path ? activeLinkClasses : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-gray-900 dark:text-white focus:outline-none"
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-around"
            >
              <span
                className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </motion.div>
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`sm:hidden overflow-hidden bg-white dark:bg-stone-900 shadow-lg`}
      >
        {isOpen && (
          <div className="px-4 py-2">
            {[
              { path: "/", label: "Home" },
              { path: "/Timeline", label: "Career" },
              { path: "/offers", label: "Services at IHT" },
              { path: "/portfolio", label: "Portfolio" },
              { path: "/contact", label: "Contact" },
              { path: "/stats", label: "Statistics" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-gray-900 dark:text-white text-lg font-semibold transition duration-300 hover:text-violet-600 dark:hover:text-violet-400 ${
                  location.pathname === item.path ? "text-violet-600 dark:text-violet-400" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </motion.div>
    </nav>
  );
}

export default NavBar;