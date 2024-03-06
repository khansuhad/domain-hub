import { PiContactlessPaymentThin } from "react-icons/pi";
import { NavLink } from "react-router-dom";
const ContactSection = () => {
    return (
        <div className="flex flex-col justify-center md:flex-row md:justify-between  lg:justify-center items-center p-3 gap-5 lg:gap-10 bg-slate-300  dark:bg-slate-900 dark:text-white w-full h-[200px]">
            <p className="text-xl md:text-2xl font-bold text-w">Need help? We are always here for you.</p>

            <NavLink to="/contact" > <button className='btn text-white  text-xl font-bold bg-secondColor hover:bg-thirdColor '> Go to Contact page <PiContactlessPaymentThin  className="text-3xl rounded p-1 text-white" /> </button>
            </NavLink>
        </div>
    );
};

export default ContactSection;