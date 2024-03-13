import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Stats = () => {
  const [counter, setCounter] = useState(null);
  const [repoCount, setRepoCount] = useState(null);
  const currentCity = "Herriman, UT";

  const [linesOfCode, setLinesOfCode] = useState(null);
  const [commitsCount, setCommitsCount] = useState(null);
  const [contributorsCount, setContributorsCount] = useState(null);
  const [languagesUsed, setLanguagesUsed] = useState(null);

  useEffect(() => {
    // Fetch lines of code and commits count from the GitHub REST API
    axios
      .get(
        "https://api.github.com/repos/AaronNader96/ReactPortfolio/stats/code_frequency"
      )
      .then((response) => {
        const codeFrequency = response.data;
        const linesAdded = codeFrequency.reduce(
          (total, [_, additions]) => total + additions,
          0
        );
        setLinesOfCode(linesAdded);
      })
      .catch((error) => {
        console.error("Error fetching lines of code:", error);
      });

    axios
      .get("https://api.github.com/repos/AaronNader96/ReactPortfolio/commits")
      .then((response) => {
        const commits = response.data;
        setCommitsCount(commits.length);
      })
      .catch((error) => {
        console.error("Error fetching commits count:", error);
      });

    axios
      .get(
        "https://api.github.com/repos/AaronNader96/ReactPortfolio/contributors"
      )
      .then((response) => {
        const contributors = response.data;
        setContributorsCount(contributors.length);
      })
      .catch((error) => {
        console.error("Error fetching contributors count:", error);
      });

    axios
      .get("https://api.github.com/repos/AaronNader96/ReactPortfolio/languages")
      .then((response) => {
        const languages = response.data;
        setLanguagesUsed(Object.keys(languages));
      })
      .catch((error) => {
        console.error("Error fetching languages used:", error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = moment();
      const creationDate = moment("2023-04-18");
      const duration = moment.duration(currentDate.diff(creationDate));
      const days = Math.floor(duration.asDays());
      const seconds = Math.floor(duration.asSeconds() % 60);

      setCounter({ days, seconds });
    }, 1000);

    // Fetch GitHub repository count
    axios
      .get("https://api.github.com/users/AaronNader96")
      .then((response) => {
        const { public_repos } = response.data;
        setRepoCount(public_repos);
      })
      .catch((error) => {
        console.error("Error fetching repository count:", error);
      });

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Cloned from a different project.
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date("1996-04-23");
    setAge(((Date.now() - birthTime) / divisor).toFixed(9));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="container mx-auto p-4 mb-4">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-4 md:mb-6 font-bold text-left">
        Some cool statistics about my website :)
      </h1>
      <p className="text-center text-gray-500 mb-2">
        Real-time data powered by React & GitHub API calls. You can view the
        source code{" "}
        <a
          href="https://github.com/AaronNader96/ReactPortfolio/blob/master/src/components/Stats.jsx"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black"
        >
          here
        </a>
        .
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg border border-black dark:border-white hover:bg-orange-500 hover:text-black dark:hover:text-white transition duration-300 p-4">
          <p className="text-center md:text-left">
            Current City: {currentCity}
          </p>
        </div>
        <div className="rounded-lg border border-black dark:border-white hover:bg-orange-500 hover:text-black dark:hover:text-white transition duration-300 p-4">
          <p className="text-center md:text-left">
            Age: {age ? age : "Loading..."}
          </p>
        </div>
        <div className="rounded-lg border border-black dark:border-white hover:bg-orange-500 hover:text-black dark:hover:text-white transition duration-300 p-4">
          <p className="text-center md:text-left">
            Website created:{" "}
            {counter
              ? `${counter.days} days, ${counter.seconds} seconds`
              : "Loading..."}
          </p>
        </div>
        <div className="rounded-lg border border-black dark:border-white hover:bg-orange-500 hover:text-black dark:hover:text-white transition duration-300 p-4">
          <p className="text-center md:text-left">
            GitHub Repository Count:{" "}
            {repoCount ? formatNumber(repoCount) : "Loading..."}
          </p>
        </div>
        <div className="rounded-lg border border-black dark:border-white hover:bg-orange-500 hover:text-black dark:hover:text-white transition duration-300 p-4">
          <p className="text-center md:text-left">
            Lines of Code That is Powering this Website:{" "}
            {linesOfCode !== null ? formatNumber(linesOfCode) : "Loading..."}
          </p>
        </div>
        <div className="rounded-lg border border-black dark:border-white hover:bg-orange-500 hover:text-black dark:hover:text-white transition duration-300 p-4">
          <p className="text-center md:text-left">
            Commits Count:{" "}
            {commitsCount !== null ? formatNumber(commitsCount) : "Loading..."}
          </p>
        </div>
        <div className="rounded-lg border border-black dark:border-white hover:bg-orange-500 hover:text-black dark:hover:text-white transition duration-300 p-4">
          <p className="text-center md:text-left">
            Contributors Count:{" "}
            {contributorsCount !== null
              ? formatNumber(contributorsCount)
              : "Loading..."}
          </p>
        </div>
        <div className="rounded-lg border border-black dark:border-white hover:bg-orange-500 hover:text-black dark:hover:text-white transition duration-300 p-4">
          <p className="text-center md:text-left">
            Languages Used:{" "}
            {languagesUsed !== null ? languagesUsed.join(", ") : "Loading..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
