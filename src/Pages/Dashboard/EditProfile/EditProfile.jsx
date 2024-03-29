import { useForm } from "react-hook-form";
import axios from "axios";
import useGetUser from "../../../Hock/UseGetUser";
import UseAuth from "../../../Hock/UseAuth";
import { updateProfile } from "firebase/auth";
import useAxiosSecure from "../../../Hock/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loading from "../../../Component/Loading/Loading";
import Heading from "../../../Component/UI/Heading";
import { useState } from "react";
import { Helmet } from "react-helmet";

const EditProfile = () => {
  const { info, isPendingInfo } = useGetUser();
  const { user, isLoading } = UseAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const updateProfileSuccessToast = () =>
    toast.success("Profile update successfully");
  const updateProfileErrorToast = () => toast.error("Profile can't update");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: info?.name,
      email: user?.email,
      phoneNumber: info?.phone,
      presentAddress: info?.presentAddress,
      permanentAddress: info?.permanentAddress,
      nationality: info?.nationality,
    },
  });
  const onSubmit = async (data) => {
    setLoading(true);
    const name = data.name;
    const phoneNumber = data.phoneNumber;
    const presentAddress = data.presentAddress;
    const permanentAddress = data.permanentAddress;
    const nationality = data.nationality;
    const img = data.photo[0];

    let photo;
    if (img) {
      // image upload to imgbb and then get an url
      const imageFile = { image: data.photo[0] };
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        imageFile,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
      photo = res.data.data.display_url;
    } else {
      photo = info?.photo;
    }
    await updateProfile(user, {
      displayName: name,
      photoURL: photo,
    }).then(() => {
      const updateIfo = {
        name,
        phone: phoneNumber,
        email: user?.email,
        presentAddress,
        permanentAddress,
        nationality,
      };
      console.log(updateIfo);
      axiosSecure.put(`/users?${user?.email}`, updateIfo).then((res) => {
        console.log("update n database", res);
        if (res.status === 200) {
          navigate("/dashboard/profile");
          updateProfileSuccessToast();

          setLoading(false);
        } else {
          updateProfileErrorToast();

          setLoading(false);
        }
      });
    });
  };
  return (
    <>
      <Helmet>
        <title>DomainHub | Edit Profile</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      {isPendingInfo || isLoading ? (
        <Loading />
      ) : (
        <div className="bg-firstColor">
          <div className="max-w-5xl w-full mx-auto p-5 md:p-10 text-center dark:bg-slate-700 bg-fourthColor my-5">
            <div className="p-5 md:p-10 border shadow-2xl  text-white  border-secondColor dark:border-sixthColor dark:text-sixthColor text-lg lg:text-xl  font-bold w-full">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Heading>Update Profile</Heading>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-white dark:text-[#F5F7F8]">
                      Name
                    </span>
                  </label>
                  <input
                    {...register("name")}
                    defaultValue={info?.name}
                    className="input input-bordered 
                  text-black bg-[#F5F7F8] dark:border-[#F5F7F8] dark:text-[#F5F7F8] dark:bg-[#191919] "
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-white dark:text-[#F5F7F8]">
                      nationality
                    </span>
                  </label>
                  <input
                    {...register("nationality")}
                    defaultValue={info?.nationality}
                    className="input input-bordered 
                  text-black bg-[#F5F7F8] dark:border-[#F5F7F8] dark:text-[#F5F7F8] dark:bg-[#191919] "
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-white dark:text-[#F5F7F8]">
                      Permanent address
                    </span>
                  </label>
                  <input
                    {...register("permanentAddress")}
                    defaultValue={info?.permanentAddress}
                    className="input input-bordered 
                  text-black bg-[#F5F7F8] dark:border-[#F5F7F8] dark:text-[#F5F7F8] dark:bg-[#191919] "
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-white dark:text-[#F5F7F8]">
                      Present address
                    </span>
                  </label>
                  <input
                    {...register("presentAddress")}
                    defaultValue={info?.presentAddress}
                    className="input input-bordered 
                  text-black bg-[#F5F7F8] dark:border-[#F5F7F8] dark:text-[#F5F7F8] dark:bg-[#191919] "
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-white dark:text-[#F5F7F8]">
                      Image
                    </span>
                  </label>
                  <input
                    {...register("photo")}
                    type="file"
                    className="input input-bordered text-black bg-[#F5F7F8] dark:border-[#F5F7F8] dark:text-[#F5F7F8] dark:bg-[#191919]  pt-2"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-white dark:text-[#F5F7F8]">
                      Email
                    </span>
                  </label>
                  <input
                    readOnly
                    defaultValue={user?.email}
                    className="input input-bordered text-black bg-[#F5F7F8] dark:border-[#F5F7F8] dark:text-[#F5F7F8] dark:bg-[#191919] "
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-white dark:text-[#F5F7F8]">
                      Phone number
                    </span>
                  </label>
                  <input
                    {...register("phoneNumber")}
                    defaultValue={info?.phone}
                    className="input input-bordered text-black bg-[#F5F7F8] dark:border-[#F5F7F8] dark:text-[#F5F7F8] dark:bg-[#191919] "
                  />
                </div>
                <div className="form-control mt-6">
                  {loading ? (
                    <button
                      className="btn bg-secondColor hover:bg-secondColor text-white border-0 cursor-not-allowed"
                      type="submit"
                    >
                      Loading...
                    </button>
                  ) : (
                    <button
                      className="btn bg-secondColor hover:bg-thirdColor text-white border-0"
                      type="submit"
                    >
                      Update Profile
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
