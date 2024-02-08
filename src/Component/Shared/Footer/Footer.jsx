// @ts-nocheck
import { useTranslation } from "react-i18next";
import { GrFacebook, GrTwitter, GrLinkedin } from "react-icons/gr";
const Footer = () => {
  const {t}=useTranslation()
  return (
    <div className=" max-w-full">
 
      <div className="bg-[#010B3C] text-white pt-4 md:pt-10 lg:pt-10">
        <div>
          <div className="flex-row md:flex lg:flex justify-between gap-10 px-5">
            <div className="mb-4">
              <h1 className="text-xl font-semibold mb-2">{t("footerTitle")}</h1>
              <p className="max-w-[40ch] font-medium">
                {t("footerDes")}
              </p>
              <div className="flex gap-5 text-3xl text-[#365486] mt-5 -ml-10 md:mt-10 lg:mt-10">
                <GrFacebook className="cursor-pointer" />
                <GrLinkedin className="cursor-pointer" />
                <GrTwitter className="cursor-pointer" />
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-bold mb-2">{t("navigation")}</h1>
              <div className="flex items-center gap-2">
                <div className="bg-[#365486] w-4 h-4 rounded-full grid place-content-center">
                  <div className="bg-white w-2 h-2 rounded-full"></div>
                </div>
                <p className="cursor-pointer hover:underline font-medium">
                  {t("faq")}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#365486] w-4 h-4 rounded-full grid place-content-center">
                  <div className="bg-white w-2 h-2 rounded-full"></div>
                </div>
                <p className="cursor-pointer hover:underline font-medium">
                  {t("privacy")}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#365486] w-4 h-4 rounded-full grid place-content-center">
                  <div className="bg-white w-2 h-2 rounded-full"></div>
                </div>
                <p className="cursor-pointer hover:underline font-medium">
                  {t("terms")}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-bold mb-2">{t("company")}</h1>
              <div className="flex items-center gap-2">
                <div className="bg-[#365486] w-4 h-4 rounded-full grid place-content-center">
                  <div className="bg-white w-2 h-2 rounded-full"></div>
                </div>
                <p className="cursor-pointer hover:underline font-medium">
                  {t("about")}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#365486] w-4 h-4 rounded-full grid place-content-center">
                  <div className="bg-white w-2 h-2 rounded-full"></div>
                </div>
                <p className="cursor-pointer hover:underline font-medium">
                  {t("team")}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#365486] w-4 h-4 rounded-full grid place-content-center">
                  <div className="bg-white w-2 h-2 rounded-full"></div>
                </div>
                <p className="cursor-pointer hover:underline font-medium">
                  {t("contact")}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-bold mb-2">{t("contactInfo")}</h1>
              <p className="font-medium">{t("locationInfo")}</p>
              <p className="font-medium">+019 123 456 78</p>
              <p className="font-medium">info@domainHub.com</p>
            </div>
          </div>
          <div className="divider"></div>
          <p className="mt-6 pb-7 text-center">
            {t("copyright")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
