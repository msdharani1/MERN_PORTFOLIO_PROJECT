import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <main className="w-full h-[90vh] flex lg:flex-row items-center justify-center flex-col ">
      <div className="w-[50%] flex-col justify-center h-[102%] overflow-hiddent relative flex items-center">
        <div>
          <p className="text-white font-bold text-3xl rounded-t-2xl bg-[#0B3037] px-4 py-3">
            <i class="fa-solid fa-location-dot pr-6 text-[24px]"></i>Location
          </p>
          <iframe
            className="rounded-b-2xl border-6 border-gray-800"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.4417511482!2d76.88466196036903!3d11.014126249163489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1757522078906!5m2!1sen!2sin"
            width="600"
            height="450"
          ></iframe>
        </div>
      </div>
      <div className="w-[50%] flex flex-col my-auto justify-center items-center">
        <div className="bg-[#0B3037] px-10 py-9 rounded-2xl">
          <h1 className="text-5xl text-center mb-5 font-bold bg-gradient-to-t from-[#134e5e] via-[#fff] to-[#e3e3e3] bg-clip-text text-transparent text-5xl font-bold">
            Contact Form
          </h1>
          <div className="flex flex-col gap-5">
            <label for="" className="text-gray-300 font-semibold">
              <i class="fa-solid fa-address-card pr-6"></i>Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border w-[400px] text-white rounded-2xl px-3 py-2"
            />
            <label for="" className="text-gray-300 font-semibold">
              <i class="fa-solid fa-envelope pr-6"></i> Email
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="border w-[400px] text-white rounded-2xl px-3 py-2"
            />
            <label for="" className="text-gray-300 font-semibold">
              <i class="fa-solid fa-envelope pr-6"></i>Message
            </label>
            <textarea
              type="text"
              placeholder="Enter your Messaage"
              className="border w-[400px] text-white rounded-2xl px-3 py-2"
            />
            <div className="mt-2">
              <Link
                to="/projects"
                className="bg-gradient-to-t from-[#134e5e] to-[#0B3037] 
             bg-[length:200%_200%] bg-bottom 
             hover:bg-right
             transition-all duration-700 ease-in-out
             px-3 py-2 rounded-2xl border border-gray-500 text-gray-200"
              >
                Send
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
