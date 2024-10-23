import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBagShopping,
  faWandSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, Link } from "react-router-dom";
import Layout from "../Layouts/Layout";

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <Layout>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 pt-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/assets/logo.png" className="h-10" alt="Jiffy Logo" />
          </Link>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex items-center justify-center border-2 w-10 h-10 text-sm bg-green rounded-full md:me-0 focus:ring-1 focus:ring-yellow-300 dark:focus:ring-yellow-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <svg
                className="w-5 h-6 text-white dark:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z" />
              </svg>
            </button>

            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  name@jiffy.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="true"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div className="sm:hidden  items-center justify-between w-full lg:flex md:w-auto md:order-1">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li
                className={`py-1 px-1 md:bg-transparent lg:border-t-2 ${
                  location.pathname === "/"
                    ? "border-yellow"
                    : "border-transparent"
                }  flex w-full items-center justify-start gap-2`}
              >
                <Link
                  to="/"
                  className={`${
                    location.pathname === "/" ? "text-green" : "text-black"
                  } md:p-0 `}
                  aria-current={
                    location.pathname === "/" ? "page" : undefined
                  }
                >
                  Productos
                </Link>
                <FontAwesomeIcon
                  icon={faWandSparkles}
                  className={`${
                    location.pathname === "/" ? "text-green" : "text-black"
                  }`}
                />
              </li>
              <li
                className={`py-1 px-1 md:bg-transparent lg:border-t-2 ${
                  location.pathname === "/orders"
                    ? "border-yellow"
                    : "border-transparent"
                } flex w-full items-center justify-start gap-2`}
              >
                <Link
                  to="/orders"
                  className={`${
                    location.pathname === "/orders"
                      ? "text-green"
                      : "text-black"
                  } md:p-0 `}
                >
                  Pedidos
                </Link>
                <FontAwesomeIcon
                  icon={faBagShopping}
                  className={`${
                    location.pathname === "/orders"
                      ? "text-green"
                      : "text-black"
                  }`}
                />
              </li>
              <li
                className={`py-1 px-1 md:bg-transparent lg:border-t-2 ${
                  location.pathname === "/cart"
                    ? "border-yellow"
                    : "border-transparent"
                }  flex w-full items-center justify-start gap-2`}
              >
                <Link
                  to="/cart"
                  className={`${
                    location.pathname === "/cart" ? "text-green" : "text-black"
                  } md:p-0 `}
                >
                  Carrito
                </Link>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className={`${
                    location.pathname === "/cart" ? "text-green" : "text-black"
                  }`}
                />
              </li>
            </ul>
          </div>

          <div
            className="items-center justify-between lg:hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li
                className={`py-1 px-1 md:bg-transparent lg:border-t-2 ${
                  location.pathname === "/"
                    ? "border-yellow"
                    : "border-transparent"
                }  flex w-full items-center justify-start gap-2`}
              >
                <Link
                  to="/"
                  className={`${
                    location.pathname === "/" ? "text-green" : "text-black"
                  } md:p-0 `}
                  aria-current={
                    location.pathname === "/" ? "page" : undefined
                  }
                >
                  Productos
                </Link>
                <FontAwesomeIcon
                  icon={faWandSparkles}
                  className={`${
                    location.pathname === "/" ? "text-green" : "text-black"
                  }`}
                />
              </li>
              <li
                className={`py-1 px-1 md:bg-transparent lg:border-t-2 ${
                  location.pathname === "/orders"
                    ? "border-yellow"
                    : "border-transparent"
                } flex w-full items-center justify-start gap-2`}
              >
                <Link
                  to="/orders"
                  className={`${
                    location.pathname === "/orders"
                      ? "text-green"
                      : "text-black"
                  } md:p-0 `}
                >
                  Pedidos
                </Link>
                <FontAwesomeIcon
                  icon={faBagShopping}
                  className={`${
                    location.pathname === "/orders"
                      ? "text-green"
                      : "text-black"
                  }`}
                />
              </li>
              <li
                className={`py-1 px-1 md:bg-transparent lg:border-t-2 ${
                  location.pathname === "/cart"
                    ? "border-yellow"
                    : "border-transparent"
                }  flex w-full items-center justify-start gap-2`}
              >
                <Link
                  to="/cart"
                  className={`${
                    location.pathname === "/cart" ? "text-green" : "text-black"
                  } md:p-0 `}
                >
                  Carrito
                </Link>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className={`${
                    location.pathname === "/cart" ? "text-green" : "text-black"
                  }`}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Layout>
  );
};

export default Navbar;
