import { updateProfile } from "firebase/auth";
import { FaBackward } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../Firebase/Firebase.config";


const UpdateProfile = () => {
    const userInfo = useSelector((state) => state.user.currentUser)
    console.log(userInfo);

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const phone = form.phone.value;
        console.log(name, photo, phone);

        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo, phoneNumber: phone

        }).then(() => {
            // Profile updated!
            console.log('profile updated');
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Updated your profile",
                showConfirmButton: false,
                timer: 1500
            });
            // ...
        }).catch((error) => {
            console.log(error.message);
            // An error occurred
            // ...
        });
    }

    return (
        <div className="pt-20 flex mb-2  justify-center">
            <div className="max-w-md bg-slate-300  w-full h-[750px] py-24 px-5 mt-5  rounded-md shadow-md dark:bg-slate-700 dark:text-white">
                <div className="flex justify-center">

                    <div className="avatar offline">
                        <div className="w-24 rounded-full">
                            <img src={userInfo?.photoURL
                            } alt="user photo" />
                        </div>
                    </div>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-center">Profile Update</h2>
                <form onSubmit={handleUpdate} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold dark:text-white">User Name</span>
                        </label>
                        <input type="text" defaultValue={userInfo?.displayName} placeholder="Your name" name='name' className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold dark:text-white">Photo </span>
                        </label>
                        <input name='photo' placeholder="Photo "
                            type="file"
                            className="input input-bordered text-[#191919] bg-[#F5F7F8] dark:border-[#F5F7F8] dark:text-[#F5F7F8] dark:bg-[#191919]  pt-2" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold dark:text-white">Phone Number </span>
                        </label>
                        <input type="text" name='phone' defaultValue={userInfo?.phoneNumber} placeholder="phone number" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">

                        <input className="btn  bg-thirdColor hover:bg-fourthColor text-white" type="submit" value="Update" />
                    </div>

                </form>

                <div className="flex mt-2">
                    <Link to='/myProfile'><button className="btn text-cen"><FaBackward></FaBackward> Back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;