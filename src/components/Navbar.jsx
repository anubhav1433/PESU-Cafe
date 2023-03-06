import React from "react";
import { useState } from "react";
export default function Navbar(props) {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap sticky top-0 z-10 w-full bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <div className="flex  items-center flex-shrink-0 text-gray-800 mr-16">
          <img
            className="w-10 h-10 inline-block m-2"
            src="./Assets/img/Web/logo.jpg"
          ></img>
          <span className="font-semibold text-2xl tracking-tight">
            PESU Cafe
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            id="nav"
            onClick={() => setShowNav((prevState) => !prevState)}
            className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
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
        <div className="text-md font-bold text-blue-700 lg:flex-grow">
          <a
            href="#Munchies"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
          >
            Munchies
          </a>
          <a
            href="#Snacks"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
          >
            Snacks
          </a>
          <a
            href="#Desserts"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
          >
            Desserts
          </a>
          <a
            href="#Beverages"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
          >
            Beverages
          </a>
          <a
            href="#Cart"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
