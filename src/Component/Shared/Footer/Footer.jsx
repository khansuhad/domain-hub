// @ts-nocheck
import { GrFacebook, GrTwitter, GrLinkedin } from "react-icons/gr";
const Footer = () => {
  return (
    <div className=" max-w-full">
 
      <div className="bg-[#010B3C] text-white pt-4 md:pt-10 lg:pt-10">
        <div>
          <div className="flex-row md:flex lg:flex justify-between gap-10 px-5">
            <div className="mb-4">
              <h1 className="text-xl font-semibold mb-2">DomainHub</h1>
              <p className="max-w-[40ch] font-medium">
                At DomainHub, we empower your online journey with seamless
                domain hosting solutions. Our commitment to excellence is
                reflected in our top-rated packages, trusted by a vast community
                of users. Join our growing network of satisfied clients and
                discover a world of possibilities for your online presence. Your
                success is our priority. Explore our services today and
                experience the reliability, efficiency, and innovation that
                define DomainHub.
              </p>
              <div className="flex gap-5 text-3xl text-[#365486] mt-5 -ml-10 md:mt-10 lg:mt-10">
                <GrFacebook className="cursor-pointer" />
                <GrLinkedin className="cursor-pointer" />
                <GrTwitter className="cursor-pointer" />
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-bold mb-2">Navigations</h1>
              <div className="flex items-center gap-2">
                <div className="bg-[#365486] w-4 h-4 rounded-full grid place-content-center">
                  <div className="bg-white w-2 h-2 rounded-full"></div>
                </div>
                <p className="cursor-pointer hover:underline font-medium">
                  FAQs
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#365486] w-4 h-4 rounded-full grid place-content-center">
                  <div className="bg-white w-2 h-2 rounded-full"></div>
                </div>
                <p className="cursor-pointer hover:underline font-medium">
                  Privacy Policy
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#365486] w-4 h-4 rounded-full grid place-content-center">
                  <div className="bg-white w-2 h-2 rounded-full"></div>
                </div>
                <p className="cursor-pointer hover:underline font-medium">
                  Terms & Conditions
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-bold mb-2">Company</h1>
              <div className="flex items-center gap-2">
                <div className="bg-[#365486] w-4 h-4 rounded-full grid place-content-center">
                  <div className="bg-white w-2 h-2 rounded-full"></div>
                </div>
                <p className="cursor-pointer hover:underline font-medium">
                  About
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#365486] w-4 h-4 rounded-full grid place-content-center">
                  <div className="bg-white w-2 h-2 rounded-full"></div>
                </div>
                <p className="cursor-pointer hover:underline font-medium">
                  Team
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#365486] w-4 h-4 rounded-full grid place-content-center">
                  <div className="bg-white w-2 h-2 rounded-full"></div>
                </div>
                <p className="cursor-pointer hover:underline font-medium">
                  Contact
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-bold mb-2">Contact Information</h1>
              <p className="font-medium">Mohakhali, Dhaka 1212.</p>
              <p className="font-medium">+019 123 456 78</p>
              <p className="font-medium">info@domainHub.com</p>
            </div>
          </div>
          <div className="divider"></div>
          <p className="mt-6 pb-7 text-center">
            Copyright © 2023 DomainHub. | Powered by Devengers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
