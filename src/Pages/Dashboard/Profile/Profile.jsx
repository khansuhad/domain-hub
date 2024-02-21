import { Link } from "react-router-dom";
import Loading from "../../../Component/Loading/Loading";
import UseAuth from "../../../Hock/UseAuth";
import useGetUser from "../../../Hock/UseGetUser";
import Heading from "../../../Component/UI/Heading";

const Profile = () => {
  const { info, isPendingInfo } = useGetUser();
  const { user, isLoading } = UseAuth();
  return (
    <>
      {isPendingInfo || isLoading ? (
        <Loading />
      ) : (
        <div className="  dark:bg-slate-700 bg-firstColor  p-5 md:p-10">
          <Heading>Welcome to your profile </Heading>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-10 md:my-20">
            <div className="col-span-2 flex flex-col justify-center items-center p-5 bg-fourthColor md:p-10 border shadow-2xl  border-secondColor dark:border-sixthColor text-white dark:text-sixthColor text-lg lg:text-xl  font-bold text-center">
              <div className="flex-grow">
                <div className=" max-w-[200px] w-full mx-auto">
                  <img
                    src={user?.photoURL}
                    alt={`image of ${info?.name}`}
                    className="w-full rounded-xl "
                  />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl my-3 font-bold">
                  {info?.name}
                </h1>
                <p className="uppercase">
                  {info?.premium && "Premium "}
                  {info?.role}
                </p>
              </div>
              {info?.premium !== true && (
                <Link
                  to={"/dashboard/make-premium-checkout"}
                  className="btn bg-thirdColor hover:bg-fourthColor text-white border-0 mt-5"
                >
                  Get premium
                </Link>
              )}
            </div>
            <div className="col-span-3 flex flex-col p-5 bg-fourthColor md:p-10 border shadow-2xl  border-secondColor dark:border-sixthColor text-white dark:text-sixthColor
           text-lg lg:text-xl"
            >
              <div className="flex-grow">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-5">
                  Details information
                </h1>
                <p className="my-1">Name: {info?.name ? info?.name : "N/A"}</p>
                <p className="my-1">Role: {info?.role ? info?.role : "N/A"}</p>
                <p className="my-1">
                  Present address:{" "}
                  {info?.presentAddress ? info?.presentAddress : "N/A"}
                </p>
                <p className="my-1">
                  Permanent address:{" "}
                  {info?.permanentAddress ? info?.permanentAddress : "N/A"}
                </p>
                <p className="my-1">
                  Nationality: {info?.nationality ? info?.nationality : "N/A"}
                </p>
                <p className="my-1">
                  Phone: {info?.phone ? info?.phone : "N/A"}
                </p>
                <p className="my-1">
                  Email: {info?.email ? info?.email : "N/A"}
                </p>
                <p className="my-1">
                  Point: {info?.point ? info?.point : "N/A"}
                </p>
              </div>

              <Link
                to={"/dashboard/edit-profile"}
                className="btn bg-thirdColor hover:bg-fourthColor text-white border-0 mt-5"
              >
                Edit profile
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
