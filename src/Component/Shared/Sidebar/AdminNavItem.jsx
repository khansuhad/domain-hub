import { NavLink } from "react-router-dom";
import "./active.css";

const AdminNavItem = () => {
  return (
    <>
      <li className="dashboard">
        <NavLink
          to="/dashboard/dashboard"
          className= "text-white"
          
        >
          Dashboard
        </NavLink>
    
        <NavLink
          to="/dashboard/create-domain"
          className= "text-white"
          
        >
          Create Domain
        </NavLink>
      
        <NavLink
          to="/dashboard/all-domains"
          className= "text-white"
          
        >
          All Domains
        </NavLink>
      
        <NavLink
          to="/dashboard/all-domain-requests"
          className="text-white"
          
        >
          All Domain Request
        </NavLink>
     
        <NavLink
          to="/dashboard/all-free-tail-applications"
          className= "text-white"
          
        >
          All Free Tail Applications
        </NavLink>
     
        <NavLink
          to="/dashboard/all-Reviews"
          className="text-white"
          
        >
          All Reviews
        </NavLink>

        <NavLink
          to="/dashboard/all-users"
          className="text-white"
         
        >
          All Users
        </NavLink>
      </li>
    </>
  );
};

export default AdminNavItem;
