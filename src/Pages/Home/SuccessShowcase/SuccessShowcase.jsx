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

const SuccessShowcase = () => {
  const [sellings, setSellings] = useState({})
  const [reviews, setReviews] = useState({})
  const [users, setUsers] = useState({})


  useEffect(() =>{
    fetch("/successShowcaseReviews.json")
    .then(res => res.json())
    .then(data => {
      setReviews(data)
    })
    fetch("/successShowcaseUsers.json")
    .then(res => res.json())
    .then(data => {
      setUsers(data)
    })
    fetch("/successShowcaseSellings.json")
    .then(res => res.json())
    .then(data => {
      setSellings(data)
    })
  },[])

  return (
    <Container>
      <Heading>Success Showcase</Heading>
      <Description>
        DomainHub.com: Where E-Commerce Excellence Meets Cutting-Edge
        Technology, Redefining Web Hosting and Selling with Top-Tier Packages
        and Seamless Experiences.
      </Description>
      <div className="w-full flex justify-center items-center mt-16 mb-16">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-9">
          {/* stack-1 */}
          <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-gradient-to-tr from-teal-600 to-[#23668a] rounded-md p-2">
              <h1 className="text-white text-xl font-medium py-2 md:pl-4">
                Top Selling
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs p-1">
                DomainHub.com excels as a leading E-Commerce platform with
                top-selling packages that set industry standards, showcasing our
                commitment to quality and value.
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gradient-to-tr from-teal-600 to-[#23668a]"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gradient-to-tr from-teal-600 to-[#23668a] z-10 text-white text-center">
              1
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
          {/* stack-1 */}

          {/* stack-2 */}
          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gradient-to-tr from-teal-600 to-[#23668a]"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gradient-to-tr from-teal-600 to-[#23668a] z-10 text-white text-center">
              2
            </div>
          </div>

          <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-gradient-to-tr from-teal-600 to-[#23668a] rounded-md p-2">
              <h1 className="text-white text-xl font-medium py-2 md:pl-4">
                Total Users
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs p-1">
                Our thriving user community reflects the trust and satisfaction
                of a diverse range of individuals, businesses, bloggers, and
                developers who rely on DomainHub.com for their web hosting and
                selling needs.
              </p>
            </div>
          </div>
          {/* stack-2 */}

          {/* stack-3 */}
          <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-gradient-to-tr from-teal-600 to-[#23668a] rounded-md p-2">
              <h1 className="text-white text-xl font-medium py-2 md:pl-4">
                Total Reviews
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs p-1">
                Positive reviews abound, underscoring the streamlined and
                efficient experience we provide. Users commend our platform for
                features such as live chat support, subscription management, and
                a user-friendly domain search.
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gradient-to-tr from-teal-600 to-[#23668a]"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gradient-to-tr from-teal-600 to-[#23668a] z-10 text-white text-center">
              3
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
          {/* stack-3 */}

          {/* stack-4 */}
          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gradient-to-tr from-teal-600 to-[#23668a]"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gradient-to-tr from-teal-600 to-[#23668a] z-10 text-white text-center">
              4
            </div>
          </div>

          <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-gradient-to-tr from-teal-600 to-[#23668a] rounded-md p-2">
              <h1 className="text-white text-xl font-medium py-2 md:pl-4">
                User Engagement Focus
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs p-1">
                With category-based pricing, special discounts, and a free trial
                option, DomainHub.com actively enhances user engagement,
                offering flexibility and affordability to our valued customers.
              </p>
            </div>
          </div>
          {/* stack-4 */}

          {/* stack-5 */}
          <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-gradient-to-tr from-teal-600 to-[#23668a] rounded-md p-2">
              <h1 className="text-white text-xl font-medium py-2 md:pl-4">
                Advanced Technology Integration
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs p-1">
                The incorporation of Redux for centralized and scalable state
                management showcases our dedication to advanced technology,
                ensuring a seamless and adaptable solution for large-scale web
                applications.
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gradient-to-tr from-teal-600 to-[#23668a]"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gradient-to-tr from-teal-600 to-[#23668a] z-10 text-white text-center">
              5
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
          {/* stack-5 */}

          {/* stack-6 */}
          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gradient-to-tr from-teal-600 to-[#23668a]"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gradient-to-tr from-teal-600 to-[#23668a] z-10 text-white text-center">
              6
            </div>
          </div>

          <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-gradient-to-tr from-teal-600 to-[#23668a] rounded-md p-2">
              <h1 className="text-white text-xl font-medium py-2 md:pl-4">
                Robust Player in E-Commerce
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs p-1">
                Our commitment to a seamless user experience, coupled with
                cutting-edge technology, positions DomainHub.com as a robust
                player in the e-commerce landscape, particularly in the web
                infrastructure services sector
              </p>
            </div>
          </div>
          {/* stack-6 */}

          {/* stack-7 */}
          <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-gradient-to-tr from-teal-600 to-[#23668a] rounded-md p-2">
              <h1 className="text-white text-xl font-medium py-2 md:pl-4">
                Innovation and Collaboration
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs p-1">
                The DomainHub.com team collectively pushes limits, exploring new
                technologies to create a significant and positive difference in
                the marketplace, demonstrating our ongoing commitment to
                innovation and collaboration.
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gradient-to-tr from-teal-600 to-[#23668a]"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gradient-to-tr from-teal-600 to-[#23668a] z-10 text-white text-center">
              7
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
          {/* stack-7 */}
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-5 md:gap-10 lg:gap-24 mt-20">
        <div className="stats shadow">
          <div className="stat bg-gradient-to-tr from-teal-600 to-[#23668a] text-white">
            <div className="flex justify-between gap-3">
              <div>
                <div className="stat-title font-bold text-white">
                  Total Sellings
                </div>
                <div className="stat-value">
               <CountUp end={sellings.topSellings}/>
                </div>
              </div>
              <MdSell className="mt-6 text-xl" />
            </div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat bg-gradient-to-tr from-teal-600 to-[#23668a] text-white">
            <div className="flex justify-between gap-3">
              <div>
                <div className="stat-title font-bold text-white">
                  Total Users
                </div>
                <div className="stat-value">
                  <CountUp end={users.topUsers}/>
                </div>
              </div>
              <FaUserGroup className="mt-6 text-xl" />
            </div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat bg-gradient-to-tr from-teal-600 to-[#23668a] text-white">
            <div className="flex justify-between gap-3">
              <div>
                <div className="stat-title font-bold text-white">
                  Total Reviews
                </div>
                <div className="stat-value">
                  <CountUp end={reviews.topReviews} />
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
