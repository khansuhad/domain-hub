import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
const UserNavItem = () => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/myCart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-firstColor text-fifthColor" : ""
          }
        >
          <FaCartArrowDown />My Cart
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/my-free-tail-application"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-firstColor text-fifthColor" : ""
          }
        >
          My Free Tail Application
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/my-all-domains"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-firstColor text-fifthColor" : ""
          }
        >
          My All Domains
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/my-all-reviews"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-firstColor text-fifthColor" : ""
          }
        >
          My All Review
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/support"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-firstColor text-fifthColor" : ""
          }
        >
          Support
        </NavLink>
      </li>
    </>
  );
};

export default UserNavItem;
