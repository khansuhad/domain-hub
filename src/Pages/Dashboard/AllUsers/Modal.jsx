import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hock/useAxiosSecure";

const Modal = ({ item, refetch, setRefetch }) => {
  const axiosSecure = useAxiosSecure();
  const roleChangeSuccessToast = () =>
    toast.success("This user role change successfully");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role: item?.role,
    },
  });
  const onSubmit = async (data) => {
    const info = {
      role: data.role,
    };
    await axiosSecure.put(`/users-role/${item?._id}`, info).then((res) => {
      console.log(res);
      if (res.data.modifiedCount > 0) {
        roleChangeSuccessToast();
        setRefetch(refetch + 1);
      }
    });
  };
  return (
    <div className="text-white ">
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <button
        onClick={() =>
          document.getElementById(`my_modal_${item._id}`).showModal()
        }
        className={
          item?.role !== "user"
            ? ` bg-thirdColor w-fit hover:bg-fourthColor text-white  border-2 btn-sm rounded-sm`
            : `   w-fit bg-fourthColor hover:bg-thirdColor hover:text-firstColor  dark:text-fifthColor hover:dark:text-firstColor   btn-sm rounded-sm`
        }
      >
        {item?.role}
      </button>

      <dialog id={`my_modal_${item._id}`} className="modal">
        <div className="modal-box bg-fourthColor border shadow-2xl  border-secondColor dark:border-sixthColor text-white dark:text-sixthColor text-lg lg:text-xl  font-bold text-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl text-center mt-10 font-bold">
            Change Role
          </h1>
          <form className="card-body pt-0" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white dark:text-sixthColor">
                  Role
                </span>
              </label>
              <select
                defaultValue={item?.role}
                {...register("role", { required: "Role is required" })}
                className="select select-bordered w-full text-black"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              {errors.role?.message && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.role?.message}
                </p>
              )}
            </div>
            <div className="form-control mt-6 grid grid-cols-2 gap-2 px-[5%] md:px-[25%]">
              <button
                className="bg-thirdColor border-fourthColor hover:bg-fourthColor text-white  btn-sm rounded-sm w-full"
                type="submit"
              >
                Change
              </button>
              <form method="dialog">
                <button className="bg-thirdColor border-fourthColor hover:bg-fourthColor text-white  btn-sm rounded-sm w-full">
                  Close
                </button>
              </form>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

Modal.propTypes = {
  item: PropTypes.object,
  refetch: PropTypes.number,
  setRefetch: PropTypes.func
};

export default Modal;
