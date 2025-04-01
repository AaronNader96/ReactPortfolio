import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Stats = () => {
  const [counter, setCounter] = useState(null);
  const [repoCount, setRepoCount] = useState(null);
  const [linesOfCode, setLinesOfCode] = useState(null);
  const [commitsCount, setCommitsCount] = useState(null);
  const [contributorsCount, setContributorsCount] = useState(null);
  const [languagesUsed, setLanguagesUsed] = useState(null);
  const [age, setAge] = useState(null);

  const currentCity = "Herriman, UT";

  // Format number with commas
  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Function to fetch data from the GitHub API
  const fetchGitHubData = async () => {
    try {
      const [
        repoResponse,
        codeFrequencyResponse,
        commitsResponse,
        contributorsResponse,
        languagesResponse,
      ] = await Promise.all([
        axios.get("https://api.github.com/users/AaronNader96"),
        axios.get(
          "https://api.github.com/repos/AaronNader96/ReactPortfolio/stats/code_frequency"
        ),
        axios.get(
          "https://api.github.com/repos/AaronNader96/ReactPortfolio/commits"
        ),
        axios.get(
          "https://api.github.com/repos/AaronNader96/ReactPortfolio/contributors"
        ),
        axios.get(
          "https://api.github.com/repos/AaronNader96/ReactPortfolio/languages"
        ),
      ]);

      // Set data from responses
      const { public_repos } = repoResponse.data;
      setRepoCount(public_repos);

      const codeFrequency = codeFrequencyResponse.data;
      const linesAdded = codeFrequency.reduce(
        (total, [_, additions]) => total + additions,
        0
      );
      setLinesOfCode(linesAdded);

      const commits = commitsResponse.data;
      setCommitsCount(commits.length);

      const contributors = contributorsResponse.data;
      setContributorsCount(contributors.length);

      const languages = languagesResponse.data;
      setLanguagesUsed(Object.keys(languages));
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
  };

  // Function to calculate and update age dynamically
  const calculateAge = () => {
    const birthTime = new Date("1996-04-23");
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const interval = setInterval(() => {
      setAge(((Date.now() - birthTime) / divisor).toFixed(9)); // Update every second
    }, 1000);

    return interval;
  };

  // Function to update website creation time
  const updateWebsiteAge = () => {
    const interval = setInterval(() => {
      const currentDate = moment();
      const creationDate = moment("2023-04-18");
      const duration = moment.duration(currentDate.diff(creationDate));
      const days = Math.floor(duration.asDays());
      const seconds = Math.floor(duration.asSeconds() % 60);
      setCounter({ days, seconds });
    }, 1000);

    return interval;
  };

  // Effect to fetch GitHub data and calculate age
  useEffect(() => {
    fetchGitHubData();
    const timer = updateWebsiteAge();
    const ageInterval = calculateAge();

    return () => {
      clearInterval(timer);
      clearInterval(ageInterval);
    };
  }, []);

  return (
    <div className="container mx-auto p-6 dark:bg-stone-900 dark:text-white bg-stone-50 text-black rounded-lg shadow-lg">
      <h1 className="text-5xl font-extrabold text-center mb-6 animate__animated animate__fadeInUp">
        Fun Stats About My Website 🎉
      </h1>
      <p className="text-center text-lg mb-4 animate__animated animate__fadeInUp animate__delay-1s">
        Real-time data powered by React & GitHub API calls. You can view the
        source code{" "}
        <a
          href="https://github.com/AaronNader96/ReactPortfolio/blob/master/src/components/Stats.jsx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200 hover:text-gray-400 transition duration-300"
        >
          here
        </a>
        .
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <StatCard title="Current City" value={currentCity} icon="🌍" />
        <StatCard title="Age" value={age || "Loading..."} icon="🎂" />
        <StatCard
          title="Website Created"
          value={
            counter
              ? `${counter.days} days, ${counter.seconds} seconds`
              : "Loading..."
          }
          icon="⌛"
        />
        <StatCard
          title="GitHub Repo Count"
          value={repoCount ? formatNumber(repoCount) : "Loading..."}
          icon="📦"
        />
        <StatCard
          title="Lines of Code"
          value={
            linesOfCode !== null ? formatNumber(linesOfCode) : "Loading..."
          }
          icon="💻"
        />
        <StatCard
          title="Commits Count"
          value={
            commitsCount !== null ? formatNumber(commitsCount) : "Loading..."
          }
          icon="✏️"
        />
        <StatCard
          title="Contributors Count"
          value={
            contributorsCount !== null
              ? formatNumber(contributorsCount)
              : "Loading..."
          }
          icon="🤝"
        />
        <StatCard
          title="Languages Used"
          value={languagesUsed ? languagesUsed.join(", ") : "Loading..."}
          icon="🗣️"
        />
      </div>
    </div>
  );
};

// Component for displaying each statistic card
const StatCard = ({ title, value, icon }) => (
  <div className="rounded-lg dark:bg-stone-900 dark:text-white bg-white text-black p-6 shadow-xl hover:scale-105 transform transition duration-300">
    <div className="flex items-center justify-between mb-4">
      <div className="text-2xl font-bold">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-lg">{value}</p>
  </div>
);

export default Stats;
