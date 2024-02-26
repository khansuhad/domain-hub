import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import "./active.css"
import { useTranslation } from "react-i18next";
const UserNavItem = () => {
  const {t}=useTranslation()
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/myCart"
        //   className={({ isActive, isPending }) =>
        //   isPending ? "pending" : isActive ? "abc" : "text-white"
        // }
        >
          <FaCartArrowDown />{t("myCartNav")}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/my-free-tail-application"
        //   className={({ isActive, isPending }) =>
        //   isPending ? "pending" : isActive ? "abc" : "text-white"
        // }
        >
          {t("freeTrialNav")}
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/my-all-domains"
        //   className={({ isActive, isPending }) =>
        //   isPending ? "pending" : isActive ? "abc" : "text-white"
        // }
        >
          {t("myDomainNav")}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/my-all-reviews"
        //   className={({ isActive, isPending }) =>
        //   isPending ? "pending" : isActive ? "abc" : "text-white"
        // }
        >
          {t("myReviewNav")}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/support"
        // className={({ isActive, isPending }) =>
        //   isPending ? "pending" : isActive ? "abc" : "text-white"
        // }
        >
         {t("supportNav")}
        </NavLink>
      </li>
    </>
  );
};

export default UserNavItem;
