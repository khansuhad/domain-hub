import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import useTheme from "../../../Hock/useTheme";
import { FiSun } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";
const Navbar = () => {
    const { handleModeChange, mode } = useTheme()


    const navLink = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/service">Service</Link>
            </li>
            <li className="relative group">
                <Link to="/dashboard">
                    Dashboard <IoIosArrowDown />
                </Link>
                <ul className="absolute hidden bg-white border rounded-md mt-6 ml-8 space-y-2 group-hover:block">
                    <li>
                        <Link
                            to="/dashboard/item1"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                            Item 1
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard/item2"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                            Item 2
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard/item3"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                            Item 3
                        </Link>
                    </li>
                </ul>
            </li>
        </>
    );


    return <div>

        <div>
            <div className="navbar fixed z-20 bg-opacity-60  bg-black shadow-lg  text-white ">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>

                    <div className="flex justify-between items-center gap-2 text-xl">  <img className="w-[40px] h-[40px] rounded-full" src="https://i.postimg.cc/90XySb7h/4091.jpg" alt="" /> <p>DomainHub</p></div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* notification icon */}
                    <IoIosNotifications className="text-2xl cursor-pointer" />
                    <Link to='/login'>
                        <button className="btn btn-sm  btn-ghost">Login</button>
                    </Link>
                    {/* sun and moon mode icon  */}
                    <div>
                        {
                            mode === "light" ? <LuMoonStar onClick={handleModeChange} size={22} className="cursor-pointer mr-2 lg:mr-0 dark:text-white" /> : <FiSun onClick={handleModeChange} size={22} className="cursor-pointer mr-2 lg:mr-0 dark:text-white" />
                        }
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center gap-2 text-xl">
                {" "}
                <img
                    className="w-[40px] h-[40px] rounded-full"
                    src="https://i.postimg.cc/90XySb7h/4091.jpg"
                    alt=""
                />{" "}
                <p>Webname</p>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
            <IoIosNotifications className="text-2xl" />
            <Link to="/login">
                <button className="btn btn-sm  btn-ghost">Login</button>
            </Link>

            {/* sun and moon mode icon  */}
            <div>
                {/* <label className="swap swap-rotate"> */}

                {/* this hidden checkbox controls the state */}
                {/* <input type="checkbox" onChange={handleToggle} /> */}

                {/* sun icon */}
                {/* <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg> */}

                {/* moon icon */}
                {/* <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg> */}

                {/* </label> */}
                {mode === "light" ? (
                    <LuMoonStar
                        onClick={handleModeChange}
                        size={22}
                        className="cursor-pointer mr-2 lg:mr-0 dark:text-white"
                    />
                ) : (
                    <FiSun
                        onClick={handleModeChange}
                        size={22}
                        className="cursor-pointer mr-2 lg:mr-0 dark:text-white"
                    />
                )}
            </div>
        </div>
    </div>



};

export default Navbar;
