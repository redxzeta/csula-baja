import { useState } from "react";

const NavigationBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <nav className="flex items-center flex-wrap bg-yellow p-3 ">
      <a
        href="https://www.google.com/"
        className="inline-flex items-center p-2 mr-4 "
      >
        <span className="text-lg text-black font-bold uppercase tracking-wide max-w-screen-md:hidden">
          Cal State LA Baja SAE
        </span>
      </a>

      <button
        className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-black ml-auto hover:text-gray-500 outline-none"
        onClick={handleClick}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto ">
          <a
            href="https://www.google.com/"
            className="lg:inline-flex  lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-green-600 hover:text-gray-500"
          >
            Team
          </a>

          <a
            href="https://www.google.com/"
            className="lg:inline-flex  lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-green-600 hover:text-gray-500"
          >
            Calendar
          </a>

          <a
            href="https://www.google.com/"
            className="lg:inline-flex  lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-green-600 hover:text-gray-500"
          >
            Gallery
          </a>
          <a
            href="https://www.google.com/"
            className="lg:inline-flex  lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-green-600 hover:text-gray-500"
          >
            Support
          </a>
          <a
            href="https://www.google.com/"
            className="lg:inline-flex  lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-green-600 hover:text-gray-500"
          >
            Contact
          </a>
          <a
            href="https://www.google.com/"
            className="lg:inline-flex  lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-green-600 hover:text-gray-500"
          >
            Podcast
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
