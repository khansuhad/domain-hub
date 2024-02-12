import { SiLivechat } from "react-icons/si";
const LiveChat = () => {
    return (
        <div className="flex flex-col justify-center md:flex-row md:justify-between  lg:justify-center items-center p-3 gap-5 lg:gap-10 bg-slate-300  w-full h-[200px]">
            <p className="text-xl md:text-2xl font-bold text-w">Need help? We are always here for you.</p>

            <button className='btn text-white text-xl font-bold bg-secondColor hover:bg-thirdColor '> Go to Live Chat page <SiLivechat className="text-3xl rounded p-1" /> </button>
        </div>
    );
};

export default LiveChat;