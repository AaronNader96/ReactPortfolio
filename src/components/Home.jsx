import React from "react";

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

      <p className="text-sm max-w-xl mb-3 font-bold">
        Hey there, I'm Aaron Nader, a web developer specializing in React,
        TypeScript, MSSQL, and JavaScript. I have a strong passion for crafting
        exceptional websites and web applications. With React, I build dynamic
        and interactive user interfaces, providing seamless user experiences.
        TypeScript helps me write scalable and maintainable code, ensuring
        robustness and minimizing errors. MSSQL enables efficient data storage
        and management, ensuring reliable database operations. I also have
        experience with JavaScript and CSS frameworks like Bootstrap, Tailwind
        CSS, and Chakra UI, allowing me to create visually appealing and
        responsive designs. When I'm not coding, I enjoy staying active and
        maintaining a healthy lifestyle. Whether it's hitting the gym or
        exploring nature through hikes, I believe in taking care of my physical
        and mental well-being. My family, especially my supportive wife
        Caroline, has played a crucial role in my professional journey, helping
        me achieve my goals. I'm excited to share my portfolio, where I showcase
        projects developed using cutting-edge technologies like Vite, React, and
        Tailwind CSS. I'm open to feedback and advice on the design and
        functionality of my portfolio. Click on contact and let's connect and
        explore opportunities to work together!
      </p>
    </div>
  );
}

export default Home;
