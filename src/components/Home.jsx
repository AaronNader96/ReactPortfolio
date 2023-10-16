import React from "react";
import { Link } from "react-router-dom";

function Home() {
  function handleDownloadResume() {
    const fileUrl = "/assets/resume.pdf";
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "resume.pdf";
    anchor.click();
  }

  return (
    <div className="flex items-center justify-center flex-col text-center pt-2 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Aaron Nader
      </h1>
      <p className="text-base md:text-xl mb-5 font-medium">Software Engineer</p>
      <img
        src="https://media.licdn.com/dms/image/D5603AQH9oA1pTLPYwA/profile-displayphoto-shrink_800_800/0/1694052389901?e=1703116800&v=beta&t=xbzStMDKcq3VFUljKAnLRBsx1MXq-cj15a3v0LMvXRQ"
        alt="Profile"
        className="rounded-full w-32 h-32 border-2 border-black dark:border-white mb-3"
      />
      <button
        type="button"
        onClick={handleDownloadResume}
        className="px-4 py-2 rounded-md bg-gray-500 border border-black dark:border-white text-black dark:text-white hover:bg-orange-600 transition-colors duration-300 mb-4"
      >
        <span>Download Resume</span>
      </button>

      <p className="max-w-xl mb-6 font-bold leading-relaxed text-gray-700 dark:text-white">
        Greetings! I'm Aaron Nader, an enthusiastic software engineer with a
        deep passion for web development and cutting-edge technologies. My
        expertise revolves around creating exceptional websites and web
        applications using a diverse set of tools and frameworks. I specialize
        in <span className="text-orange-500">React</span>,{" "}
        <span className="text-orange-500">MSSQL</span>, and{" "}
        <span className="text-orange-500">JavaScript</span>. With React, I craft
        dynamic and interactive user interfaces, delivering seamless and
        engaging user experiences. My strong proficiency in TypeScript ensures
        scalable and maintainable code, while CSS frameworks like{" "}
        <span className="text-orange-500">Tailwind CSS</span> and{" "}
        <span className="text-orange-500">Chakra UI</span> enable me to create
        visually appealing and responsive designs. MSSQL is instrumental in my
        work, facilitating efficient data storage and management for reliable
        database operations. I'm dedicated to delivering top-tier web solutions
        while staying abreast of the latest industry trends, making me an ideal
        partner for your next web development project.
      </p>

      <p className="max-w-xl mb-6 leading-relaxed text-gray-700 dark:text-white">
        Beyond coding, I thrive in an active and healthy lifestyle. Whether it's
        hitting the gym or exploring nature through hikes, I prioritize
        maintaining my physical and mental well-being. My family, particularly
        my supportive wife, Caroline, has been an integral part of my
        professional journey, propelling me towards achieving my goals. I'm
        excited to share my portfolio, which showcases projects developed using
        cutting-edge technologies like{" "}
        <span className="text-orange-500">Vite</span>,{" "}
        <span className="text-orange-500">React</span>, and{" "}
        <span className="text-orange-500">Tailwind CSS</span>. I welcome
        feedback and advice on the design and functionality of my portfolio.
        Feel free to get in touch by clicking on the{" "}
        <Link to="/contact" className="text-orange-500">
          Contact
        </Link>{" "}
        link, and let's explore opportunities to collaborate!
      </p>
    </div>
  );
}

export default Home;
