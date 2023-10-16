import React from "react";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-2 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Services
      </h1>

      <p className="max-w-xl mb-6 font-bold leading-relaxed text-gray-700 dark:text-white">
        As a first-time client, you are eligible for free services to build your
        portfolio or create a simple website. I specialize in React, HTML, CSS,
        PHP, JavaScript, and SQL. Let's collaborate and bring your ideas to
        life!
      </p>
      <p className="max-w-xl mb-6 leading-relaxed text-gray-700 dark:text-white">
        React is a popular JavaScript library for building user interfaces. It
        allows developers to create dynamic and interactive web applications,
        providing a smooth and engaging user experience. Its popularity stems
        from its efficiency, reusability of components, and strong community
        support.
      </p>
      <div className="max-w-xl mb-6 text-gray-700 dark:text-white">
        <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
          Pricing Examples
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-indigo-50 dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
              Portfolio Website
            </h3>
            <p className="text-gray-700 dark:text-white mb-4">
              Starting at $40
            </p>
            <p className="text-gray-700 dark:text-white">
              Showcase your work and create an online presence with a
              personalized portfolio website.
            </p>
          </div>
          <div className="bg-indigo-50 dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
              Blog Website
            </h3>
            <p className="text-gray-700 dark:text-white mb-4">
              Starting at $60
            </p>
            <p className="text-gray-700 dark:text-white">
              Share your thoughts, ideas, and stories with a professionally
              designed and functional blog website.
            </p>
          </div>
          <div className="bg-indigo-50 dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
              E-commerce Website
            </h3>
            <p className="text-gray-700 dark:text-white mb-4">
              Starting at $80
            </p>
            <p className="text-gray-700 dark:text-white">
              Set up an online store and start selling your products with a
              custom e-commerce website.
            </p>
          </div>
          <div className="bg-indigo-50 dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
              Custom Web Application
            </h3>
            <p className="text-gray-700 dark:text-white">
              Pricing based on project scope. Contact me for more details and a
              personalized quote.
            </p>
          </div>
        </div>
      </div>
      <p className="max-w-xl mb-6 leading-relaxed text-gray-700 dark:text-white">
        Please note that these prices are starting points and may vary depending
        on specific requirements and features. For a more accurate quote and to
        discuss your project in detail, feel free to reach out to me via the
        contact page.
      </p>
      <p className="max-w-xl mb-6 leading-relaxed text-gray-700 dark:text-white">
        Contact me using the form below:
      </p>
      <Link
        to="/contact"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Contact Page
      </Link>
    </div>
  );
};

export default Offers;
