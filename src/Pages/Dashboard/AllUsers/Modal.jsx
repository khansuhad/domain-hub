import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hock/useAxiosPublic";
import UseAllGetUser from "../../../Hock/UseAllGetUser";

const Modal = ({ item }) => {
  const axiosPublic = useAxiosPublic();
  const roleChangeSuccessToast = () =>
    toast.success("This user role change successfully");
  const { refetchInfo } = UseAllGetUser();

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
    await axiosPublic.put(`/users-role/${item?._id}`, info).then((res) => {
      console.log(res);
      if (res.data.modifiedCount) {
        roleChangeSuccessToast();
        refetchInfo();
      }
    });
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <button
        onClick={() => document.getElementById("my_modal_1").showModal()}
        className={
          item?.role !== "user"
            ? ` bg-thirdColor hover:bg-fourthColor text-white  border-2 btn-sm rounded-sm`
            : ` border-fourthColor bg-firstColor hover:bg-fourthColor hover:text-firstColor  dark:text-fifthColor hover:dark:text-firstColor  outline-none border-2 btn-sm rounded-sm`
        }
      >
        {item?.role}
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h1 className="text-xl sm:text-2xl lg:text-3xl text-center mt-10 font-bold">
            Change Role
          </h1>
          <form className="card-body pt-0" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select
                defaultValue={item?.role}
                {...register("role", { required: "Role is required" })}
                className="select select-bordered w-full"
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
                className="border-fourthColor bg-firstColor hover:bg-fourthColor hover:text-firstColor  outline-none border-2 btn-sm rounded-sm"
                type="submit"
              >
                Change
              </button>
              <form method="dialog">
                <button className="bg-thirdColor border-fourthColor hover:bg-fourthColor text-white border-2 btn-sm rounded-sm w-full">
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
};

export default Modal;
