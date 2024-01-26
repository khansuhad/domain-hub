import { useSelector } from "react-redux";


const EditDomain = () => {
    const updateDomain = useSelector((state) => state.domain.domain)
    console.log(updateDomain)
    const handleDomain = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.tld.value;
        const price = form.price.value;
        const category = form.category.value;
        const trial = form.trial.value;
        const description = form.description.value;

        const cartItem = { name, price, category, description, trial }
        console.log(cartItem);
    }

    return (

        <div className="p-28 border m-10 bg-[#68809c] lg:h-[900px] rounded-lg ">

            <div>
                <h3 className="text-center text-xl md:text-2xl font-bold  text-white">Update Domain</h3>


                <form className="mt-10" onSubmit={handleDomain}>

                    <div className="m-5 md:flex gap-5 justify-center">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text font-bold">TLD Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="tld" disabled defaultValue={updateDomain.name} placeholder="TLD name" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="price" defaultValue={updateDomain.price} placeholder="Price " className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className="m-5 md:flex gap-5 justify-center">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold"> Description</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="description" defaultValue={updateDomain.description} placeholder="Description" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Free Trial (Month)</span>
                            </label>
                            <label className="input-group">

                            <select name="trial" className="select select-bordered w-full" defaultValue={updateDomain.trial}>

                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
    
                            {/* Add more categories as needed */}
                        </select>
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

                                    <option value="education">health</option>
                                    <option value="coding">commerce</option>
                                    <option value="science">education</option>
                                    <option value="science">government</option>
                                    <option value="science">education</option>
                                    <option value="science">sport</option>
                                    <option value="science">technology</option>
                                    {/* Add more categories as needed */}
                                </select>
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