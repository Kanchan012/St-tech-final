import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Homeimage/Logo.png";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

function Header() {
  return (
    <header className="flex justify-between items-center bg-[#edc057] px-5 py-2 text-black font-medium ">
      
      {/* Logo */}
      <div className="flex items-center gap-2 italic text-[20px]">
        <img src={Logo} alt="Logo" className="w-10" />
        <h1>S.T. Tech</h1>
      </div>

      {/* Navbar */}
      <nav className="flex items-center gap-8">
        <NavLink to="/" className="font-medium hover:border-b-3 hover:border-[#003372]">
          Home
        </NavLink>
        <NavLink to="/dashboard" className="font-medium hover:border-b-3 hover:border-[#003372]">
          Dashboard
        </NavLink>
        <NavLink to="/courses" className="font-medium hover:border-b-3 hover:border-[#003372]">
          Courses
        </NavLink>
        <NavLink to="/instructors" className="font-medium hover:border-b-3 hover:border-[#003372]">
          Instructors
        </NavLink>
        <NavLink to="/about" className="font-medium hover:border-b-3 hover:border-[#003372]">
          About us
        </NavLink>

        <div className="flex items-center font-medium hover:border-b-3 hover:border-[#003372]">
          <select className="ml-1 bg-transparent border-none outline-none  ">
            <option>More</option>
          </select>
        </div>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        
        {/* Search */}
        <div className="flex items-center bg-white rounded-full px-2 py-1 shadow-sm shadow-black">
          <input
            type="text"
            placeholder="Search for anything"
            className="border-none outline-none text-sm px-4 h-8 items-center  rounded-full"
          />
          <FaSearch  className="text-[#7A7A7A] size-5"/>
        </div>

        <NavLink to="/cart">
          <FaCartShopping className="text-[#003372] size-6" />
        </NavLink>

        <FaRegHeart className="text-[#003372] size-6" />

        <NavLink to="/login">
          <button className="border-2 border-white text-[#003372] font-bold px-4 py-1 rounded-xl hover:bg-gray-100">
            Log in
          </button>
        </NavLink>

        <button className="bg-[#003372] text-white font-semibold px-6 py-1 rounded-xl hover:bg-blue-500">
          Register
        </button>

        <TbWorld className="text-white size-6" />
      </div>
    </header>
  );
}

export default Header;
