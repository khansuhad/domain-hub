import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lbhp22p', 'template_tkss8kk', form.current, 'ElxNmjnOSzL5ADPzH')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id="contact" className="card  px-[10%] dark:bg-[#191919] dark:text-white ">
            <h2 className="text-2xl md:text-3xl font-bold text-center my-20">Contact me</h2>
            <div className="flex flex-col md:flex-row justify-center gap-10">
                <div className=" text-center">
                    <div className="text-3xl text-sky-500 flex justify-center"><IoCall /></div>
                    <p className="text-2xl font-bold">Call</p>
                    +8801728306504

                </div>

                <div className=" text-center">
                    <div className="text-3xl flex justify-center text-sky-500"><MdEmail /></div>
                    <p className="text-2xl font-bold">Email</p>
                    <p>domainhub321@gmail.com</p>

                </div>
                <div className=" text-center">
                    <div className="text-3xl text-center text-sky-500 flex justify-center"> <FaLocationDot /></div>
                    <p className="text-2xl font-bold">Location</p>
                    <p>Brahmanbaria,Bangladesh</p>

                </div>
            </div>

            <div className="border border-fuchsia-500  p-5 m-8 rounded-xl bg-gradient-to-tr from-teal-600 to-[#23668a] bg-clip-border p-8 text-white shadow-md shadow-gray-500">
                <form ref={form} className="card-body" onSubmit={sendEmail}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-white">Name</span>
                        </label>
                        <input type="text" placeholder="Your name" name="from_name" className="input border input-bordered text-black" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-white">Email</span>
                        </label>
                        <input type="email" placeholder="Your email" name="from_email" className="input input-bordered text-black" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-white">Message</span>
                        </label>
                        <textarea className="border rounded p-5 text-black" name="message" placeholder="Write Your message"  />


                        <input className="btn mt-5 uppercase font-bold text-xl text-white bg-thirdColor hover:bg-fourthColor " type="submit" value="Send" />
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