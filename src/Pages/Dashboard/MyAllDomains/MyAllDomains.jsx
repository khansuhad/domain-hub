// import UseAuth from "../../../Hock/UseAuth";
import useCart from "../../../Hock/useCart";

const MyAllDomains = () => {
  // state manage
  //   const [allDomainRequest , setAllDomainRequest] = useState([]);

  // const { user } = UseAuth();
  const [carts] = useCart();
  console.log(carts);
  const payment = true;
  return (
    <div className="bg-firstColor rounded min-h-screen py-10 ">
      <div className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-10 text-[#191919] dark:text-[#F5F7F8] font-roboto ">
        My All Domains
      </div>
      <div className="w-[90%] mx-auto">
        <div className="overflow-x-auto">
          <table className="table text-2xl">
            {/* head */}
            <thead>
              <tr className="text-2xl text-black">
                <th>Domain</th>
                <th>Domain name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                //  mapping condition
                <tr className="text-xl font-medium ">
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-semibold">1</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h1>Fahim.com</h1>
                  </td>
                  <td>suhadahmodkhan@gmail.com</td>
                  <th>
                    <h1>pending</h1>
                  </th>
                  <th>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      disabled={!payment}
                      className="btn btn-outline btn-smtn"
                      onClick={() =>
                        document.getElementById("my_modal_4").showModal()
                      }
                    >
                      Review
                    </button>
                    <dialog id="my_modal_4" className="modal">
                      <div className="modal-box w-11/12 max-w-xl">
                        <div className="modal-action">
                          <form method="dialog" className="w-full">
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">User Name</span>
                              </label>
                              <input
                                type="text"
                                name="userName"
                                className="input input-bordered"
                                required
                                readOnly
                              />
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">
                                  Rating Out Of 5
                                </span>
                              </label>
                              <input
                                type="number"
                                placeholder="Input Your Rating"
                                name="rating"
                                className="input input-bordered"
                              />
                            </div>
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">
                                  Any Feedback?
                                </span>
                              </label>
                              <textarea
                                type="text"
                                className="textarea textarea-bordered"
                                name="feedback"
                                placeholder="Tell Your Feedback"
                              ></textarea>
                            </div>

                            <button
                              type="submit"
                              className="btn btn-outline btn-sm mt-4 w-full"
                            >
                              Review
                            </button>
                            <button className="btn btn-outline btn-sm ml-[500px] mt-5">
                              X
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </th>
                  {/* {
          request?.status === "Pending" && <th>
            <button className="btn bg-gradient-to-r from-red-800 to-pink-700 border-none text-white">Accept</button>
          </th>
         } */}
                </tr>
              }
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAllDomains;
