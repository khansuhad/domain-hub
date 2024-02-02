import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import SidebarIcon from "./SidebarIcon";
import UserNavItem from "./UserNavItem";
import AdminNavItem from "./AdminNavItem";
import UseAuth from "../../../Hock/UseAuth";
import toast from "react-hot-toast";

const Sidebar = () => {
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
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
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
        <ul className="menu p-4 w-60 md:w-80 min-h-full  bg-fifthColor">
          {/* Sidebar content here */}
          <li>
            <NavLink to={"/"} className="text-xl text-white md:text-2xl font-bold">
              DomainHub
            </NavLink>
          </li>
          {/* User navLink  */}
          <UserNavItem />
          <br />
          <br />
          <br />
          {/* Admin nabLink  */}
          <AdminNavItem />

          {/* common NavLink  */}
          <li className="mt-auto">
            <NavLink
              to="/dashboard/profile"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-fourthColor text-white"
                  : "text-white"
              }
            >
              Profile
            </NavLink>
          </li>
          {
            <li onClick={handleLogOut}>
              <Link
                className="text-white"
              >
                Logout
              </Link>
            </li>
          }
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
