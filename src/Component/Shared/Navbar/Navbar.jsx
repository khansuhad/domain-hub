import { Link, NavLink } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import useTheme from "../../../Hock/useTheme";
import { FiSun } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";
import UseAuth from "../../../Hock/UseAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hock/useCart";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../../features/language/languageSlice";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import useUnreadNotifications from "../../../Hock/useUnreadNotification";
import useAdmin from "../../../Hock/useAdmin";

import "./active.css";
// import { useSelector } from "react-redux";
const Navbar = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  const [notificationLength, setNotificationLength] = useState(0)
  // console.log("notifications",notification);
  const { i18n, t } = useTranslation()
  const [language, setLanguage] = useState("bn")
  const [carts, loading, refetch] = useCart();


  // import { useSelector } from "react-redux";

  const { notification } = useUnreadNotifications();
  const { handleModeChange, mode } = useTheme();
  const { user } = UseAuth();
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(notification.length);
    const length = notification.length;
    setNotificationLength(length)

  }, [notification.length])
  const handleNotification = () => {
    const length = 0;
    setNotificationLength(length)
  }
  const handleLanguageToggle = () => {

    setLanguage(prevLanguage => (prevLanguage === "en" ? "bn" : "en"));
    dispatch(changeLanguage(language))
    i18n.changeLanguage(language)
  };
  console.log("selected language in usestate", language);
  const navLink = (
    <>


      <li>
        <NavLink to="/" >{t("navHome")}</NavLink>
      </li>
      <li>
        <NavLink to="/domainCategory" >{t("navPricing")}</NavLink>
      </li>
      <li>
        <NavLink to="/about" >{t("navAbout")}</NavLink>
      </li>
      <li>
        <NavLink to="/contact" >{t("navContact")}</NavLink>
      </li>
      {/* <li>
        <Link to="reviews">{t("navReview")}</Link>
      </li> */}
      <li>
        <Link to="/dashboard/profile" onClick={() => i18n.changeLanguage("en")}>{t("navDashboard")} </Link>
      </li>
      <li className="form-control w-24  text-left   lg:hidden">
        <label className="cursor-pointer label">
          <span className="label-text text-black">{language === "en" ? "বাংলা" : "English"}</span>
          <input type="checkbox" className="toggle toggle-primary"
            checked={language === "bn"}
            onChange={handleLanguageToggle}
          />
        </label>
      </li>
      {!isAdmin? (<li className="hidden lg:flex">
        <Link to="/dashboard/myCart"><button className="flex justify-center items-center">
          <FaShoppingCart className="mr-2"></FaShoppingCart>
          <div className="badge badge-primary">+{carts.length} </div>
        </button></Link>
      </li>):""}
    </>
  );


  return (
    <div>
      <div>
        <div className="navbar fixed z-20 bg-opacity-60  bg-black shadow-lg  text-white ">
          <div className="navbar-start">
            <div className="dropdown ">
              <label tabIndex={0} className="btn btn-ghost lg:hidden p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black bg-base-100 rounded-box w-52"
              >
                {navLink}
              </ul>
            </div>

            <div className="md:flex justify-between items-center text-xl hidden">
              {" "}
              <img
                className="w-20 h-10 rounded-full"
                src="https://i.postimg.cc/3RxTkQ63/Whats-App-Image-2024-02-02-at-5-41-26-PM-removebg-preview.png"
                alt=""
              />{" "}
              <p className="text-sm">{t("navTitle")}</p>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1">{navLink}</ul>
          </div>
          <div className="navbar-end">
            <div className="form-control w-24 mr-4  hidden lg:flex">
              <label className="cursor-pointer label">
                <span className="label-text text-white mr-2">{language === "en" ? "বাংলা" : "English"}</span>
                <input type="checkbox" className="toggle toggle-primary"
                  checked={language === "bn"}
                  onChange={handleLanguageToggle}
                />
              </label>
            </div>

            {/* cart icon for mobile and tablet */}
            {!isAdmin?(<div className=" md:flex lg:hidden">
              <Link to="/dashboard/myCart"><button className="flex justify-center items-center">
                <FaShoppingCart className="mr-2"></FaShoppingCart>
                <div className="badge badge-primary">+{carts.length} </div>
              </button></Link>
            </div>):""}

            <div className="ml-2">
              {mode === "light" ? (
                <LuMoonStar
                  onClick={handleModeChange}
                  size={27}
                  className="cursor-pointer mr-2 lg:mr-0 dark:text-white"
                />
              ) : (
                <FiSun
                  onClick={handleModeChange}
                  size={27}
                  className="cursor-pointer mr-2 lg:mr-0 dark:text-white"
                />
              )}
            </div>

            {/* notification icon */}
            <Link to='/unreadnotifications' className="btn btn-ghost btn-circle">
              <div className="indicator" onClick={handleNotification}>
                <IoIosNotifications className="text-3xl cursor-pointer" />
                {notificationLength > 0 && <span className="badge badge-xs badge-primary indicator-item">{notificationLength}</span>}
                {/* <span className="badge badge-xs badge-primary indicator-item">{notification.length}</span> */}
              </div>
            </Link>



            {user?.email ? (
              <Link to="/dashboard/profile" className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-8 rounded-full">
                    <img src={user?.photoURL} alt={user?.displayName} />
                  </div>
                </label>
              </Link>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm  btn-ghost">{t("navLogin")}</button>
              </Link>
            )}

            {/* sun and moon mode icon  */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
