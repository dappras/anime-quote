import { Link } from "react-router-dom";
import RouteName from "../routes/routeName";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);

  const cookies = new Cookies();

  useEffect(() => {
    checkIsLogin();
    const handleNavbarToggle = () => {
      const navbarToggle = document.querySelector(
        '[data-collapse-toggle="navbar-sticky"]'
      );
      const navbarMenu = document.getElementById("navbar-sticky");

      if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener("click", () => {
          const expanded =
            navbarToggle.getAttribute("aria-expanded") === "true" || false;
          navbarToggle.setAttribute("aria-expanded", !expanded);
          navbarMenu.classList.toggle("hidden");
        });
      }
    };

    handleNavbarToggle();

    // Clean up event listener on unmount
    return () => {
      const navbarToggle = document.querySelector(
        '[data-collapse-toggle="navbar-sticky"]'
      );
      if (navbarToggle) {
        navbarToggle.removeEventListener("click", handleNavbarToggle);
      }
    };
  }, []);

  const checkIsLogin = () => {
    const token = cookies.get("token");
    if (token != null) {
      setIsLogin(true);
    }
  };

  const logout = () => {
    cookies.remove("token");
    cookies.remove("tokenRegister");
    window.location.reload();
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to={RouteName.home}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            className="h-8"
            alt="Flowbite Logo"
          />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {isLogin == false && (
            <Link
              to={RouteName.login}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login/Register
            </Link>
          )}
          {isLogin && (
            <button
              onClick={() => logout()}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Logout
            </button>
          )}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
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
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to={RouteName.home}
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
