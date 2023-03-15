import React from "react";

export default function Hero(props) {
  return (
    <div className="relative bg-[url(./Assets/img/Web/heroImage.webp)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <div className="my-3">
            <span className="text-2xl font-bold sm:text-8xl text-orange-500">
              PESU
            </span>
            &nbsp;&nbsp;
            <span className="text-blue-900 font-semibold text-8xl">Cafe</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Ordering Snacks
            <strong className="block font-extrabold text-blue-700">
              made easier
            </strong>
          </h1>
          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
