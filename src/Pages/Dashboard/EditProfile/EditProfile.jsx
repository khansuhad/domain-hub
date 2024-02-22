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

const EditProfile = () => {
  const { info, isPendingInfo } = useGetUser();
  const { user, isLoading } = UseAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const updateProfileSuccessToast = () =>
    toast.success("Profile update successfully");
  const updateProfileErrorToast = () => toast.error("Profile can't update");
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues: {
      name: info?.name,
      photo: user?.photoURL,
      email: user?.email,
      phoneNumber: info?.phone,
      presentAddress: info?.presentAddress,
      permanentAddress: info?.permanentAddress,
      nationality: info?.nationality,
    },
  });
  const onSubmit = async (data) => {
    const name = data.name;
    const phoneNumber = data.phoneNumber;
    const presentAddress = data.presentAddress;
    const permanentAddress = data.permanentAddress;
    const nationality = data.nationality;
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
    const photo = res.data.data.display_url;
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
        } else {
          updateProfileErrorToast();
        }
      });
    });
  };
  return (
    <>
      {isPendingInfo || isLoading ? (
        <Loading />
      ) : (
        <div className="max-w-5xl w-full mx-auto p-5 md:p-10 text-center ">
          <div className="p-5 md:p-10 border shadow-2xl dark:bg-slate-700 bg-fourthColor text-white  border-secondColor dark:border-sixthColor dark:text-sixthColor text-lg lg:text-xl  font-bold w-full my-10">
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
                  {...register("photo", {
                    required: "Name is required",
                  })}
                  type="file"
                  className="input input-bordered text-black bg-[#F5F7F8] dark:border-[#F5F7F8] dark:text-[#F5F7F8] dark:bg-[#191919]  pt-2"
                />

                {errors.photo?.message && (
                  <p className="text-xs text-red-600 mt-1 text-start">
                    {errors.photo?.message}
                  </p>
                )}
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
                <button
                  className="btn bg-secondColor hover:bg-thirdColor text-white border-0"
                  type="submit"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
