import { Link, NavLink, Outlet } from "react-router-dom";
import SidebarIcon from "./SidebarIcon";
import UserNavItem from "./UserNavItem";
import AdminNavItem from "./AdminNavItem";

const Sidebar = () => {
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
        <ul className="menu p-4 w-60 md:w-80 min-h-full text-sixthColor bg-thirdColor">
          {/* Sidebar content here */}
          <li>
            <NavLink to={"/"} className="text-xl md:text-2xl font-bold">
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
                isPending ? "pending" : isActive ? "bg-firstColor text-fifthColor" : ""
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <Link
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
