import useFreeTrial from "../../../Hock/useFreeTrial";
import swal from "sweetalert";
import { MdDelete } from "react-icons/md";
import useAxiosPublic from "../../../Hock/useAxiosPublic";
import Swal from "sweetalert2";
import moment from "moment";
import { Helmet } from "react-helmet";
import { ClimbingBoxLoader } from "react-spinners";

const AllFreeTailApplication = () => {
  const [freeTrialUsers,,refetch] = useFreeTrial();
  console.log(freeTrialUsers);
  const axiosPublic = useAxiosPublic();
  const handleApprove = (email) => {
    axiosPublic
      .put(`/freeTrialUsers?email=${email}&status=Accepted`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          swal("Application approve", "sent", "success");
          refetch();
          const messages = "Your domain trail request had approved";
          const status = "unread";
          const timeSpace = moment();
          const domainName = freeTrialUsers.domainName;
          axiosPublic
            .post("/notifications", {
              messages,
              timeSpace,
              domainName,
              status,
              email,
            })
            .then((res) => {
              console.log(res.data);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDismiss = (email) => {
    axiosPublic
      .put(`/freeTrialUsers?email=${email}&status=Rejected`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          swal("Application Rejected", "sent", "success");
          refetch();
          const messages = "Your domain trail request had dismiss";
          const status = "unread";
          const timeSpace = moment();
          const domainName = freeTrialUsers.domainName;
          axiosPublic
            .post("/notifications", {
              messages,
              timeSpace,
              domainName,
              status,
              email,
            })
            .then((res) => {
              console.log(res.data);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (res) => {
      if (res.isConfirmed) {
        axiosPublic.delete(`/freeTrialUsers?email=${email}`).then((res) => {
          console.log(res.data);

          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: " Item has been deleted",
              icon: "success",
            });
            refetch();
            const messages =
              "Your domain trail request had deleted from admin panel";
            const status = "unread";
            const timeSpace = moment();
            const domainName = freeTrialUsers.domainName;
            axiosPublic
              .post("/notifications", {
                messages,
                timeSpace,
                domainName,
                status,
                email,
              })
              .then((res) => {
                console.log(res.data);
              });
          }
        });
      }
    });
  };
 
  return (
    <>
      <Helmet>
        <title>DomainHub | Free Trails</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="overflow-x-auto p-5 text-white bg-firstColor min-h-screen ">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl text-center my-10 ">
          Manage Free Trial Application
        </h2>
        <table className="w-full text-left table-auto min-w-max border-2 ">
          <thead className="bg-fourthColor   border-2">
            <tr>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm lg:text-xl font-bold antialiased  leading-none text-blue-gray-900 opacity-70">
                  No
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm lg:text-xl font-bold antialiased  leading-none text-blue-gray-900 opacity-70">
                  Name
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm lg:text-xl font-bold antialiased  leading-none text-blue-gray-900 opacity-70">
                  Email
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm lg:text-xl font-bold antialiased  leading-none text-blue-gray-900 opacity-70">
                  TLD
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm lg:text-xl font-bold antialiased  leading-none text-blue-gray-900 opacity-70">
                  Application
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm lg:text-xl font-bold antialiased  leading-none text-blue-gray-900 opacity-70">
                  Delete
                </p>
              </th>
            </tr>
          </thead>
          {freeTrialUsers?.map((users, inx) => (
            <>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm lg:text-2xl  antialiased font-normal leading-normal text-blue-gray-900">
                      {inx + 1}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm lg:text-2xl  antialiased font-normal leading-normal text-blue-gray-900">
                      {users?.userName}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm lg:text-2xl  antialiased font-normal leading-normal text-blue-gray-900">
                      {users?.email}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm lg:text-2xl  antialiased font-normal leading-normal text-blue-gray-900">
                      {users?.domainName}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 flex gap-3">
                    {users?.approve === "Accepted" && (
                      <p
                        onClick={() => {
                          handleApprove(users.email);
                        }}
                        className="block cursor-pointer bg-green-400 text-black p-2 rounded-md font-sans text-sm antialiased font-semibold leading-normal text-blue-gray-900"
                      >
                        Approved
                      </p>
                    )}
                    {users?.approve === "Pending" && (
                      <p
                        onClick={() => {
                          handleApprove(users.email);
                        }}
                        className="block cursor-pointer bg-yellow-400 text-black p-2 rounded-md font-sans text-sm antialiased font-semibold leading-normal text-blue-gray-900"
                      >
                        Approve
                      </p>
                    )}
                    {users?.approve === "Pending" && (
                      <p
                        onClick={() => {
                          handleDismiss(users.email);
                        }}
                        className="block cursor-pointer bg-red-400 p-2 text-black rounded-md  font-sans text-sm antialiased font-semibold leading-normal text-blue-gray-900"
                      >
                        Dismiss
                      </p>
                    )}
                    {users?.approve === "Rejected" && (
                      <p
                        onClick={() => {
                          handleDismiss(users.email);
                        }}
                        className="block cursor-pointer bg-red-400 p-2 text-black rounded-md  font-sans text-sm antialiased font-semibold leading-normal text-blue-gray-900"
                      >
                        Dismissed
                      </p>
                    )}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <button
                      onClick={() => {
                        handleDelete(users?.email);
                      }}
                      className="text-2xl text-red-500"
                    >
                      <MdDelete></MdDelete>
                    </button>
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
