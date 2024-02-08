import { Link } from "react-router-dom";
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
import { useState } from "react";
import useUnreadNotifications from "../../../Hock/useUnreadNotification";

// import { useSelector } from "react-redux";
const Navbar = () => {
  const { i18n, t } = useTranslation()
  const [language, setLanguage] = useState("bn")
  const [carts] = useCart();


  // import { useSelector } from "react-redux";

  const { notification } = useUnreadNotifications();
  const { handleModeChange, mode } = useTheme();
  const { user } = UseAuth();
  const dispatch = useDispatch()

  const navLink = (
    <>
      <li>
        <Link to="/">{t("navHome")}</Link>
      </li>
      <li>
        <Link to="/about">{t("navAbout")}</Link>
      </li>
      <li>
        <Link to="/contact">{t("navContact")}</Link>
      </li>
      <li>
        <Link to="reviews">{t("navReview")}</Link>
      </li>
      <li>
        <Link to="/dashboard/dashboard" onClick={() => i18n.changeLanguage("en")}>{t("navDashboard")}</Link>
      </li>
      <li>
        <Link to="/dashboard/myCart"><button className="flex justify-center items-center">
          <FaShoppingCart className="mr-2"></FaShoppingCart>
          <div className="badge badge-primary">+{carts.length} </div>
        </button></Link>
      </li>
    </>
  );
  const handleLanguageToggle = () => {

    setLanguage(prevLanguage => (prevLanguage === "en" ? "bn" : "en"));
    dispatch(changeLanguage(language))
    i18n.changeLanguage(language)
  };
  console.log("selected language in usestate", language);

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

            <div className="flex justify-between items-center gap-2 text-xl">
              {" "}
              <img
                className="w-20 h-10 rounded-full"
                src="https://i.postimg.cc/3RxTkQ63/Whats-App-Image-2024-02-02-at-5-41-26-PM-removebg-preview.png"
                alt=""
              />{" "}
              <p>{t("navTitle")}</p>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLink}</ul>
          </div>
          <div className="navbar-end">
            <div className="form-control w-24 mr-2">
              <label className="cursor-pointer label">
                <span className="label-text text-white">{language === "en" ? "বাংলা" : "English"}</span>
                <input type="checkbox" className="toggle toggle-primary"
                  checked={language === "bn"}
                  onChange={handleLanguageToggle}
                />
              </label>
            </div>
            <div>
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
              <div className="indicator">
                <IoIosNotifications className="text-3xl cursor-pointer" />
                {notification.length > 0 && <span className="badge badge-xs badge-primary indicator-item">{notification.length}</span>}
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
                {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <button className="btn btn-sm  btn-ghost text-black">{user?.displayName} </button>

                  </li>
                  <li>
                    <div className="flex justify-center">
                      <Link to='/dashboard/profile'><button className="btn btn-sm btn-ghost text-black">My Profile </button></Link>
                    </div>

                  </li>
                  <li>
                    <button onClick={handleLogOut} className="btn btn-sm  btn-ghost text-black">Logout</button>

                  </li>
                </ul> */}
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
