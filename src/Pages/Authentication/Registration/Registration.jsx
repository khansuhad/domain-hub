import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import img from "../../../assets/Authentication/Registration.png";
const Registration = () => {
  const [showPassword, isShowPassword] = useState(false);
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
  const onSubmit = (data) => {
    const name = data.name;
    const photo = data.photo;
    const email = data.email;
    const password = data.password;
    console.log(name, photo, email, password);
  };
  return (
    <div className="flex justify-evenly items-center min-h-screen bg-[#DCF2F1] p-5 gap-5">
    <img src={img} alt="" className="hidden lg:block max-w-lg"/>
      <div className="card shrink-0 w-full max-w-lg shadow-2xl border-[#0F1035] border-2 card-body rounded ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Registration!
        </h1>
        <SocialLogin />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Name</span>
            </label>
            <input
              {...register("name", {
                required: "Name is required",
              })}
              placeholder="Name"
              className="input input-bordered"
            />
            {errors.name?.message && (
              <p className="text-xs text-red-600 mt-1">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Image</span>
            </label>
            <input
              {...register("photo", { required: "Photo is required" })}
              placeholder="Photo "
              type="file"
              className="input input-bordered pt-2"
            />
            {errors.photo?.message && (
              <p className="text-xs text-red-600 mt-1">
                {errors.photo?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Email</span>
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
              className="input input-bordered"
            />
            {errors.email?.message && (
              <p className="text-xs text-red-600 mt-1">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Password</span>
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
                className="input input-bordered w-full pr-10"
              />
              <span
                onClick={() => isShowPassword(!showPassword)}
                className="text-3xl text-[#0F1035] cursor-pointer absolute -ml-9 mt-[9px]"
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
            <button
              className="btn bg-[#0F1035] hover:bg-[#365486] text-white border-0"
              type="submit"
            >
              Registration
            </button>
          </div>
        </form>
        <p className="text-xs text-center mt-6">
          Already have account? Please{" "}
          <Link
            to={"/login"}
            className="underline cursor-pointer font-bold text-[#0F1035]"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
