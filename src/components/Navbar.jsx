import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsList, BsX } from "react-icons/bs";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-4 py-3 bg-white/30 backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.svg"
            className="rounded-full"
            width={30}
            alt="logo"
          />
          <h1 className="text-[18px] font-semibold">
            asadbek{" "}
            <span className="text-gray-700 font-[400]">ning portfoliosi</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 items-center text-gray-700">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-black font-semibold" : ""
              }
            >
              men haqimda?
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-black font-semibold" : ""
              }
            >
              blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "text-black font-semibold" : ""
              }
            >
              loyihalar
            </NavLink>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <BsX /> : <BsList />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-60 mt-2" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-2 text-gray-700">
          <li>
            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-black font-semibold" : ""
              }
            >
              men haqimda?
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-black font-semibold" : ""
              }
            >
              blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-black font-semibold" : ""
              }
            >
              loyihalar
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
