import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";
import UseAuth from "../../../Hock/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const loginSuccessToast = () => toast.success("Login successfully");
  const loginErrorToast = () => toast.error("Something went wrong");
  const { singInWithGoogle, singInWithGithub } = UseAuth();
  const navigate = useNavigate();
  const loc = useLocation();

  const from = loc.state?.from?.pathname || "/";
  const handleSocialLogin = (media) => {
    media()
      .then(() => {
        navigate(from, { replace: true });
        loginSuccessToast();
      })
      .catch(() => {
        loginErrorToast();
      });
  };
  return (
    <>
      <div className="divider divider-info text-[#191919] dark:text-[#F5F7F8] mt-5">
        OR
      </div>
      <div className="grid grid-cols-2 gap-5 my-6">
        <button
          onClick={() => handleSocialLogin(singInWithGoogle)}
          className="btn bg-[#F5F7F8] dark:bg-[#191919] dark:border-[#F5F7F8] dark:text-[#F5F7F8] hover:bg-thirdColor dark:hover:bg-thirdColor hover:text-white text-thirdColor  w-full"
        >
          <FcGoogle className="text-3xl" /> Google
        </button>
        <button
          onClick={() => handleSocialLogin(singInWithGithub)}
          className="btn bg-[#F5F7F8] dark:bg-[#191919] dark:border-[#F5F7F8] dark:text-[#F5F7F8] hover:bg-thirdColor dark:hover:bg-thirdColor hover:text-white text-thirdColor  w-full"
        >
          <FaGithub className="text-3xl" /> Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
