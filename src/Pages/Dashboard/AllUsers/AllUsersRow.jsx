import PropTypes from "prop-types";
import Modal from "./Modal";

const AllUsersRow = ({ item , refetch, setRefetch}) => {
  return (
    <tr className="text-white">
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>{item?.name}</td>
      <td>{item?.email}</td>
      <td>{item?.phone}</td>
      <th>
        <Modal item={item} refetch={refetch} setRefetch={setRefetch} />
      </th>
    </tr>
  );
};

AllUsersRow.propTypes = {
  item: PropTypes.object,
  refetch: PropTypes.number,
  setRefetch: PropTypes.func,
};

export default AllUsersRow;
