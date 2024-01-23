import { NavLink } from "react-router-dom";

const AdminNavItem = () => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-firstColor text-fifthColor" : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/create-domain"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-firstColor text-fifthColor" : ""
          }
        >
          Create Domain
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/all-domains"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-firstColor text-fifthColor" : ""
          }
        >
          All Domains
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/all-domain-requests"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-firstColor text-fifthColor" : ""
          }
        >
          All Domain Request
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/all-free-tail-applications"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-firstColor text-fifthColor" : ""
          }
        >
          All Free Tail Applications
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/all-Reviews"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-firstColor text-fifthColor" : ""
          }
        >
          All Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/all-users"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-firstColor text-fifthColor" : ""
          }
        >
          All Users
        </NavLink>
      </li>
    </>
  );
};

export default AdminNavItem;
