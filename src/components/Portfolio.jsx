import React from "react";
import portfolio from "./data/portfolio";
import PortfolioItem from "./PortfolioItem";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-2 pb-6">
      <div className="text-center">
        <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
          Portfolio Showcase
        </h1>
        <Link
          to="https://github.com/AaronNader96"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Visit GitHub
        </Link>
      </div>

      <br />

      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
