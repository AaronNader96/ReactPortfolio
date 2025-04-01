import React from "react";
import portfolio from "./data/portfolio";
import PortfolioItem from "./PortfolioItem";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-6">
      <header className="mb-6">
        <h1 className="text-4xl md:text-7xl font-bold dark:text-white mb-3">
          Portfolio Showcase
        </h1>
        <Link
          to="https://github.com/AaronNader96"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Visit GitHub
        </Link>
      </header>

      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((project) => (
            <PortfolioItem
              key={project.id}
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
