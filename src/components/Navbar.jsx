import React from "react";
import { useState } from "react";
export default function Navbar({ items, showLogin, showUserHandler }) {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap fixed top-0 z-10 w-full bg-white lg:py-4 pt-4 lg:px-12 shadow border-solid border-t-2 border-blue-900">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <div className="flex  items-center flex-shrink-0 text-gray-800 mr-16">
          <a href="#"> <img className="w-10 inline-block m-2" src="./img/Web/logo.png"></img></a>
          <span className="font-semibold text-2xl tracking-tight">
            <a href="#">
              PESU Cafe</a>
          </span>
        </div>

        <div className="block lg:hidden">

          <button
            id="nav"
            onClick={() => setShowNav((prevState) => !prevState)}
            className="flex items-center px-3 py-2 border-2 rounded text-blue-900 border-blue-900 hover:text-blue-900 hover:border-blue-900"
          >
            <i class="uil uil-bars"></i>
          </button>
        </div>
      </div>

      <div
        className={`menu ${showNav ? "visible" : "hidden"
          } lg:visible w-full lg:flex justify-end lg:w-auto lg:px-3 px-8`}
      >

        <div className="text-md font-bold text-blue-900 lg:flex-grow">
          {/* <div className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-900 mr-2"><button onClick={() => { showUserHandler((prev) => !prev) }}>Login</button></div> */}
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-900 mr-2"
          >
            Home
          </a>
          <a
            href="#Sandwich"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-900 mr-2"
          >
            Menu
          </a>
          <div className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-900 mr-2"><button onClick={() => { window.scrollTo({ top: 10000, behavior: "smooth" }) }}>Contact</button></div>
        </div>
      </div>
    </nav>
  );
}
