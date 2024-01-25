import Swal from "sweetalert2";
import DomainRow from "../../../Component/Shared/DomainRow/Domainrow";
import useDomain from "../../../Hock/useDomain";
import useAxiosPublic from "../../../Hock/useAxiosPublic";

const AllDomains = () => {
    const [domain,loading,refetch] = useDomain();
    const useAxios = useAxiosPublic();
   

    const handleDeleteItem = (id) => {
        console.log(id);
        Swal
        .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                console.log(id);
                const res = await useAxios.delete(`/domain/${id}`)
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();

                    Swal.fire({
                        title: "Deleted!",
                        text:  " Item has been deleted",
                        icon: "success"
                    });
                }

            }
        });
    }


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
                                 handleDeleteItem={handleDeleteItem}
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