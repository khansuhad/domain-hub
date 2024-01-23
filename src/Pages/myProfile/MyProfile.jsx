import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const MyProfile = () => {
    const userInfo = useSelector((state) => state.user.currentUser)
    console.log(userInfo);


    return (
        <div className="pt-20 mb-2 flex justify-center ">
            <div className="max-w-md w-full h-[650px] py-24 px-5 mt-5 bg-slate-300 rounded-md shadow-md dark:bg-slate-700 dark:text-white">
                <h2 className="text-3xl font-bold mb-6 text-center">My Profile </h2>
                <div className="flex justify-center">

                    <div className="avatar offline">
                        <div className="w-24 rounded-full">
                            <img src={userInfo?.photoURL
                            } alt="user photo" />
                        </div>
                    </div>
                </div>


                <div className=" flex justify-center items-center">
                    <div>
                        <p className=" text-xl mt-5"><span className="text-xl font-bold">Name:</span>{userInfo?.displayName}</p>
                        <p className=" text-xl mt-5"> <span className="text-xl font-bold">Email:</span> {userInfo?.email}</p>
                        <p className=" text-xl mt-5"> <span className="text-xl font-bold">Phone:</span> 017-28306504</p>
                    </div>
                </div>







                <div className="flex justify-center mt-28">
                    <Link to='/updateProfile'><button className="btn  bg-thirdColor hover:bg-fourthColor text-white">Update Profile</button></Link>
                </div>


            </div>
        </div>
    );
};

export default MyProfile;