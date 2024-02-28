import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import img from "../../../assets/Authentication/Registration.png";
import UseAuth from "../../../Hock/UseAuth";
import toast from "react-hot-toast";
import axios from "axios";
import { updateProfile } from "firebase/auth";
import useAxiosPublic from "../../../Hock/useAxiosPublic";
import { Helmet } from "react-helmet";
const Registration = () => {
  const [showPassword, isShowPassword] = useState(false);
  const loginSuccessToast = () => toast.success("Account create successfully");

  const [error, setError] = useState("");
  const { createUser, setUser } = UseAuth();

  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);

  const from = "/";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      photo: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data) => {
    setLoading(true);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    console.log(name, email, password);
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
    setError("");
    // create user
    createUser(email, password)
      .then((result) => {
        loginSuccessToast();
        const userInfo = {
          email: email,
          name: name,
          role: "user",
          phone: "",
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
        });
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        setUser({
          displayName: name,
          photoURL: photo,
          email: email,
        });
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch(() => {
        setError("Email already registered");
        setLoading(false);
      });
  };
  return (
    <>
      <Helmet>
        <title>DomainHub | Registration</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="flex justify-evenly text-white items-center min-h-screen bg-firstColor  dark:bg-[#191919] dark:text-[#F5F7F8] p-1 gap-5">
        <img src={img} alt="" className="hidden lg:block max-w-lg" />
        <div className="card shrink-0 w-full max-w-lg shadow-2xl  card-body rounded bg-fourthColor border-[#191919] dark:border-[#F5F7F8] border-2 ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5">
            Registration!
          </h1>
          {error && (
            <p className="text-sm text-red-600 text-center">
              {error ? error : ""}
            </p>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-white dark:text-[#F5F7F8]">
                  Name
                </span>
              </label>
              <input
                {...register("name", {
                  required: "Name is required",
                })}
                placeholder="Name"
                className="input input-bordered text-[#191919] bg-[#F5F7F8] dark:border-[#F5F7F8] dark:text-[#F5F7F8] dark:bg-[#191919] "
              />
              {errors.name?.message && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-white dark:text-[#F5F7F8]">
                  Image
                </span>
              </label>
              <input
                {...register("photo", { required: "Photo is required" })}
                placeholder="Photo "
                type="file"
                className="input input-bordered text-[#191919] bg-[#F5F7F8] dark:border-[#F5F7F8] dark:text-[#F5F7F8] dark:bg-[#191919]  pt-2"
              />
              {errors.photo?.message && (
                <p className="text-xs text-red-600 mt-1">
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
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="email"
                className="input input-bordered text-[#191919] bg-[#F5F7F8] dark:border-[#F5F7F8] dark:text-[#F5F7F8] dark:bg-[#191919] "
              />
              {errors.email?.message && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-white dark:text-[#F5F7F8]">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d).{6,}$/,
                      message:
                        "Your password must be one uppercase, special characters and 6 character longer",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered text-[#191919] bg-[#F5F7F8] dark:border-[#F5F7F8] dark:text-[#F5F7F8] dark:bg-[#191919]  w-full pr-10"
                />
                <span
                  onClick={() => isShowPassword(!showPassword)}
                  className="text-3xl text-[#0F1035] dark:text-[#F5F7F8] cursor-pointer absolute -ml-9 mt-[9px]"
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>
              {errors.password?.message && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              {loading ? (
                <button className="btn bg-secondColor hover:bg-secondColor text-white border-0 cursor-not-allowed">
                  Loading...
                </button>
              ) : (
                <button
                  className="btn bg-secondColor hover:bg-thirdColor text-white border-0"
                  type="submit"
                >
                  Registration
                </button>
              )}
            </div>
          </form>
          <SocialLogin />
          <p className="text-xs text-center mt-6">
            Already have account? Please{" "}
            <Link
              to={"/login"}
              className="underline cursor-pointer font-bold text-white dark:text-[#F5F7F8]"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default Registration;
