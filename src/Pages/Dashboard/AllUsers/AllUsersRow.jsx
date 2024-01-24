import PropTypes from "prop-types";
import Modal from "./Modal";

const AllUsersRow = ({ item }) => {
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>{item?.name}</td>
      <td>{item?.email}</td>
      <td>{item?.phone}</td>
      <th>
        <Modal item={item} />
      </th>
    </tr>
  );
};

AllUsersRow.propTypes = {
  item: PropTypes.object,
};

export default AllUsersRow;
