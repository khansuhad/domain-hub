/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck
import Container from "../../../Component/UI/Container";
import Heading from "../../../Component/UI/Heading";
import Description from "../../../Component/UI/Description";
import { MdSell } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineReviews } from "react-icons/md";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useAxiosPublic from "../../../Hock/useAxiosPublic";

const SuccessShowcase = () => {
  const [sellings, setSellings] = useState([])
  const [reviews, setReviews] = useState([])
  const [users, setUsers] = useState([])
  const {t}=useTranslation()
  const useAxios = useAxiosPublic();

  
  useEffect(() =>{
    useAxios.get("/reviewsLength")
    .then(res => {
      const data = res?.data ;
      setReviews(data)
    })
    useAxios.get("/usersLength")
    .then(res => {
      const data = res?.data;
      setUsers(data)
    })
    useAxios.get("/sellingsLength")
    .then(res => {
      const data = res?.data;
      setSellings(data)
    })

  },[useAxios])

  return (
    <Container>
      <Heading>{t("successTitle")}</Heading>
      <Description>
       {t("successDes")}
      </Description>
      <div className="w-full flex justify-center items-center mt-16 mb-16">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-9">
          {/* stack-1 */}
          <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a] rounded-md p-2">
              <h1 className="text-white text-xl font-medium py-2 md:pl-4">
                {t("success1Title")}
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs p-1">
              {t("success1Title")}
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a]"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a] z-10 text-white text-center">
              1
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
          {/* stack-1 */}

          {/* stack-2 */}
          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a]"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a] z-10 text-white text-center">
              2
            </div>
          </div>

          <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a] rounded-md p-2">
              <h1 className="text-white text-xl font-medium py-2 md:pl-4">
              {t("success2Title")}
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs p-1">
              {t("success2Des")}
              </p>
            </div>
          </div>
          {/* stack-2 */}

          {/* stack-3 */}
          <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a] rounded-md p-2">
              <h1 className="text-white text-xl font-medium py-2 md:pl-4">
              {t("success3Title")}
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs p-1">
              {t("success3Des")}
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a]"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a] z-10 text-white text-center">
              3
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
          {/* stack-3 */}

          {/* stack-4 */}
          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a]"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a] z-10 text-white text-center">
              4
            </div>
          </div>

          <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a] rounded-md p-2">
              <h1 className="text-white text-xl font-medium py-2 md:pl-4">
              {t("success3Title")}
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs p-1">
              {t("success3Des")}
              </p>
            </div>
          </div>
          {/* stack-4 */}

          {/* stack-5 */}
          <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a] rounded-md p-2">
              <h1 className="text-white text-xl font-medium py-2 md:pl-4">
              {t("success4Title")}
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs p-1">
              {t("success4Des")}
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a]"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a] z-10 text-white text-center">
              5
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
          {/* stack-5 */}

          {/* stack-6 */}
          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a]"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a] z-10 text-white text-center">
              6
            </div>
          </div>

          <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a] rounded-md p-2">
              <h1 className="text-white text-xl font-medium py-2 md:pl-4">
              {t("success5Title")}
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs p-1">
              {t("success5Des")}
              </p>
            </div>
          </div>
          {/* stack-6 */}

          {/* stack-7 */}
          <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a] rounded-md p-2">
              <h1 className="text-white text-xl font-medium py-2 md:pl-4">
              {t("success6Title")}
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs p-1">
              {t("success6Des")}
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a]"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a] z-10 text-white text-center">
              7
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
          {/* stack-7 */}
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-5 md:gap-10 lg:gap-24 mt-20">
        <div className="stats shadow">
          <div className="stat bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a] text-white">
            <div className="flex justify-between gap-3">
              <div>
                <div className="stat-title font-bold text-white">
                  {t("totalSell")}
                </div>
                <div className="stat-value">
               <CountUp end={sellings?.length}/>
                </div>
              </div>
              <MdSell className="mt-6 text-xl" />
            </div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a] text-white">
            <div className="flex justify-between gap-3">
              <div>
                <div className="stat-title font-bold text-white">
                {t("totalUser")}
                </div>
                <div className="stat-value">
                  <CountUp end={users?.length}/>
                </div>
              </div>
              <FaUserGroup className="mt-6 text-xl" />
            </div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a] text-white">
            <div className="flex justify-between gap-3">
              <div>
                <div className="stat-title font-bold text-white">
                {t("totalReview")}
                </div>
                <div className="stat-value">
                  <CountUp end={reviews?.length} />
                </div>
              </div>
              <MdOutlineReviews className="mt-6 text-xl" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SuccessShowcase;
