


import useSingleFreeTrialUser from "../../../Hock/useSingleFreeTrialUser";
import { MdDelete } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import useAxiosPublic from "../../../Hock/useAxiosPublic";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { domainDetails } from "../../../features/domain/domainSlice";
import useDomain from "../../../Hock/useDomain";

const MyFreeTailApplication = () => {
    const [singleFreeTrialUser, , refetch] = useSingleFreeTrialUser()
    console.log(singleFreeTrialUser);
    const axiosPublic = useAxiosPublic()

    const handleDelete = (email) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (res) => {
            if (res.isConfirmed) {
                axiosPublic.delete(`/freeTrialUsers?email=${email}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: " Item has been deleted",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });


    };
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [domain, loading] = useDomain()



    const handleDetails = (FreeDomain) => {

        const filterDomain = domain?.find(dom => dom?.name === FreeDomain)
        console.log(filterDomain);
        const updatedFilterDomain = {
            ...filterDomain,
            approve:true

        };

        dispatch(domainDetails(updatedFilterDomain))
        navigate("/domainDetails")
    }
    return (
        <>
            <div
                className="overflow-x-auto p-5">
                <h2 className="text-2xl font-bold text-center text-white my-10">My Free Trial Application</h2>
                <table className="w-full text-left  table-auto min-w-max border-2">
                    <thead className="bg-fourthColor rounded">
                        <tr>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm lg:text-xl font-bold antialiased leading-none text-white opacity-70">
                                    No
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm lg:text-xl font-bold antialiased leading-none text-white opacity-70">
                                    Name
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm lg:text-xl font-bold antialiased leading-none text-white opacity-70">
                                    Email
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm lg:text-xl font-bold antialiased leading-none text-white opacity-70">
                                    Domain
                                </p>
                            </th>

                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm lg:text-xl font-bold antialiased leading-none text-white opacity-70">
                                    Application
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm lg:text-xl font-bold antialiased leading-none text-white opacity-70">
                                    Delete
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm lg:text-xl font-bold antialiased leading-none text-white opacity-70">

                                </p>
                            </th>

                        </tr>
                    </thead>
                    {
                        singleFreeTrialUser.map((users, inx) => <>
                            <tbody className="text-white">
                                <tr>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm lg:text-xl  antialiased font-normal leading-normal text-blue-gray-900">
                                            {inx + 1}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm lg:text-xl  antialiased font-normal leading-normal text-blue-gray-900">
                                            {users.userName}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm lg:text-xl  antialiased font-normal leading-normal text-blue-gray-900">
                                            {users?.email}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm lg:text-xl  antialiased font-normal leading-normal text-blue-gray-900">
                                            {users?.domainName}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50 flex items-center gap-3">
                                        {users?.approve == "Accepted" && <p className="block cursor-pointer text-black text-center lg:text-xl lg:font-semibold bg-green-400 p-2 rounded-md font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Accepted
                                        </p>}

                                        {users?.approve == "Pending" && <p className="block  font-sans text-sm text-center text-black lg:text-xl lg:font-semibold bg-yellow-300 p-2 rounded-md antialiased font-normal leading-normal text-blue-gray-900">
                                            Pending
                                        </p>
                                        }

                                        {users?.approve == "Rejected" && <p className="block cursor-pointer text-black text-center lg:text-xl lg:font-semibold bg-red-400 p-2 rounded-md  font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Rejected
                                        </p>
                                        }

                                    </td>

                                    <td className="p-4 border-b border-blue-gray-50">
                                        <button onClick={() => { handleDelete(users?.email) }} className="text-2xl text-red-500"><MdDelete></MdDelete></button>
                                    </td>

                                    <td className="p-4 border-b border-blue-gray-50  items-center gap-3">
                                        {users?.approve == "Accepted" && <p data-ripple-dark="true" onClick={() => { handleDetails(users?.domainName)}} className="flex items-center gap-3 lg:w-[50%] cursor-pointer text-black text-center lg:text-xl lg:font-semibold bg-yellow-500 p-2 rounded-md  font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Claim <IoDiamond></IoDiamond>
                                        </p>}
                                    </td>


                                </tr>

                            </tbody>
                        </>)
                    }
                </table>
            </div>
        </>
    );
};

export default MyFreeTailApplication;