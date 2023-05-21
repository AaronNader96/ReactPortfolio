import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div
        className="flex justify-center
            items-center"
      >
        <form
          action="https://getform.io/f/ee2e3c81-93b7-4d1a-9979-ad9d7447c340"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent
                    border-2 rounded-md focus:outline-none"
          />

          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent
                    border-2 rounded-md
                    focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent
                    border-2 rounded-md
                    focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="text-center inline-block
                    px-8 py-3 w-max text-base font-medium rounded-md tex t-white bg-gradient-to-r from-blue-500 to-gray-500 drop-shadow-md hover:stroke-white"
          >
            Contact Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
