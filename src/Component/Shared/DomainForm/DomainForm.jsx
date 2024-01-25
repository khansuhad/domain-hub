/* eslint-disable react/prop-types */


const DomainForm = ({addDomain}) => {


    return (

        <div className="p-28 border m-10 bg-[#68809c] lg:h-[900px] rounded-lg ">

            <div>
                <h3 className="text-center text-xl md:text-2xl font-bold  text-white">Add New Domain</h3>


                <form className="mt-10" onSubmit={addDomain}>

                    <div className="m-5 gap-5 justify-center">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">TLD Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="tld" placeholder="TLD name" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="price" placeholder="Price " className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="m-5 md:flex gap-5 justify-center">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Category type</span>
                            </label>
                            <label className="input-group">
                                <select name="category" className="select select-bordered w-full">

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

                                <textarea className="w-full" name="description" id="" cols="30" rows="10"></textarea>
                            </label>
                        </div>

                    </div>


                    <div className="m-5  gap-5 justify-center mb-5">
                        <input type="submit" value="Add Domain" className="text-white btn btn-block hover:bg-thirdColor bg-fourthColor" />
                    </div>

                </form>

            </div>
        </div>

    );
};

export default DomainForm;