import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, Search } from "lucide-react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../hooks/useAuth";
import iconByond from './icon_byond.png';


export function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/products?search=${encodeURIComponent(search.trim())}`);
      setSearch("");
    }
  };

  return (
    <nav className="bg-stone-900 fixed w-full z-20 top-0 start-0 border-b border-yellow-400">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={iconByond}
            alt="Logo"
            className="h-10 w-auto object-cover"
            style={{
              aspectRatio: '2/1', 
              objectPosition: 'center',
              height: '20px',
              width: '100px',  
              overflow: 'hidden',
            }}
          />
        </Link>

        {/* Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden md:flex items-center mx-8 w-1/3"
        >
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-yellow-400">
              <Search className="h-5 w-5" />
            </span>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="block w-full pl-10 pr-4 py-2 rounded-lg border border-yellow-400 bg-stone-900 text-yellow-400 placeholder-yellow-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
            />
          </div>
        </form>

        <div className="hidden md:flex flex-1 items-center justify-end">
          <ul className="flex space-x-8 font-medium ml-auto">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded md:hover:bg-transparent md:p-0 ${
                  location.pathname === "/"
                    ? "bg-yellow-400 text-stone-900 md:bg-transparent md:text-yellow-400"
                    : "text-white md:hover:text-yellow-400"
                }`}
                aria-current={location.pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`block py-2 px-3 rounded md:hover:bg-transparent md:p-0 ${
                  location.pathname === "/products"
                    ? "bg-yellow-400 text-stone-900 md:bg-transparent md:text-yellow-400"
                    : "text-white md:hover:text-yellow-400"
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
                className={`block py-2 px-3 rounded md:hover:bg-transparent md:p-0 ${
                  location.pathname === "/contacts"
                    ? "bg-yellow-400 text-stone-900 md:bg-transparent md:text-yellow-400"
                    : "text-white md:hover:text-yellow-400"
                }`}
                aria-current={
                  location.pathname === "/contacts" ? "page" : undefined
                }
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link
                to="/about_us"
                className={`block py-2 px-3 rounded md:hover:bg-transparent md:p-0 ${
                  location.pathname === "/about_us"
                    ? "bg-yellow-400 text-stone-900 md:bg-transparent md:text-yellow-400"
                    : "text-white md:hover:text-yellow-400"
                }`}
                aria-current={
                  location.pathname === "/about_us" ? "page" : undefined
                }
              >
                About Us
              </Link>
            </li>
          </ul>
          {user ? (
            <button
              onClick={handleLogout}
              className="ml-6 text-stone-900 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="ml-6 text-stone-900 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Login
            </Link>
          )}
        </div>
        <div className="flex md:hidden">
          {user ? (
            <button
              onClick={handleLogout}
              className="text-stone-900 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-stone-900 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Login
            </Link>
          )}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="w-5 h-5" />
          </button>
        </div>
        <div
          className={`items-center justify-between transition-all duration-300 ease-in-out transform ${
            isMenuOpen ? "block opacity-100 translate-y-0" : "hidden opacity-0 -translate-y-4"
          } w-full md:hidden`}
          id="navbar-sticky"
        >
          {/* Mobile search bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center mb-4 mt-4"
          >
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-yellow-400">
                <Search className="h-5 w-5" />
              </span>
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="block w-full pl-10 pr-4 py-2 rounded-lg border border-yellow-400 bg-stone-900 text-yellow-400 placeholder-yellow-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
              />
            </div>
          </form>
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 space-y-2">
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${
                  location.pathname === "/"
                    ? "bg-yellow-400 text-stone-900 md:bg-transparent md:text-yellow-400"
                    : "text-gray-900 md:hover:text-yellow-400"
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
                    ? "bg-yellow-400 text-stone-900 md:bg-transparent md:text-yellow-400"
                    : "text-gray-900 md:hover:text-yellow-400"
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
                    ? "bg-yellow-400 text-stone-900 md:bg-transparent md:text-yellow-400"
                    : "text-gray-900 md:hover:text-yellow-400"
                }`}
                aria-current={
                  location.pathname === "/contacts" ? "page" : undefined
                }
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link
                to="/about_us"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${
                  location.pathname === "/about_us"
                    ? "bg-yellow-400 text-stone-900 md:bg-transparent md:text-yellow-400"
                    : "text-gray-900 md:hover:text-yellow-400"
                }`}
                aria-current={
                  location.pathname === "/about_us" ? "page" : undefined
                }
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
