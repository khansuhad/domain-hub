import { NavLink } from "react-router-dom";
import "./active.css";

const AdminNavItem = () => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/dashboard"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "abc" : "text-white"
        }
          
        >
          Dashboard
        </NavLink>
    
        <NavLink
          to="/dashboard/create-domain"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "abc" : "text-white"
        }
          
        >
          Create Domain
        </NavLink>
      
        <NavLink
          to="/dashboard/all-domains"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "abc" : "text-white"
        }
          
        >
          All Domains
        </NavLink>
      
        <NavLink
          to="/dashboard/all-domain-requests"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "abc" : "text-white"
        }
          
        >
          All Domain Request
        </NavLink>
     
        <NavLink
          to="/dashboard/all-free-tail-applications"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "abc" : "text-white"
        }
          
        >
          All Free Tail Applications
        </NavLink>
     
        <NavLink
          to="/dashboard/all-Reviews"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "abc" : "text-white"
        }
          
        >
          All Reviews
        </NavLink>

        <NavLink
          to="/dashboard/all-users"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "abc" : "text-white"
        }
         
        >
          All Users
        </NavLink>
      </li>
    </>
  );
};

export default AdminNavItem;
