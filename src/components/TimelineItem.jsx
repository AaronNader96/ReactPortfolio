import React, { useState } from "react";
import {
  FaBriefcase,
  FaUniversity,
  FaCertificate,
  FaTruck,
  FaStore,
  FaRegCreditCard,
  FaRoute,
  FaUserTie,
  FaShoppingCart,
  FaCartArrowDown,
  FaLaptopCode,
} from "react-icons/fa"; // Icons for different timeline items

function TimelineItem({ year, title, duration, details, icon }) {
  const [isExpanded, setIsExpanded] = useState(false); // State for toggling details

  // Decide which icon to display based on the type of event
  const renderIcon = () => {
    switch (icon) {
      case "software-engineer":
        return (
          <FaLaptopCode className="text-2xl text-stone-900 dark:text-white" />
        );
      case "degree":
        return (
          <FaUniversity className="text-2xl text-stone-900 dark:text-white" />
        );
      case "certification":
        return (
          <FaCertificate className="text-2xl text-stone-900 dark:text-white" />
        );
      case "amazon":
        return <FaTruck className="text-2xl text-stone-900 dark:text-white" />;
      case "store-manager":
        return <FaStore className="text-2xl text-stone-900 dark:text-white" />;
      case "account-manager":
        return (
          <FaRegCreditCard className="text-2xl text-stone-900 dark:text-white" />
        );
      case "route-sales":
        return <FaRoute className="text-2xl text-stone-900 dark:text-white" />;
      case "management":
        return (
          <FaUserTie className="text-2xl text-stone-900 dark:text-white" />
        );
      case "cart-attendant":
        return (
          <FaShoppingCart className="text-2xl text-stone-900 dark:text-white" />
        );
      case "cart":
        return (
          <FaCartArrowDown className="text-2xl text-stone-900 dark:text-white" />
        );
      default:
        return (
          <FaBriefcase className="text-2xl text-stone-900 dark:text-white" />
        );
    }
  };

  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700 transition-all duration-500 ease-in-out">
      <li className="mb-10 ml-4 group relative">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />

        {/* Tooltip on hover */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-stone-900 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ width: "200px" }}
        >
          {details}
        </div>

        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          {/* Sticky Year Indicator */}
          <span className="inline-block px-3 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md sticky top-0">
            {year}
          </span>

          {/* Title */}
          <h3 className="text-lg font-semibold text-stone-900 dark:text-white flex items-center gap-2">
            {/* Icon next to title */}
            {renderIcon()}
            {title}
          </h3>

          {/* Duration */}
          <div className="my-1 text-sm font-normal leading-none text-stone-500 dark:text-stone-400">
            {duration}
          </div>
        </p>

        {/* Expand/Collapse Button */}
        <button
          className="my-2 text-base font-normal text-stone-600 dark:text-stone-400 hover:underline"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>

        {/* Expandable Details */}
        {isExpanded && (
          <p className="text-base font-normal text-stone-600 dark:text-stone-400 mt-2">
            {details}
          </p>
        )}
      </li>
    </ol>
  );
}

export default TimelineItem;
