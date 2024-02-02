// import UseAuth from "../../../Hock/UseAuth";
import useTruePayment from "../../../Hock/useTruePayment";
import ReviewModal from "./reviewModal";

const MyAllDomains = () => {
  // state manage
  //   const [allDomainRequest , setAllDomainRequest] = useState([]);
  const [trueCarts, refetch] = useTruePayment();

  return (
    <div className="bg-firstColor dark:bg-slate-700 rounded min-h-screen py-10 ">
      <div className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-10 text-white dark:text-[#F5F7F8] font-roboto ">
        My All Domains
      </div>
      <div className="w-[90%] mx-auto">
        <div className="overflow-x-auto">
          <table className="table text-2xl">
            {/* head */}
            <thead>
              <tr className="text-2xl text-white">
                <th>Domain</th>
                <th>Domain name</th>
                <th>Email</th>
                <th>Price</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              {trueCarts?.map((trueCart, index) => (
                <tr key={trueCart?._id} className="text-xl font-medium text-white">
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-semibold">{index + 1}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h1>{trueCart?.name}</h1>
                  </td>
                  <td>{trueCart?.email}</td>
                  <th>
                    <h1>{trueCart?.price}</h1>
                  </th>
                {  trueCart?.review == "true" ? <p className=
                "ml-6 mt-2">Done</p> : <th>
                    <label
                      htmlFor={index + 1}
                      className="btn btn-outline btn-sm text-white bg-secondColor "
                    >
                      Review
                    </label>
                    <ReviewModal
                      trueCart={trueCart}
                      index={index}
                      refetch={refetch}
                    ></ReviewModal>
                  </th> 
            }
                
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAllDomains;
