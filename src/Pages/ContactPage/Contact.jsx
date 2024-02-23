import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
// import Container from "../../Component/UI/Container";
import Heading from "../../Component/UI/Heading";
import { useTranslation } from "react-i18next";
// import { useSelector } from "react-redux";

const Contact = () => {
  const { t } = useTranslation();

  // const domain= useSelector(state=>state.domain.domain)
  // console.log('domain Info',domain)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lbhp22p",
        "template_tkss8kk",
        form.current,
        "ElxNmjnOSzL5ADPzH"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your email has been send",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className=" px-2  lg:px-[10%] bg-firstColor dark:bg-[#191919] dark:text-white text-white py-10"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center my-20">
        <Heading>{t("contactUs")}</Heading>
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        <div className=" text-center">
          <div className="text-3xl text-sky-500 flex justify-center">
            <IoCall />
          </div>
          <p className="text-2xl font-bold">{t("call")}</p>
          +8801728306504
        </div>

        <div className=" text-center">
          <div className="text-3xl flex justify-center text-sky-500">
            <MdEmail />
          </div>
          <p className="text-2xl font-bold">{t("contactEmailTitle")}</p>
          <p>domainhub321@gmail.com</p>
        </div>
        <div className=" text-center">
          <div className="text-3xl text-center text-sky-500 flex justify-center">
            {" "}
            <FaLocationDot />
          </div>
          <p className="text-2xl font-bold">{t("location")}</p>
          <p>Brahmanbaria,Bangladesh</p>
        </div>
      </div>

      <div className="border border-secondColor  py-5 lg:m-8 my-4 rounded-xl bg-fourthColor bg-clip-border p-8 text-white shadow-md shadow-black">
        <form ref={form} className="card-body" onSubmit={sendEmail}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-white">
                {t("contactNameTitle")}
              </span>
            </label>
            <input
              type="text"
              placeholder={t("contactName")}
              name="from_name"
              className="input border input-bordered text-black"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-white">
                {t("contactEmailTitle")}
              </span>
            </label>
            <input
              type="email"
              placeholder={t("contactEmail")}
              name="from_email"
              className="input input-bordered text-black"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-white">
                {t("messageTitle")}
              </span>
            </label>
            <textarea
              className="border rounded p-5 text-black"
              name="message"
              placeholder={t("message")}
            />

            <input
              className="btn mt-5 uppercase font-bold text-xl text-white bg-secondColor hover:bg-thirdColor "
              type="submit"
              value={t("send")}
            />
          </div>

          {/* <label>Name</label> 
                    <input type="text" name="from_name" /> */}

          {/* <label>Email</label>
                    <input type="email" name="from_email" /> */}

          {/* <label>Message</label>
                    <textarea name="message" />

                    <input type="submit" value="Send" /> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
