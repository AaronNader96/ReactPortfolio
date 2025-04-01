import React from "react";
import timelineData from "./data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";
import {
  FaLaptopCode,
  FaUniversity,
  FaCertificate,
  FaTruck,
  FaStore,
  FaRegCreditCard,
  FaRoute,
  FaUserTie,
  FaShoppingCart,
  FaCartArrowDown,
} from "react-icons/fa"; // Add icons

function Timeline() {
  return (
    <div className="flex flex-col items-center my-20 px-4">
      {/* Title Section */}
      <div className="w-full text-center mb-12">
        <Title>Timeline</Title>
      </div>

      {/* Timeline container */}
      <div className="w-full md:w-10/12 lg:w-8/12 space-y-12">
        {timelineData.map((item, index) => (
          <div
            key={item.year}
            className="bg-white dark:bg-stone-900 shadow-xl rounded-lg p-6 border border-stone-200 dark:border-stone-700 transition duration-300 ease-in-out hover:shadow-2xl hover:bg-stone-100 dark:hover:bg-stone-800"
          >
            {/* Render TimelineItem with icon and other features */}
            <TimelineItem
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
              icon={item.icon} // Pass icon prop to TimelineItem
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
