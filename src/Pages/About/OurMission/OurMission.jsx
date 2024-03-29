import Heading from "../../../Component/UI/Heading";
import Description from "../../../Component/UI/Description";
import Container from "../../../Component/UI/Container";
import { GiPowerLightning } from "react-icons/gi";
import { GiProcessor } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { TbArrowGuide } from "react-icons/tb";
import { RiCommunityFill } from "react-icons/ri";
import { LiaConnectdevelop } from "react-icons/lia";
import { useTranslation } from "react-i18next";
const OurMission = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* Our Mission start */}
      <section className="bg-firstColor dark:bg-[#191919] text-white">
        <div>
          <Container>
            <Heading>{t("mission")}</Heading>

            <Description>{t("exploreMission")}</Description>
          </Container>
        </div>

        <div className="flex ml-6 justify-center gap-5 lg:gap-40 dark:text-white  w-[95%] mx-auto">
          <div className="lg:text-3xl text-sm lg:space-y-10 space-y-5">
            <div className="flex items-center gap-3 hover:text-black hover:bg-yellow-50 hover:rounded-full hover:p-1 cursor-pointer">
              <GiPowerLightning></GiPowerLightning>
              <p>{t("mission1")}</p>
            </div>
            <div className="flex items-center gap-3 hover:text-black hover:bg-yellow-50 hover:rounded-full hover:p-1 cursor-pointer">
              <GiProcessor></GiProcessor>
              <p>{t("mission2")}</p>
            </div>
            <div className="flex items-center gap-3 hover:text-black hover:bg-yellow-50 hover:rounded-full hover:p-1 cursor-pointer">
              <MdOutlineSecurity></MdOutlineSecurity>
              <p>{t("mission3")}</p>
            </div>
          </div>

          <div className="divider lg:divider-horizontal"></div>

          <div className="lg:text-3xl text-sm lg:space-y-10 space-y-5 ">
            <div className="flex items-center gap-3 hover:text-black hover:bg-yellow-50 hover:rounded-full hover:p-1 cursor-pointer">
              <TbArrowGuide></TbArrowGuide>
              <p>{t("mission4")}</p>
            </div>
            <div className="flex items-center gap-3 hover:text-black hover:bg-yellow-50 hover:rounded-full hover:p-1 cursor-pointer">
              <RiCommunityFill></RiCommunityFill>
              <p>{t("mission5")}</p>
            </div>
            <div className="flex items-center gap-3 hover:text-black hover:bg-yellow-50 hover:rounded-full hover:p-1 cursor-pointer">
              <LiaConnectdevelop></LiaConnectdevelop>
              <p>{t("mission6")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Mission finish */}
    </>
  );
};

export default OurMission;
