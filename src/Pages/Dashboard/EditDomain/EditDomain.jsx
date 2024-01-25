import { useSelector } from "react-redux";
import useAxiosPublic from "../../../Hock/useAxiosPublic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const EditDomain = () => {
    const navigate= useNavigate()
    const axiosPublic = useAxiosPublic();
    const updateDomain = useSelector((state) => state.domain.domain)
    console.log(updateDomain)
    const handleUpdate = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.tld.value;
        const price = form.price.value;
        const category = form.category.value;
        const description = form.description.value;

        const updatedData = { name, price, category, description }
        console.log(updatedData);
        const res=await axiosPublic.patch(`/domain/${updateDomain._id}`,updatedData)
        if(res.statusText==="OK")
        {
            toast.success("Domain updated successfully")
            navigate("/dashboard/all-domains")
        }
    }

    return (

        <div className="p-28 border m-10 bg-[#68809c] lg:h-[900px] rounded-lg ">

            <div>
                <h3 className="text-center text-xl md:text-2xl font-bold  text-white">Update Domain</h3>


                <form className="mt-10" onSubmit={handleUpdate}>

                    <div className="m-5 gap-5 justify-center">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">TLD Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="tld" defaultValue={updateDomain.name} placeholder="TLD name" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="price" defaultValue={updateDomain.price} placeholder="Price " className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="m-5 md:flex gap-5 justify-center">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Category type</span>
                            </label>
                            <label className="input-group">
                                <select name="category" className="select select-bordered w-full" defaultValue={updateDomain.category}>
                                    <option value="health">health</option>
                                    <option value="commerce">commerce</option>
                                    <option value="education">education</option>
                                    <option value="government">government</option>
                                    <option value="education">education</option>
                                    <option value="sport">sport</option>
                                    <option value="technology">technology</option>
                                    {/* Add more categories as needed */}
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="m-5 md:flex gap-5 justify-center">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold"> Description</span>
                            </label>
                            <label className="input-group">

                                {/* <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" /> */}

                                <textarea className="w-full" defaultValue={updateDomain.description} name="description" id="" cols="30" rows="10"></textarea>
                            </label>
                        </div>
                    </div>
                    <div className="m-5  gap-5 justify-center mb-5">
                        <input type="submit" value="Update Domain" className="text-white btn btn-block hover:bg-thirdColor bg-fourthColor" />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default EditDomain;