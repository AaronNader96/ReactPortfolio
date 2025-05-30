import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group border-2 border-stone-900 dark:border-white rounded-md overflow-hidden transition duration-300 hover:border-orange-500 dark:hover:border-orange-500 transform hover:scale-105"
    >
      <img
        src={imgUrl}
        alt={`Screenshot of ${title} project`}
        className="w-full h-36 md:h-48 object-cover cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default PortfolioItem;
