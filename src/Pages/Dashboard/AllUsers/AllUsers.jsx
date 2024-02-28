import { useEffect, useState } from "react";
import Loading from "../../../Component/Loading/Loading";
import Heading from "../../../Component/UI/Heading";
import AllUsersRow from "./AllUsersRow";
import useAxiosSecure from "../../../Hock/useAxiosSecure";
import { Helmet } from "react-helmet";

const AllUsers = () => {
  const [info, setTeams] = useState([]);
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [countLoading, setCountLoading] = useState(true);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [refetch, setRefetch] = useState(0);

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    setLoading(true);
    axiosSecure.get("/user-count").then((res) => {
      setCount(res.data.count);
      setCountLoading(false);
    });
    axiosSecure
      .get(`/users?page=${currentPage}&size=${itemPerPage}`)
      .then((res) => {
        setTeams(res.data);
        setLoading(false);
      });
  }, [axiosSecure, currentPage, itemPerPage, refetch]);
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
  return (
    <>
      <Helmet>
        <title>DomainHub | All Users</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      {loading || countLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="px-[5%] dark:text-sixthColor bg-firstColor dark:bg-slate-700 py-5">
            <Heading>Manage all Users</Heading>
            <div className="overflow-x-auto lg:mt-10">
              <table className="table border">
                {/* head */}
                <thead>
                  <tr className=" text-white border-2 bg-fourthColor dark:text-sixthColor">
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {info?.map((item) => (
                    <AllUsersRow
                      key={item?._id}
                      item={item}
                      refetch={refetch}
                      setRefetch={setRefetch}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 my-10">
              <button
                onClick={handlePrevPage}
                className={`bg-thirdColor w-fit hover:bg-fourthColor text-white  border-2 btn-sm rounded-sm`}
              >
                Prev
              </button>
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
              <button
                onClick={handleNextPage}
                className={`bg-thirdColor w-fit hover:bg-fourthColor text-white  border-2 btn-sm rounded-sm`}
              >
                Next
              </button>
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
        </div>
      )}
    </>
  );
};

export default AllUsers;
