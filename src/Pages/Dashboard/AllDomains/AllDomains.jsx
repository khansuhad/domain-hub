import Swal from "sweetalert2";
import DomainRow from "../../../Component/Shared/DomainRow/DomainRow";
import useDomain from "../../../Hock/useDomain";
import useAxiosPublic from "../../../Hock/useAxiosPublic";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hock/useAxiosSecure";
import Loading from "../../../Component/Loading/Loading";
import { MdKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";


const AllDomains = () => {
    const [domain,loading,refetch] = useDomain();
    const useAxios = useAxiosPublic();

    const [info, setTeams] = useState([]);
    console.log(info);
    const [count, setCount] = useState(null);
    const [load, setLoading] = useState(true);
    const [countLoading, setCountLoading] = useState(true);
    const [itemPerPage, setItemPerPage] = useState(50);
    console.log(itemPerPage);
    const [currentPage, setCurrentPage] = useState(0);
    console.log(currentPage);

    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        setLoading(true);
        axiosSecure.get("/domain-count").then((res) => {
            setCount(res.data.count);
            setCountLoading(false);
        });
        axiosSecure
            .get(`/domain?page=${currentPage}&size=${itemPerPage}`)
            .then((res) => {
                setTeams(res.data);
                setLoading(false);
            });
    }, [axiosSecure, currentPage, itemPerPage]);
    const numberOfPages = Math.ceil(count / itemPerPage);
    const pages = [...Array(numberOfPages).keys()];
    console.log(pages);
    const handleItemParPageChange = (e) => {
        setItemPerPage(Number(e.target.value));
        setCurrentPage(0);
    };
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleDeleteItem = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                console.log(id);
                const res = await useAxios.delete(`/domain/${id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: " Item has been deleted",
                        icon: "success",
                    });
                }
            }
        });
    };

  return (
    <>
      {load|| countLoading ||loading ? (
        <Loading />
      ) : (
        <div className=" p-10 dark:text-white text-white dark:bg-slate-700 bg-firstColor py-5">
          <h2 className="text-center my-5 ">
            {" "}
            <span className=" font-bold"> Our Total Domain: </span>
            {domain?.length}
          </h2>
          <div className="overflow-x-auto p-5">
            <table className="table border">
              {/* head */}
              <thead className="md:text-xl font-bold text-white border-2 bg-fourthColor dark:text-white">
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
                {info?.map((domianItem, index) => (
                  <DomainRow
                    key={domianItem._id}
                    domianItem={domianItem}
                    handleDeleteItem={handleDeleteItem}
                    index={index}
                  ></DomainRow>
                ))}
              </tbody>
            </table>
          </div>
          {/* paigination add */}
          <div className="flex flex-wrap justify-center items-center gap-2 my-10">
            <div
              onClick={handlePrevPage}
              className={`bg-thirdColor w-fit hover:bg-fourthColor text-white flex justify-center items-center border-2 btn-sm rounded-sm`}
            >
              <MdOutlineKeyboardDoubleArrowLeft />
              Prev
            </div>
            {pages?.map((page, i) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`${
                  currentPage === page
                    ? "bg-thirdColor w-fit hover:bg-fourthColor text-white  border-2 btn-sm rounded-sm"
                    : " w-fit bg-fourthColor hover:bg-thirdColor hover:text-firstColor  dark:text-fifthColor hover:dark:text-firstColor   btn-sm rounded-sm"
                }`}
              >
                {++i}
              </button>
            ))}
            <div
              onClick={handleNextPage}
              className={`bg-thirdColor w-fit hover:bg-fourthColor text-white  flex justify-center items-center border-2 btn-sm rounded-sm`}
            >
              Next <MdKeyboardDoubleArrowRight />
            </div>
            <select
              value={itemPerPage}
              onChange={handleItemParPageChange}
              className="select select-primary w-fit text-primary"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default AllDomains;
