import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import useTheme from "../../../Hock/useTheme";
import { FiSun } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";
import UseAuth from "../../../Hock/UseAuth";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
const Navbar = () => {
  const userInfo = useSelector((state) => state.user.currentUser)
  // console.log(userInfo);
  const { handleModeChange, mode } = useTheme();
  const { user, logoutUser } = UseAuth();
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

  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
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
                className="w-[40px] h-[40px] rounded-full"
                src="https://i.postimg.cc/90XySb7h/4091.jpg"
                alt=""
              />{" "}
              <p>DomainHub</p>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLink}</ul>
          </div>
          <div className="navbar-end">
            {/* notification icon */}
            <IoIosNotifications className="text-2xl cursor-pointer" />
            {userInfo?.email ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-8 rounded-full">
                    <img src={user?.photoURL} alt={user?.displayName} />
                  </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <button className="btn btn-sm  btn-ghost text-black">{user?.displayName} </button>

                  </li>
                  <li>
                    <div className="flex justify-center">
                      <Link to='/myProfile'><button className="btn btn-sm btn-ghost text-black">My Profile </button></Link>
                    </div>

                  </li>
                  <li>
                    <button onClick={handleLogOut} className="btn btn-sm  btn-ghost text-black">Logout</button>

                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm  btn-ghost">Login</button>
              </Link>
            )}

            {/* sun and moon mode icon  */}
            <div>
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
      </div>
    </div>
  );
};

export default Navbar;
