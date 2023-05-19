import React from "react";
import Timeline from "./Timeline";

function Home() {
  /*  const [timeSinceCreation, setTimeSinceCreation] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const pageCreatedDate = new Date("4/18/2023");
      const today = new Date();
      const diffInTime = today.getTime() - pageCreatedDate.getTime();

      const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
      const diffInHours = Math.floor(diffInTime / (1000 * 3600));
      const diffInMinutes = Math.floor(diffInTime / (1000 * 60));
      const diffInSeconds = Math.floor(diffInTime / 1000);

      const milliseconds = diffInTime % 1000;
      const seconds = diffInSeconds % 60;
      const minutes = diffInMinutes % 60;
      const hours = diffInHours % 24;

      const timeString = `${diffInDays} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds, ${milliseconds} milliseconds`;

      setTimeSinceCreation(timeString);
    }, 10); // Update every 10 milliseconds

    return () => clearInterval(intervalId);
  }, []);*/

  function handleDownloadResume() {
    const fileUrl = "/assets/resume.pdf"; // Replace with the actual file URL
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "resume.pdf"; // Specify the desired file name
    anchor.click();
  }

  return (
    <div className="flex items-center justify-center flex-col text-center pt-8 pb-6">
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
        Hey there, I'm Aaron Nader, a 27-year-old web developer with a passion
        for crafting exceptional websites and web applications. My skill set
        includes a wide range of programming languages, including HTML, CSS,
        JavaScript, PHP, Python, and MySQL, as well as a mastery of popular CSS
        frameworks such as Bootstrap and Tailwind CSS. When I'm not coding, you
        can find me staying active and pursuing a healthy lifestyle. Whether
        it's a morning workout or a hike in the great outdoors, I believe in
        taking care of my physical and mental well-being. My supportive family,
        especially my wife Caroline, has been a crucial part of my journey and
        has helped me achieve my professional goals. I'm excited to share my
        portfolio with you, built on state-of-the-art technologies like Vite,
        React, and Tailwind CSS
      </p>

      <p className="text-sm max-w-xl">
        <Timeline />
      </p>
    </div>
  );
}

export default Home;
