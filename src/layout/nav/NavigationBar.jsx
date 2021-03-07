import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/baja_logo.png";
const links = ["Team", "Calendar", "Gallery", "Support", "Contact", "Podcast"];

const NavigationBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(!active);

  return (
    <nav className="font-display  flex items-center flex-wrap  p-3  transform shadow-lg bg-gradient-to-br  from-yellow to-prime  ">
      <Link to="/" className="inline-flex items-center p-2 mr-4 ">
        <span className="text-xl text-black font-bold uppercase tracking-wide subpixel-antialiased hidden md:block  ">
          Cal State LA Baja SAE
        </span>
        <img src={Logo} alt="logo" className="h-11 w-auto md:hidden" />
      </Link>

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
          {links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ children }) => (
  <Link
    className="lg:inline-flex  lg:w-auto w-full px-3 py-2 rounded-full text-black font-bold items-center justify-center hover:bg-drime hover:text-white"
    to={`/${children.toLowerCase()}`}
  >
    {children}
  </Link>
);

export default NavigationBar;
