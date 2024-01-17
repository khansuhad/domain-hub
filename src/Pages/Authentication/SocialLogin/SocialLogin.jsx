import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <>
      <div className="divider divider-info text-[#191919] dark:text-[#F5F7F8] mt-5">OR</div>
      <div className="grid grid-cols-2 gap-5 my-6">
        <button className="btn bg-[#F5F7F8] dark:bg-[#191919] dark:border-[#F5F7F8] dark:text-[#F5F7F8] hover:bg-thirdColor dark:hover:bg-thirdColor hover:text-white text-thirdColor  w-full">
          <FcGoogle className="text-3xl" /> Google
        </button>
        <button className="btn bg-[#F5F7F8] dark:bg-[#191919] dark:border-[#F5F7F8] dark:text-[#F5F7F8] hover:bg-thirdColor dark:hover:bg-thirdColor hover:text-white text-thirdColor  w-full">
          <FaGithub className="text-3xl" /> Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
