
import "./AllDomainRequest.css"

const AllDomainRequest = () => {
    // state manage
//   const [allDomainRequest , setAllDomainRequest] = useState([]);
const tableStyle = {
  
}

    return (
        <div className="bg-firstColor rounded min-h-screen py-10 ">
        <div className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-10 text-[#191919] dark:text-[#F5F7F8] font-roboto ">All Domain Request</div>
          <div className="w-[90%] mx-auto">
            <div className="overflow-x-auto">
  <table className="table text-2xl"  >
    {/* head */}
    <thead>
      <tr className="text-2xl text-black">
        <th>Domain</th>
        <th>Domain name</th>
        <th>Email</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
    //  mapping condition
        <tr className="text-xl font-medium "  >
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-semibold">Nm:10</div>
            </div>
          </div>
        </td>
        <td>
         <h1>Fahim.com</h1>
          
        </td>
        <td>suhadahmodkhan@gmail.com</td>
        <th>
          <h1>Pending...</h1>
        </th>
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

export default AllDomainRequest;