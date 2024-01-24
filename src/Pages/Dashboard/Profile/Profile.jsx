import { Link } from "react-router-dom";
import useGetUser from "../../../Hock/UseGetUser";
import UseAuth from "../../../Hock/UseAuth";
import Loading from "../../../Component/Loading/Loading";

const Profile = () => {
  const { info, isPendingInfo } = useGetUser();
  const { user, isLoading } = UseAuth();
  return (
    <>
      {isPendingInfo || isLoading ? (
        <Loading/>
      ) : (
        <div className=" flex flex-col justify-center items-center h-screen p-5 md:p-10 text-center">
          <div className=" flex flex-col justify-center items-center p-5 md:p-10 border shadow-2xl  border-secondColor dark:border-sixthColor dark:text-sixthColor text-lg lg:text-xl  font-bold">
            <div className=" max-w-[200px] w-full">
              <img
                src={user?.photoURL}
                alt={`image of ${info?.name}`}
                className="w-full rounded-xl"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl my-3 font-bold">
              {info?.name}
            </h1>
            <p>{info?.role}</p>
            <p className="my-1">{info?.phone}</p>
            <p>{user?.email}</p>
            <Link
              to={"/dashboard/edit-profile"}
              className="btn bg-thirdColor hover:bg-fourthColor text-white border-0 mt-5"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
