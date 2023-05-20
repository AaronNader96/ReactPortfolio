import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Stats = () => {
  const [counter, setCounter] = useState(null);
  const [repoCount, setRepoCount] = useState(null);
  const currentCity = "West Jordan, UT";

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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Website & Personal Statistics
      </h1>
      <div className="flex flex-col items-center gap-4">
        <div className="rounded border dark:border-white hover:bg-orange-500 hover:text-black dark:hover:text-white transition duration-300">
          <p className="text-center p-4">Current City: {currentCity}</p>
        </div>
        <div className="rounded border dark:border-white hover:bg-orange-500 hover:text-black dark:hover:text-white transition duration-300">
          <p className="text-center p-4">Age: {age ? age : "Loading..."}</p>
        </div>
        <div className="rounded border dark:border-white hover:bg-orange-500 hover:text-black dark:hover:text-white transition duration-300">
          <p className="text-center p-4">
            Website created: {counter ? `${counter.days} days` : "Loading..."},
            {counter ? ` ${counter.seconds} seconds` : ""}
          </p>
        </div>
        <div className="rounded border dark:border-white hover:bg-orange-500 hover:text-black dark:hover:text-white transition duration-300">
          <p className="text-center p-4">
            GitHub Repository Count: {repoCount || "Loading..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
