import React from "react";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGit,
  FaFileDownload,
  FaGithub,
} from "react-icons/fa";
import {
  SiChakraui,
  SiTailwindcss,
  SiTableau,
  SiVite,
  SiJenkins,
  SiRedhat,
} from "react-icons/si";
import { FaLinkedin, FaGlobe } from "react-icons/fa"; // Import LinkedIn and Globe icons

function Home() {
  // Function to handle the resume download action
  function handleDownloadResume() {
    const fileUrl = "/assets/AaronNader2024.pdf";
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "AaronNader2024.pdf";
    anchor.click();
  }

  return (
    <div className="flex flex-col items-center justify-center text-center py-8 px-6 min-h-screen bg-white dark:bg-stone-900">
      {/* Header */}
      <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-6 font-semibold">
        Software Engineer | Full-Stack Developer | Tech Enthusiast
      </p>
      {/* Profile Image */}
      <img
        src="/assets/aaron.jpg"
        alt="Profile"
        className="rounded-full w-32 h-32 border-4 border-gray-900 dark:border-white shadow-2xl mb-6"
      />
      {/* Social Media Links Section */}
      <div className="flex items-center space-x-6 mb-6">
        {/* Download Resume Button with Tailwind Tooltip */}
        <div className="relative group mt-1">
          <button
            type="button"
            onClick={handleDownloadResume}
            className="text-black dark:text-white hover:text-purple-600 transition-colors duration-300"
          >
            <FaFileDownload size={20} className="mr-2" />
          </button>
          {/* Tooltip */}
          <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Download Resume
          </span>
        </div>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/aaron-nader-1a6073238/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black dark:text-white hover:text-purple-600 transition-colors duration-300"
        >
          <FaLinkedin size={32} />
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/AaronNader96"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black dark:text-white hover:text-purple-600 transition-colors duration-300"
        >
          <FaGithub size={32} />
        </a>

        {/* Business Website Icon */}
        <a
          href="https://immaculateheart.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black dark:text-white hover:text-purple-600 transition-colors duration-300"
        >
          <FaGlobe size={32} />
        </a>
      </div>

      {/* About Section */}
      <div className="max-w-3xl mx-auto mb-12 space-y-6">
        <p className="text-lg text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
          Hey there! I’m Aaron Nader. I’ve been working as a Software Engineer
          for quite a while, diving deep into both front-end and back-end
          development. I’m passionate about building smooth, user-friendly
          interfaces with React and creating solid, reliable back-end systems
          using Node.js.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
          I’m all about writing clean, efficient code, whether I’m building
          intuitive UIs or optimizing server-side performance. I’ve got a
          full-stack background and always stay curious, eager to pick up new
          technologies and improve my skills along the way.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
          When I’m not coding, you can find me staying active and focused on my
          fitness and mental health. I’m also the founder of{" "}
          <span className="text-purple-600 font-bold">
            Immaculate Heart Tech
          </span>
          , where I get to combine my love for tech with my passion for creating
          meaningful, innovative solutions.
        </p>
      </div>
      {/* Skill Set Section */}
      <div className="w-full bg-white dark:bg-stone-900 text-gray-900 dark:text-white py-8 px-6 mb-12 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">
          My Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Front-End Skills */}
          <div className="text-center">
            <FaReact size={48} className="text-blue-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">React JS</h3>
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded">
              <div className="bg-blue-500 h-2 rounded w-80%"></div>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              UI Development
            </span>
          </div>

          <div className="text-center">
            <SiChakraui size={48} className="text-teal-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Chakra UI</h3>
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded">
              <div className="bg-teal-500 h-2 rounded w-70%"></div>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Component Library
            </span>
          </div>

          <div className="text-center">
            <SiTailwindcss size={48} className="text-indigo-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Tailwind CSS</h3>
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded">
              <div className="bg-indigo-500 h-2 rounded w-85%"></div>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              CSS Framework
            </span>
          </div>

          {/* Back-End Skills */}
          <div className="text-center">
            <FaNodeJs size={48} className="text-green-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Node JS</h3>
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded">
              <div className="bg-green-500 h-2 rounded w-75%"></div>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Server-Side Development
            </span>
          </div>

          <div className="text-center">
            <FaDatabase size={48} className="text-purple-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">SQL</h3>
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded">
              <div className="bg-purple-500 h-2 rounded w-90%"></div>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Database Management
            </span>
          </div>

          <div className="text-center">
            <SiVite size={48} className="text-gray-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Vite</h3>
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded">
              <div className="bg-gray-500 h-2 rounded w-80%"></div>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Build Tooling
            </span>
          </div>

          {/* Cloud/DevOps Skills */}
          <div className="text-center">
            <SiRedhat size={48} className="text-red-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">OCP RedHat</h3>
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded">
              <div className="bg-red-500 h-2 rounded w-65%"></div>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Containerization
            </span>
          </div>

          <div className="text-center">
            <SiJenkins size={48} className="text-orange-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Jenkins</h3>
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded">
              <div className="bg-orange-500 h-2 rounded w-60%"></div>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              CI/CD Pipelines
            </span>
          </div>

          {/* Other Technologies */}
          <div className="text-center">
            <FaGit size={48} className="text-yellow-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Git</h3>
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded">
              <div className="bg-yellow-500 h-2 rounded w-95%"></div>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Version Control
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
