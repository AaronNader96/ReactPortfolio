import React from "react";
import { Link } from "react-router-dom";

function Home() {
  function handleDownloadResume() {
    const fileUrl = "/assets/resume.pdf"; // Replace with the actual file URL
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "resume.pdf"; // Specify the desired file name
    anchor.click();
  }

  return (
    <div className="flex items-center justify-center flex-col text-center pt-2 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Aaron Nader
      </h1>

      <p className="text-base md:text-xl mb-7 font-medium">Software Engineer</p>

      <button
        type="button"
        onClick={handleDownloadResume}
        className="px-4 py-2 rounded-md bg-gray-500 border border-black dark:border-white text-black dark:text-white hover:bg-orange-600 transition-colors duration-300 mb-4"
      >
        <span>Download Resume</span>
      </button>

      <p className="max-w-xl mb-6 font-bold leading-relaxed text-gray-700 dark:text-white">
        Hey there, I'm Aaron Nader, a{" "}
        <span className="text-orange-500">web developer</span> specializing in{" "}
        <span className="text-orange-500">React</span>,{" "}
        <span className="text-orange-500">TypeScript</span>,{" "}
        <span className="text-orange-500">MSSQL</span>, and{" "}
        <span className="text-orange-500">JavaScript</span>. I have a strong
        passion for crafting exceptional websites and web applications. With
        React, I build dynamic and interactive user interfaces, providing
        seamless user experiences. TypeScript helps me write scalable and
        maintainable code, ensuring robustness and minimizing errors. MSSQL
        enables efficient data storage and management, ensuring reliable
        database operations. I also have experience with JavaScript and CSS
        frameworks like <span className="text-orange-500">Bootstrap</span>,{" "}
        <span className="text-orange-500">Tailwind CSS</span>, and{" "}
        <span className="text-orange-500">Chakra UI</span>, allowing me to
        create visually appealing and responsive designs.
      </p>
      <p className="max-w-xl mb-6 leading-relaxed text-gray-700 dark:text-white">
        When I'm not coding, I enjoy staying active and maintaining a healthy
        lifestyle. Whether it's hitting the gym or exploring nature through
        hikes, I believe in taking care of my physical and mental well-being. My
        family, especially my supportive wife Caroline, has played a crucial
        role in my professional journey, helping me achieve my goals.
      </p>
      <p className="max-w-xl mb-6 leading-relaxed text-gray-700 dark:text-white">
        I'm excited to share my portfolio, where I showcase projects developed
        using cutting-edge technologies like{" "}
        <span className="text-orange-500">Vite</span>,{" "}
        <span className="text-orange-500">React</span>, and{" "}
        <span className="text-orange-500">Tailwind CSS</span>. I'm open to
        feedback and advice on the design and functionality of my portfolio.
        Click on{" "}
        <Link to="/contact" className="text-orange-500">
          Contact
        </Link>{" "}
        and let's connect and explore opportunities to work together!
      </p>
    </div>
  );
}

export default Home;
