import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import SidebarIcon from "./SidebarIcon";
import UserNavItem from "./UserNavItem";
import AdminNavItem from "./AdminNavItem";
import UseAuth from "../../../Hock/UseAuth";
import toast from "react-hot-toast";
import useAdmin from "../../../Hock/useAdmin";
import { useTranslation } from "react-i18next";
import { useState } from "react";


const Sidebar = () => {
  const {i18n, t}=useTranslation()
  const [language,setLanguage]= useState("bn")
  const { logoutUser } = UseAuth();

  const [isAdmin] = useAdmin();
  const logOutSuccessToast = () => toast.success("Logout successfully");
  const logOutErrorToast = () => toast.error("Something went wrong");
  const navigate = useNavigate();
  const handleLogOut = () => {
    logoutUser()
      .then(() => {
        logOutSuccessToast();
        navigate("/");
      })
      .catch(() => {
        logOutErrorToast();
      });
  };
  const handleLanguageToggle = () => {
    
    setLanguage(prevLanguage => (prevLanguage === "en" ? "bn" :"en"));
    // dispatch(changeLanguage(language))
    i18n.changeLanguage(language)
  };
 console.log("selected language in Dashboard",language);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col text-sixthColor">
        {/* Page content here */}

        {/* sidebar responsive icon  */}
        <SidebarIcon />

        {/* outlet  */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 md:w-80 min-h-full  bg-fifthColor text-white">
          {/* Sidebar content here */}
          <li>
            <NavLink
              to={"/"}
              onClick={()=> i18n.changeLanguage("en")}
              className="text-xl text-white md:text-2xl font-bold"
            >
              {t("navTitle")}
            </NavLink>
          </li>
          {isAdmin ? <AdminNavItem /> : <UserNavItem />}
          {/* common NavLink  */}
          <li className="mt-auto">
          <div className="form-control w-24 mr-2">
              <label className="cursor-pointer label fkex flex-col gap-1 justify-center">
              <input type="checkbox" className="toggle toggle-primary" 
                 checked={language === "bn"} 
                 onChange={handleLanguageToggle}
                />
                <p className="label-text text-white">{language==="en"?"বাংলা":"English"}</p>
                
              </label>
            </div>
            <NavLink
              to="/dashboard/profile"
              // className={({ isActive, isPending }) =>
              //   isPending
              //     ? "pending"
              //     : isActive
              //     ? "bg-fourthColor text-white"
              //     : "text-white"
              // }
            >
              {t("navProfile")}
            </NavLink>
          </li>
          {
            <li onClick={handleLogOut}>
              <Link className="text-white">{t("logout")}</Link>
            </li>
          }
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
