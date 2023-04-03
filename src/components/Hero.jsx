import React from "react";

export default function Hero(props) {
  return (
    <div className="hero relative bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6  lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="w-full text-center sm:text-left flex justify-center flex-wrap">
          <div className="my-5 text-center w-full bg-white p-4 rounded-lg  m-4">
            <span className=" font-bold text-orange-500 text-5xl sm:text-8xl">
              PESU
            </span>
            &nbsp;&nbsp;
            <span className="text-blue-900 font-semibold text-5xl sm:text-8xl">
              Cafe
            </span>
          </div>
          <p className="text-3xl mt-8 font-semibold text-center sm:text-5xl">
            Ordering Snacks
            <span className="block font-bold text-blue-900">made easier</span>
          </p>
          <div className="mt-8 px-4 sm:px-20 text-md text-center w-full sm:text-xl sm:leading-relaxed font-semibold">
            🍴📱 Order your snacks and beverages from the PESU Cafeteria with
            ease! 🍔🍟
            <br />
            PESU-Cafe allows you to skip the line and retrieve your items in a
            flash!
          </div>
          <div className="mt-8 flex flex-wrap text-center ">
            <a
              href="#Sandwich"
              className="block w-full rounded bg-blue-800 px-12 py-3 text-lg font-medium text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            >
              Order Now!!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
