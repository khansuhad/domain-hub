
import UseAuth from "../../../Hock/UseAuth";
import useSingleFreeTrialUser from "../../../Hock/useSingleFreeTrialUser";


const MyFreeTailApplication = () => {
    const [singleFreeTrialUser] = useSingleFreeTrialUser()
    console.log(singleFreeTrialUser);
    const {user}=UseAuth()
    return (
        <>
         <div
                className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
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
                    {
                       singleFreeTrialUser.map(users => <>
                            <tbody>
                                <tr>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {user?.displayName}
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
                                    <td className="p-4 border-b border-blue-gray-50">
                                        {users?.approve?<p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Accepted
                                        </p>
                                        :
                                        <p className="block  font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Pending
                                        </p>
                                        }
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