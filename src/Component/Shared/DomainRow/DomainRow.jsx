/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const DomainRow = ({domianItem, handleDeleteItem, index}) => {
    const {name, price,category, _id} =domianItem;

    return (
        <tr>
            <td>
                {index + 1}
            </td>
            <td>
                {name}
            </td>
            <td>{price}</td>
            <td>{category}</td>
            <th>
            <FaEdit className="md:ml-5 cursor-pointer" />
            </th>
            <th>
            <MdDelete  onClick={() => handleDeleteItem(_id)} className="text-2xl md:ml-5 text-red-500  cursor-pointer" />
            </th>
        </tr>

    );
};

export default DomainRow;