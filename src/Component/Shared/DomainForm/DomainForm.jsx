/* eslint-disable react/prop-types */

import Heading from "../../UI/Heading";


const DomainForm = ({addDomain}) => {
    return (

        <div className="lg:p-28 border m-10 bg-fourthColor lg:h-[900px] rounded-lg py-5">

            <div>
                <h3 className="text-center text-xl md:text-2xl font-bold  text-white "><Heading>Add New Domain</Heading></h3>


                <form className="mt-10" onSubmit={addDomain}>

                    <div className="m-5 gap-5 justify-center">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold text-white">TLD Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text " name="tld" placeholder="TLD name" className="input input-bordered w-full text-black" />
                            </label>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-white">Price</span>
                            </label>
                            <label className="input-group">

                                <input type="number" name="price" placeholder="Price " className="input input-bordered w-full text-black" />
                            </label>
                        </div>
                    </div>
                    <div className="m-5 md:flex gap-5 justify-center">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-white">Category type</span>
                            </label>
                            <label className="input-group">
                                <select name="category" className="select select-bordered w-full text-black ">
                                    <option  className="bg-thirdColor dark:bg-slate-700 dark:text-white  text-black font-semibold" value="health">health</option>
                                    <option  className="bg-thirdColor dark:bg-slate-700 dark:text-white  text-black font-semibold" value="commerce">commerce</option>
                                    <option  className="bg-thirdColor dark:bg-slate-700 dark:text-white  text-black font-semibold" value="education">education</option>
                                    <option  className="bg-thirdColor dark:bg-slate-700 dark:text-white  text-black font-semibold" value="government">government</option>
                                    <option  className="bg-thirdColor dark:bg-slate-700 dark:text-white  text-black font-semibold" value="education">education</option>
                                    <option  className="bg-thirdColor dark:bg-slate-700 dark:text-white  text-black font-semibold" value="sport">sport</option>
                                    <option  className="bg-thirdColor dark:bg-slate-700 dark:text-white  text-black font-semibold" value="technology">technology</option>
                                    {/* Add more categories as needed */}
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="m-5 md:flex gap-5 justify-center">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-white"> Description</span>
                            </label>
                            <label className="input-group">

                                {/* <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" /> */}

                                <textarea className="w-full text-black  pl-2" name="description" id="" cols="30" rows="10"></textarea>
                            </label>
                        </div>
                    </div>
                    <div className="m-5  gap-5 justify-center mb-5">
                        <input type="submit" value="Add Domain" className="text-white btn btn-block hover:bg-thirdColor border-none bg-secondColor" />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default DomainForm;