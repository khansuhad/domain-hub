import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5 mt-6">
        <button className="btn hover:bg-[#0F1035] hover:text-white border-0 text-[#0F1035]  w-full">
          <FcGoogle className="text-3xl" /> Google
        </button>
        <button className="btn hover:bg-[#0F1035] hover:text-white border-0 text-[#0F1035]  w-full">
          <FaGithub className="text-3xl" /> Github
        </button>
      </div>
      <div className="divider">OR</div>
    </>
  );
};

export default SocialLogin;
