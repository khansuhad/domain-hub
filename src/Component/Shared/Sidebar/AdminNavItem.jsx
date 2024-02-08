import { NavLink } from "react-router-dom";
import "./active.css";
import { useTranslation } from "react-i18next";

const AdminNavItem = () => {
  const {i18n,t}= useTranslation()
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/dashboard"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "abc" : "text-white"
        }
          
        >
          {t("navDashboard")}
        </NavLink>
    
        <NavLink
          to="/dashboard/create-domain"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "abc" : "text-white"
        }
          
        >
          
          {t("create")}
        </NavLink>
      
        <NavLink
          to="/dashboard/all-domains"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "abc" : "text-white"
        }
          
        >
          {t("allDomain")}
        </NavLink>
      
      
        <NavLink
          to="/dashboard/all-free-tail-applications"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "abc" : "text-white"
        }
          
        >
          {t("allFreeTrial")}
        </NavLink>
     
        <NavLink
          to="/dashboard/all-Reviews"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "abc" : "text-white"
        }
          
        >
          {t("allReviews")}
        </NavLink>

        <NavLink
          to="/dashboard/all-users"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "abc" : "text-white"
        }
         
        >
          {t("allUser")}
        </NavLink>
      </li>
    </>
  );
};

export default AdminNavItem;
