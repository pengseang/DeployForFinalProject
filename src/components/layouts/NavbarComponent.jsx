import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faLayerGroup,
  faPercent,
  faUserGroup,
  faHeadphones,
  faCartShopping,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import AddToCart from "../products/AddToCart";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import GeminiChat from "../../AI/applyai";

export function NavbarComponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Retrieve dark mode preference from local storage
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; // Convert string to boolean
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const onToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const body = document.body;
    const header = document.querySelector("header");

    if (darkMode) {
      body.classList.add("dark");
      header.classList.add("dark");
    } else {
      body.classList.remove("dark");
      header.classList.remove("dark");
    }

    // Save dark mode preference to local storage
    localStorage.setItem("darkMode", darkMode);

    return () => {
      body.classList.remove("dark");
      header.classList.remove("dark");
    };
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between w-full px-6 py-2 max-w-screen-2xl lg:px-16 bg-gradient-to-r from-teal-400 to-blue-500 lg:py-0 min-w-[100%]">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/" aria-label="Logo">
          <img
            src="http://dealkh-api.istad.co:80/images/fc04b3e4-b141-4b48-b858-393482a16c98.png"
            alt="logo"
            className="w-32"
          />
        </a>
      </div>

      {/* Navigation */}
      <div
        className={`flex-1 ${
          menuOpen ? "block" : "hidden"
        } lg:flex lg:items-center`}
      >
        <nav
          className={`m-auto mt-12 sm:mt-12 md:mt-12 lg:mt-0 nav-links duration-500 lg:static absolute lg:min-h-fit min-h-[30vh] bg-gradient-to-r from-teal-400 to-blue-500 lg:bg-none left-0 transition-transform ${
            menuOpen ? "top-[5%]" : "top-[-100%]"
          } lg:w-auto w-full flex items-center px-5 lg:px-0`}
        >
          <ul className="flex-col items-center justify-between gap-8 pt-4 text-base text-white lg:flex lg:pt-0 lg:flex-row lg:text-[12px] xl:text-[16px]">
            {[
              { label: "Home", icon: faHome, link: "/" },
              { label: "Promotion", icon: faPercent, link: "/Promotion" },
              { label: "About Us", icon: faUserGroup, link: "/About" },
              { label: "Service", icon: faHeadphones, link: "/Service" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  className="block px-0 py-3 border-b-2 border-transparent lg:p-4"
                  href="#"
                  aria-label={item.label}
                >
                  <FontAwesomeIcon icon={item.icon} />
                  <Link to={item.link} className="pl-1">
                    {item.label}
                  </Link>
                </a>
              </li>
            ))}
            <li>
                  <a href="/ai">
                    <img
                      className="w-10 sm:py-5 md:py-5"
                      src="http://dealkh-api.istad.co:80/images/3d5b8787-a353-4fec-a2ea-0073519d4618.png"
                      alt=""
                    />
                  </a>
                </li>
            {/* Mobile Login/Register Buttons */}
            {menuOpen && (
              <div className="flex items-center gap-3 mt-4 mb-4 lg:hidden">
                
                <Link to="/Login">
                  <button
                    className="flex items-center gap-2 text-white"
                    style={{ borderRight: "1px solid #fff" }}
                  >
                    <span className="pr-3 text-white rounded-lg text-sm px-5 py-2.5 text-center me-2 font-medium">
                      Login
                    </span>
                  </button>
                </Link>
                <Link to="./Register">
                  <button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </ul>
        </nav>
      </div>

      {/* Icons and Menu Toggle */}
      <div className="flex items-center gap-4 text-white">
        <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
          <FontAwesomeIcon
            icon={darkMode ? faSun : faMoon}
            className="h-5 lg:h-[12px] xl:h-5"
          />
        </button>
        <Link to="/AddToCart" href="#" aria-label="Shopping Cart">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="h-5 lg:h-[12px] xl:h-5"
          />
        </Link>

        {/* Hamburger Menu Icon for mobile */}
        <button
          onClick={onToggleMenu}
          className="text-3xl lg:hidden"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon
            icon={menuOpen ? faTimes : faBars}
            className="flex h-5 justify-center lg:h-[12px] xl:h-5"
          />
        </button>
      </div>

      {/* Login/Register Buttons in Navbar for Large Screens */}
      <div className="hidden gap-3 lg:flex nav-links mobile-buttons">
        <Link to="/Login">
          <button
            className="flex items-center gap-2 text-white"
            style={{ borderRight: "1px solid #fff" }}
          >
            <span className="pr-3 text-white rounded-lg text-sm px-5 py-2.5 text-center me-2 font-medium bg-clip-text text-transparent">
              Login
            </span>
          </button>
        </Link>
        <Link to="/Register">
          <button className="text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">
            Register
          </button>
        </Link>
      </div>
    </header>
  );
}
