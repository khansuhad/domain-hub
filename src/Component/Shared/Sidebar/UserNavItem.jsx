import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import "./active.css"
const UserNavItem = () => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/myCart"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "abc" : "text-white"
        }
        >
          <FaCartArrowDown />My Cart
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/my-free-tail-application"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "abc" : "text-white"
        }
        >
          My Free Tail Application
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/my-all-domains"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "abc" : "text-white"
        }
        >
          My All Domains
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/my-all-reviews"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "abc" : "text-white"
        }
        >
          My All Review
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/support"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "abc" : "text-white"
        }
        >
          Support
        </NavLink>
      </li>
    </>
  );
};

export default UserNavItem;
