import axios from "axios";
import useFreeTrial from "../../../Hock/useFreeTrial";
import swal from "sweetalert";

const AllFreeTailApplication = () => {
  const [freeTrialUsers, , refetch] = useFreeTrial();
  console.log(freeTrialUsers);

  const handleApprove = (email) => {
    axios
      .put(`http://localhost:3000/freeTrialUsers?email=${email}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          swal("Application approve", "sent", "success");
          refetch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDismiss = (email) => {
    axios
      .patch(`http://localhost:3000/freeTrialUsers?email=${email}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          swal("Application dismiss", "sent", "success");
          refetch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Name
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Email
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Domain
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Application
                </p>
              </th>
            </tr>
          </thead>
          {freeTrialUsers.map((users) => (
            <>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {users.userName}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {users?.email}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {users?.domainName}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 flex gap-3">
                    {users.approve ? (
                      <p
                        onClick={() => {
                          handleApprove(users.email);
                        }}
                        className="block cursor-pointer bg-red-400 p-2 rounded-md font-sans text-sm antialiased font-semibold leading-normal text-blue-gray-900"
                      >
                        Approved
                      </p>
                    ) : (
                      <p
                        onClick={() => {
                          handleApprove(users.email);
                        }}
                        className="block cursor-pointer bg-red-400 p-2 rounded-md font-sans text-sm antialiased font-semibold leading-normal text-blue-gray-900"
                      >
                        Approve
                      </p>
                    )}
                    <p
                      onClick={() => {
                        handleDismiss(users.email);
                      }}
                      className="block cursor-pointer bg-yellow-400 p-2 rounded-md  font-sans text-sm antialiased font-semibold leading-normal text-blue-gray-900"
                    >
                      Dismiss
                    </p>
                  </td>
                </tr>
              </tbody>
            </>
          ))}
        </table>
      </div>
    </>
  );
};

export default AllFreeTailApplication;
