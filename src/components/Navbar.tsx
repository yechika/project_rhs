import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Store, Menu } from "lucide-react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../hooks/useAuth";

export function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Store className="h-8 w-8 text-blue-600" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MyStore
          </span>
        </Link>
        <div className="hidden md:flex flex-1 items-center justify-end">
          <ul className="flex space-x-8 font-medium ml-auto">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${
                  location.pathname === "/"
                    ? "bg-blue-700 text-white md:bg-transparent md:text-blue-700 dark:md:text-blue-500"
                    : "text-gray-900 dark:text-white md:hover:text-blue-700 dark:hover:text-blue-500"
                }`}
                aria-current={location.pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${
                  location.pathname === "/products"
                    ? "bg-blue-700 text-white md:bg-transparent md:text-blue-700 dark:md:text-blue-500"
                    : "text-gray-900 dark:text-white md:hover:text-blue-700 dark:hover:text-blue-500"
                }`}
                aria-current={
                  location.pathname === "/products" ? "page" : undefined
                }
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${
                  location.pathname === "/contacts"
                    ? "bg-blue-700 text-white md:bg-transparent md:text-blue-700 dark:md:text-blue-500"
                    : "text-gray-900 dark:text-white md:hover:text-blue-700 dark:hover:text-blue-500"
                }`}
                aria-current={
                  location.pathname === "/contacts" ? "page" : undefined
                }
              >
                Contacts
              </Link>
            </li>
          </ul>
          {user ? (
            <button
              onClick={handleLogout}
              className="ml-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="ml-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </Link>
          )}
        </div>
        <div className="flex md:hidden">
          {user ? (
            <button
              onClick={handleLogout}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </Link>
          )}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="w-5 h-5" />
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:hidden`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 space-y-2 dark:bg-gray-800 dark:border-gray-700">
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${
                  location.pathname === "/"
                    ? "bg-blue-700 text-white md:bg-transparent md:text-blue-700 dark:md:text-blue-500"
                    : "text-gray-900 dark:text-white md:hover:text-blue-700 dark:hover:text-blue-500"
                }`}
                aria-current={location.pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${
                  location.pathname === "/products"
                    ? "bg-blue-700 text-white md:bg-transparent md:text-blue-700 dark:md:text-blue-500"
                    : "text-gray-900 dark:text-white md:hover:text-blue-700 dark:hover:text-blue-500"
                }`}
                aria-current={
                  location.pathname === "/products" ? "page" : undefined
                }
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${
                  location.pathname === "/contacts"
                    ? "bg-blue-700 text-white md:bg-transparent md:text-blue-700 dark:md:text-blue-500"
                    : "text-gray-900 dark:text-white md:hover:text-blue-700 dark:hover:text-blue-500"
                }`}
                aria-current={
                  location.pathname === "/contacts" ? "page" : undefined
                }
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
