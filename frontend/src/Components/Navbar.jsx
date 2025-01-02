/**
 * Functional component representing the navigation bar of the website.
 * @returns JSX element containing the navigation bar with links and icons.
 */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  /**
     * Initializes a state variable to manage the visibility of a component.
     * @returns An array containing the state variable and its setter function.
     */
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} className="w-36" />

      {/* * Generates a navigation menu with links to different pages. */}
      {/* * @returns A styled unordered list with links to Home, Collection, About, and Contact pages. */}
      <ul className="hidden sm:flex gap-5 text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        {/* * This component represents a dropdown menu with profile options. */}
        {/* * @returns JSX element representing the dropdown menu with profile options. */}
        <div className="group relative">
          <img className="w-5 cursor-pointer" src={assets.profile_icon} />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        {/* * Renders a link to the cart with an icon and a badge showing the number of items in the cart. */}
        {/* * @returns JSX element representing the link with cart icon and item count badge. */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden "
        />
      </div>
      {/* Sidebar menu for small screens */}

      {/* * Renders a sidebar navigation menu with links to different pages. */}
      {/* * @param {{boolean}} visible - Determines if the sidebar is visible or hidden. */}
      {/* * @returns JSX element representing the sidebar navigation menu. */}

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible
          ? "w-full"
          : "w-0"} `}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
