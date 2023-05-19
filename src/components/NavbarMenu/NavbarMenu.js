import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice/login";
import { Link } from "react-router-dom";
import { fetchUserData } from "../../store/authSlice/login";
import { useEffect } from "react";

import {
  Bars3Icon,
  // MagnifyingGlassIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import "./NavbarMenu.css";
const navigation = [
  { name: "Home", to: "/", current: true },
  { name: "Products", to: "products", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const { user } = useSelector((state) => state.auth);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartItems = useSelector((state) => state.cart.items);

  let accessToken = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    if (accessToken) {
      dispatch(fetchUserData());
    }
  }, [dispatch, accessToken]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };
  return (
    <Disclosure as="nav" className="bg-gray-100">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative lg:flex sm:flex-wrap lg:h-16 items-center justify-between">
              <div className="absolute z-30 inset-y-0 left-0 flex lg:items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex lg:items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="/images/navbar/logo.svg"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="/images/navbar/logo.svg"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-4 ">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? "bg-gray-200 text-black"
                            : "text-gray-500 hover:bg-gray-200 hover:text-gray-900",
                          "rounded-full px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="inset-y-0 right-0 lg:flex  items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <SearchBar />

                <Link
                  to="/cart"
                  type="button"
                  className="block w-full rounded-full bg-gray-100 p-1 text-gray-500 hover:text-gray-900 focus:outline-none relative  focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  {isLoggedIn && (
                    <div className="number text-center w-4 h-4 block bg-green-600 text-white text-xs absolute top-0 left-0 rounded-full">
                      {cartItems.length ? cartItems.length : 0}
                    </div>
                  )}
                </Link>
                <div className="flex">
                  {!isLoggedIn && (
                    <Link
                      to="/login"
                      className="block w-full text-white ml-3 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 "
                    >
                      login
                    </Link>
                  )}

                  {!isLoggedIn && (
                    <Link
                      to="/registration"
                      className="block w-full text-white ml-3 bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 "
                    >
                      Register
                    </Link>
                  )}
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div className="w-8">
                    {isLoggedIn && (
                      <Menu.Button className="flex rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-gray-100">
                        <span className="sr-only">Open user menu</span>
                        {user && (
                          <img
                            className="h-8 w-8 rounded-full"
                            src={`https://res.cloudinary.com/das9oh9bs/${user.image}`}
                            alt=""
                          />
                        )}
                        {!user && (
                          <img
                            className="h-8 w-8 rounded-full"
                            src={
                              "https://pixsector.com/cache/50fcb576/av0cc3f7b41cb8510e35c.png"
                            }
                            alt=""
                          />
                        )}
                      </Menu.Button>
                    )}
                  </div>
                  {console.log(`image: ${user}`)}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/user/profile"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/wishlist"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your WishList
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/orders"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Orders
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                            onClick={handleLogout}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-500 hover:bg-gray-200 hover:text-gray-900",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
