import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { AiFillFileText } from "react-icons/ai";
import { VscPreview } from "react-icons/vsc";
import { MdCreate,MdDomain,MdOutlineSupportAgent  } from "react-icons/md";
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
          <AiFillFileText />
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
           <MdDomain />
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
           <VscPreview />
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
          <MdOutlineSupportAgent />
         {t("supportNav")}
        </NavLink>
      </li>
    </>
  );
};

export default UserNavItem;
