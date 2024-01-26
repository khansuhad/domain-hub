/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateDomain } from "../../../features/domain/domainSlice";



const DomainRow = ({ domianItem, index,handleDeleteItem }) => {
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const { name, price, category, _id } = domianItem;
    const handleUpdate = () => {
        navigate("/dashboard/edit-domain")
        dispatch(updateDomain(domianItem))
    }
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

            <td onClick={handleUpdate}>
                <FaEdit className="md:ml-5 cursor-pointer" />
            </td>
            <th>
            <MdDelete  onClick={() => handleDeleteItem(_id)} className="text-2xl md:ml-5 text-red-500  cursor-pointer" />
            </th>
        </tr>

    );
};
export default DomainRow;