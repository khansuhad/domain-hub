import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import img from "../../../assets/Authentication/login.png";
import toast from "react-hot-toast";
import UseAuth from "../../../Hock/UseAuth";
const Login = () => {
  const [showPassword, isShowPassword] = useState(false);
  const loginSuccessToast = () => toast.success("Login successfully");
  const { loginUser, resetPassword } = UseAuth();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loc = useLocation();

  const from = loc.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(email, password);
    setError("");
    setPassword("");
    // login user
    loginUser(email, password)
      .then(() => {
        navigate(from, { replace: true });
        loginSuccessToast();
      })
      .catch(() => {
        setError("Email or password don't match");
      });
  };

  const handleResetPassword = () => {
    setError("");
    setPassword("");
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      setPassword("Please type a valid email address");
    } else {
      resetPassword(email).then(() => {
        setPassword("Check email and set new password");
      });
    }
  };
  return (
    <div className=" flex justify-evenly items-center min-h-screen bg-firstColor text-white dark:bg-[#191919] dark:text-[#F5F7F8] p-5 gap-5">
      <img src={img} alt="" className="hidden lg:block max-w-lg" />
      <div className="card shrink-0 w-full max-w-lg shadow-2xl card-body rounded bg-fourthColor border-[#191919] dark:border-[#F5F7F8] border-2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5">
          Login now!
        </h1>
        {error && (
          <p className="text-sm text-red-600 text-center">
            {error ? error : ""}
          </p>
        )}
        {password && (
          <p className="text-sm text-red-600 text-center">
            {password ? password : ""}
          </p>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-white dark:text-[#F5F7F8]">
                Email
              </span>
            </label>

            <input
              {...register("email", {
                required: "Email is required",
                onChange: (e) => setEmail(e.target.value),
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="email"
              className="input input-bordered text-[#191919] bg-[#F5F7F8] dark:border-[#F5F7F8] dark:text-[#F5F7F8] dark:bg-[#191919]"
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
                })}
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered w-full pr-10  text-[#191919] bg-[#F5F7F8] dark:border-[#F5F7F8] dark:text-[#F5F7F8] dark:bg-[#191919] "
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
            <label className="label">
              <a
                onClick={handleResetPassword}
                href="#"
                className="label-text-alt link link-hover  text-white dark:text-[#F5F7F8]"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              className="btn bg-secondColor hover:bg-thirdColor text-white border-0"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <SocialLogin />
        <p className="text-xs text-center mt-6">
          New here? Please{" "}
          <Link
            to={"/registration"}
            className="underline cursor-pointer font-bold text-white dark:text-[#F5F7F8]"
          >
            Registration
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
