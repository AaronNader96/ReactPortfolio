import React from "react";
import { Link } from "react-router-dom";

function Home() {
  function handleDownloadResume() {
    const fileUrl = "/assets/AaronNader2024.pdf";
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "AaronNader2024.pdf";
    anchor.click();
  }

  return (
    <div className="flex items-center justify-center flex-col text-center pt-2 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Aaron Nader
      </h1>
      <p className="text-base md:text-xl mb-5 font-medium">Software Engineer</p>
      <img
        src="/assets/aaron.jpg"
        alt="Profile"
        className="rounded-full w-32 h-32 border-2 border-black dark:border-white mb-3"
      />
      <button
        type="button"
        onClick={handleDownloadResume}
        className="px-4 py-2 rounded-md bg-gray-500 border border-black dark:border-white text-black dark:text-white hover:bg-orange-500 transition-colors duration-600 mb-4"
      >
        <span>Download Resume</span>
      </button>

      <p className="max-w-xl mb-6 font-bold leading-relaxed text-gray-700 dark:text-white">
        Hi, I'm Aaron Nader, a Software Engineer skilled in both front-end and
        back-end development. I specialize in crafting dynamic and interactive
        user interfaces using React and ensuring seamless user experiences. On
        the back end, I have expertise in Node.js and Python, utilizing MSSQL
        for efficient database management.
      </p>

      <p className="max-w-xl mb-6 leading-relaxed text-gray-700 dark:text-white">
        My diverse skill set includes front-end technologies like React
        JavaScript, Tailwind CSS, and Chakra UI. I'm dedicated to full-stack
        development, with a focus on delivering robust solutions. Let's connect
        and explore how my expertise can contribute to your projects!
      </p>

      <p className="max-w-xl mb-6 leading-relaxed text-gray-700 dark:text-white">
        Beyond coding, I maintain an active lifestyle, balancing my love for
        technology with a commitment to physical and mental well-being. Check
        out my portfolio for projects developed using cutting-edge technologies.
        I'm open to feedback. Feel free to get in touch via the{" "}
        <Link to="/contact" className="text-black dark:text-white">
          Contact
        </Link>{" "}
        link.
      </p>
    </div>
  );
}

export default Home;
