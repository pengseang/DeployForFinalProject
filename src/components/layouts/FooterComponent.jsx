import React, { useEffect, useState } from "react";
import AddToCart from "../products/AddToCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faLayerGroup,
  faPercent,
  faUserGroup,
  faHeadphones,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
export function FooterComponent() {
  return (
    <footer className="bg-white dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl px-4 pt-5 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <Link
              to="/"
              className="flex justify-center md:justify-start lg:justify-start xl:justify-start"
            >
              <img
                src="http://dealkh-api.istad.co:80/images/9ee64bdf-822a-4270-8102-0e5b3a46b01c.png"
                alt="logo"
                className="inline-block w-10"
              />
              <h2 className="flex items-center justify-center p-1 text-3xl font-bold text-center text-transparent bg-gradient-to-r from-teal-400 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-gradient-to-bl bg-clip-text">
                TechDeals
              </h2>
            </Link>
            <div className="flex sm:justify-center md:justify-start lg:justify-start">
              <p className="max-w-sm mt-6 leading-relaxed text-center text-gray-500 dark:text-gray-400 sm:text-left">
                No money, want to buy something that have discount, Here is the
                right place for you!
              </p>
            </div>
            <div className="flex justify-center md:justify-start lg:justify-start">
              <a
                href="/"
                className="font-semibold text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text"
              >
                Go Shopping!
              </a>
            </div>
            <ul className="flex justify-center gap-6 mt-8 sm:justify-center md:justify-start lg:justify-start md:gap-8 ">
              <li>
                <a
                  href="https://www.fb.com/istad.co"
                  rel="noreferrer"
                  target="_blank"
                  className="transition text-slate-600 hover:text-slate-700/75 dark:text-white dark:hover:text-slate-400/75"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://t.me/istadkh"
                  rel="noreferrer"
                  target="_blank"
                  className="transition text-slate-600 hover:text-slate-700/75 dark:text-white dark:hover:text-slate-400/75"
                >
                  <span className="sr-only">Telegram</span>
                  <svg
                    className="size-5"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fillRule="evenodd"
                      d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="transition text-slate-600 hover:text-slate-700/75 dark:text-white dark:hover:text-slate-400/75"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="transition text-slate-600 hover:text-slate-700/75 dark:text-white dark:hover:text-slate-400/75"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 xl:col-span-2 lg:grid-cols-4 xl:grid-cols-4">
            <div className="text-center sm:text-left">
              <p className="inline-block font-semibold text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">
                Quick Link
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-500/75 "
                    href="/"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-500/75 "
                    href="/Promotion"
                  >
                    Promotion
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-500/75 "
                    href="/About"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-500/75 "
                    href="/Service"
                  >
                    Service
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="inline-block font-semibold text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">
                Feature
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-500/75 "
                    href="/Login"
                  >
                    Shopping Cart
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-500/75"
                    href="/"
                  >
                    Filters and Search
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="inline-block font-semibold text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">
                Helpful Links
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-500/75 "
                    href="/Service#question"
                  >
                    {" "}
                    FAQs{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-500/75 "
                    href="/Service#support"
                  >
                    {" "}
                    Support{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="inline-block font-semibold text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">
                Contact Us
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="mailto:info.istad@gmail.com"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-900 size-5 shrink-0 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <a
                      href="https://istad.co/"
                      className="flex-1 text-gray-700 dark:text-white"
                    >
                      info.istad@gmail.com
                    </a>
                  </a>
                </li>

                <li>
                  <span className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-900 size-5 shrink-0 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span className="flex-1 text-gray-700 dark:text-white">
                      (+855) 95 990 910 (+855) 93 990 910
                    </span>
                  </span>
                </li>

                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-900 size-5 shrink-0 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <address className="-mt-0.5 flex-1 not-italic text-gray-700 dark:text-white">
                    No. 24, St. 562, Sangkat Boeung kak I, Khan Toul Kork, Phnom
                    Penh, Cambodia
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-12 border-t border-gray-100">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">All rights reserved.</span>

              <a
                className="inline-block font-semibold text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text"
                href="#"
              >
                Terms & Conditions
              </a>

              <span>&middot;</span>

              <a
                className="inline-block font-semibold text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text"
                href="#"
              >
                Privacy Policy
              </a>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; 2024 Copyright TechDeals by{" "}
              <a
                href="https://www.istad.co/"
                className="inline-block font-semibold text-transparent underline bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text"
              >
                ISTAD
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
