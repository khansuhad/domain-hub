import Loading from "../../../Component/Loading/Loading";
import Container from "../../../Component/UI/Container";
import Heading from "../../../Component/UI/Heading";
import UseAllGetUser from "../../../Hock/UseAllGetUser";
import AllUsersRow from "./AllUsersRow";

const AllUsers = () => {
  const { info, isPendingInfo } = UseAllGetUser();
  return (
    <>
      {isPendingInfo ? (
        <Loading/>
      ) : (
        <Container>
          <div className="px-[5%] dark:text-sixthColor">
            <Heading>Manage all Users</Heading>
            <div className="overflow-x-auto lg:mt-10">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="dark:text-sixthColor">
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
                    <AllUsersRow key={item?._id} item={item} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default AllUsers;
