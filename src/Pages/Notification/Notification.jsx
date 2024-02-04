import { MdDelete } from "react-icons/md";
import Container from "../../Component/UI/Container";
import Heading from "../../Component/UI/Heading";
import useNotifications from "../../Hock/UseNotifications";
// import useAxiosPublic from "../../Hock/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hock/useAxiosSecure";



const Notification = () => {
    const useAxios = useAxiosSecure();
    // const useAxios = useAxiosPublic();
    const {notification , refetchNotification} = useNotifications();
    console.log(notification);
    const handleDelete = (id) => {
        console.log(id);
        Swal
        .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                console.log(id);
                const res = await useAxios.delete(`/notifications/${id}`)
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    

                    Swal.fire({
                        title: "Deleted!",
                        text:  " Item has been deleted",
                        icon: "success"
                    });
                    refetchNotification();
                }

            }
        });
    }


    return (
        <div className="lg:w-[80%] mx-auto ">
           <div className="bg-fourthColor">
           <Container>
            <Heading className="text-7xl text-white">Notifications</Heading>
            <hr /><br />
            <button className="btn btn-primary ml-10"> All </button>

          <div>
            {
                notification?.map(noti =>   <div key={noti?._id} className="bg-sixthColor m-5 p-5 rounded flex justify-between items-center">
                <div>
                <h1 className="font-bold">Notification Title</h1>
                <h1 className="font-medium">{noti?.messages}</h1>
                </div>
              <div>
              <MdDelete

                        onClick={() => handleDelete(noti?._id)}
                        className="text-red-500 ml-2 cursor-pointer text-xl"
                      />
              </div>
            </div>)
            }
          </div>
        </Container>
           </div>
           
        </div>
    );
};

export default Notification;