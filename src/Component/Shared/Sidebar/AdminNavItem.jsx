import { NavLink } from "react-router-dom";
import "./active.css";
import { useTranslation } from "react-i18next";
import { VscPreview } from "react-icons/vsc";
import { FaUserFriends  } from "react-icons/fa";
import { AiFillFileText } from "react-icons/ai";
import { MdCreate,MdDomain,MdDashboard } from "react-icons/md";

const AdminNavItem = () => {
  const {i18n,t}= useTranslation()
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/dashboard"
        //   className={({ isActive, isPending }) =>
        //   isPending ? "pending" : isActive ? "abc" : "text-white"
        // }
          
        >
          <MdDashboard />
          
          {t("navDashboard")}
        </NavLink>
    
        <NavLink
          to="/dashboard/create-domain"
        //   className={({ isActive, isPending }) =>
        //   isPending ? "pending" : isActive ? "abc" : "text-white"
        // }
          
        >
          <MdCreate />
          
          {t("create")}
        </NavLink>
      
        <NavLink
          to="/dashboard/all-domains"
        //   className={({ isActive, isPending }) =>
        //   isPending ? "pending" : isActive ? "abc" : "text-white"
        // }
          
        >
          <MdDomain />
          {t("allDomain")}
        </NavLink>
      
      
        <NavLink
          to="/dashboard/all-free-tail-applications"
        //   className={({ isActive, isPending }) =>
        //   isPending ? "pending" : isActive ? "abc" : "text-white"
        // }
          
        >
          <AiFillFileText />
          {t("allFreeTrial")}
        </NavLink>
     
        <NavLink
          to="/dashboard/all-Reviews"
        //   className={({ isActive, isPending }) =>
        //   isPending ? "pending" : isActive ? "abc" : "text-white"
        // }
          
        >
          <VscPreview />
          {t("allReviews")}
        </NavLink>

        <NavLink
          to="/dashboard/all-users"
        //   className={({ isActive, isPending }) =>
        //   isPending ? "pending" : isActive ? "abc" : "text-white"
        // }
         
        >
          <FaUserFriends />
          {t("allUser")}
        </NavLink>
      </li>
    </>
  );
};

export default AdminNavItem;
