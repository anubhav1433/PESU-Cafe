import React from "react";
import { useState } from "react";
export default function Navbar(props) {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap fixed top-0 z-10 w-full bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-900">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <div className="flex  items-center flex-shrink-0 text-gray-800 mr-16">
          <img
            className="w-10 h-10 inline-block m-2"
            src="/assets/img/Web/logo.jpg"
          ></img>
          <span className="font-semibold text-2xl tracking-tight">
            PESU Cafe
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            id="nav"
            onClick={() => setShowNav((prevState) => !prevState)}
            className="flex items-center px-3 py-2 border-2 rounded text-blue-900 border-blue-900 hover:text-blue-900 hover:border-blue-900"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`menu ${
          showNav ? "visible" : "hidden"
        } lg:visible w-full lg:flex justify-end lg:w-auto lg:px-3 px-8`}
      >
        <div className="text-md font-bold text-blue-900 lg:flex-grow">
          <a
            href="#Munchies"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-900 mr-2"
          >
            Munchies
          </a>
          <a
            href="#Snacks"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-900 mr-2"
          >
            Snacks
          </a>
          <a
            href="#Desserts"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-900 mr-2"
          >
            Desserts
          </a>
          <a
            href="#Beverages"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-900 mr-2"
          >
            Beverages
          </a>
        </div>
      </div>
    </nav>
  );
}
