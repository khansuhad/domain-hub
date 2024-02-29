


import useSingleFreeTrialUser from "../../../Hock/useSingleFreeTrialUser";
import { IoDiamond } from "react-icons/io5";;
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { domainDetails } from "../../../features/domain/domainSlice";
import useDomain from "../../../Hock/useDomain";
import FreeTrialCountDown from "../../../Component/StatusCountDown/FreeTrialCountDown";


const MyFreeTailApplication = () => {
    const [singleFreeTrialUser, , refetch] = useSingleFreeTrialUser()
    console.log(singleFreeTrialUser);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [domain, loading] = useDomain()



    const handleDetails = (FreeDomain) => {

        const filterDomain = domain?.find(dom => dom?.name === FreeDomain)
        console.log(filterDomain);
        const updatedFilterDomain = {
            ...filterDomain,
            approve: true

        };

        dispatch(domainDetails(updatedFilterDomain))
        navigate("/domainDetails")
    }
    return (
        <>
            <div
                className="overflow-x-auto p-5 ">
                  {/* Section title */}
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
                                    TLD
                                </p>
                            </th>

                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm lg:text-xl font-bold antialiased leading-none text-white opacity-70">
                                    Application
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm lg:text-xl font-bold antialiased leading-none text-white opacity-70">
                                    Your Domain
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm lg:text-xl font-bold antialiased leading-none text-white opacity-70">
                                    Status
                                </p>
                            </th>
                        </tr>
                    </thead>
                    {
                        singleFreeTrialUser.map((users, inx) => <>
                            <tbody className="text-white">
                                <tr>
                                    <td className="p-4 ">
                                        <p className="block font-sans text-sm lg:text-xl  antialiased font-normal leading-normal text-blue-gray-900">
                                            {inx + 1}
                                        </p>
                                    </td>
                                    <td className="p-4 ">
                                        <p className="block font-sans text-sm lg:text-xl  antialiased font-normal leading-normal text-blue-gray-900">
                                            {users.userName}
                                        </p>
                                    </td>

                                    <td className="p-4 ">
                                        <p className="block font-sans text-sm lg:text-xl  antialiased font-normal leading-normal text-blue-gray-900">
                                            {users?.domainName}
                                        </p>
                                    </td>
                                    <td className="p-4  flex items-center gap-3">
                                        {users?.approve == "Accepted" && <p className="block cursor-pointer text-black text-center lg:text-xl lg:font-semibold bg-green-400 p-2 rounded-sm font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Accepted
                                        </p>}

                                        {users?.approve == "Pending" && <p className="block  font-sans text-sm text-center text-black lg:text-xl lg:font-semibold bg-yellow-300 p-2 rounded-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Pending
                                        </p>
                                        }

                                        {users?.approve == "Rejected" && <p className="block cursor-pointer text-black text-center lg:text-xl lg:font-semibold bg-red-400 p-2 rounded-sm  font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Rejected
                                        </p>
                                        }
                                    </td>

                                    {users?.claimDomain ?
                                        <>
                                            <td className="p-4 border-b border-blue-gray-50  items-center gap-3">
                                                <p data-ripple-dark="true" className="flex justify-center items-center gap-3 lg:w-[50%]  cursor-pointer text-black text-center lg:text-xl lg:font-semibold bg-secondColor p-2 rounded-sm   font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                    {users?.claimDomain}
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50 w-[300px] mx-auto items-center gap-3">
                                                <p data-ripple-dark="true" className="flex  justify-center items-center gap-3 cursor-pointer text-black  lg:text-xl lg:font-semibold  bg-secondColor p-2 rounded-sm   font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                    <FreeTrialCountDown trialDate={users?.claimDate}></FreeTrialCountDown>
                                                </p>
                                            </td>
                                        </>
                                        :
                                        <td className="p-4 border-b border-blue-gray-50  items-center gap-3">
                                            {users?.approve == "Accepted" && <p data-ripple-dark="true" onClick={() => { handleDetails(users?.domainName) }} className="flex items-center gap-3 lg:w-[50%] cursor-pointer text-black text-center lg:text-xl lg:font-semibold bg-secondColor p-2 rounded-sm hover:bg-thirdColor  font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                Claim <IoDiamond></IoDiamond>
                                            </p>}
                                        </td>
                                    }

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