import DomainRow from "../../../Component/Shared/DomainRow/Domainrow";
import useDomain from "../../../Hock/useDomain";

const AllDomains = () => {
    const [domain] = useDomain();
    console.log(domain);


    return (
        <div className="border m-10 dark:text-white dark:bg-slate-700 rounded-lg">
            <h2 className="text-center my-5 "> <span className=" font-bold"> Our Total Domain: </span>{domain?.length}</h2>
            <div className="overflow-x-auto p-5">
                <table className="table">
                    {/* head */}
                    <thead className="md:text-xl font-bold dark:text-white">
                        <tr>
                            
                            <th>No</th>
                            <th>TLD</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            domain?.map((domianItem, index) => <DomainRow
                                 key={domianItem._id}
                                 domianItem={domianItem}
                                 index={index}
                                 ></DomainRow>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default AllDomains;