import Swal from "sweetalert2";
import DomainForm from "../../../Component/Shared/DomainForm/DomainForm";
import useAxiosPublic from "../../../Hock/useAxiosPublic";



const CreateDomain = () => {
    const useAxios = useAxiosPublic();

    const addDomain = async(e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.tld.value;
        const price = form.price.value;
        const category = form.category.value;
        const description = form.description.value;

        const cartItem = { name, price, category, description }
        console.log(cartItem);

        const cartRes = await useAxios.post('/domain', cartItem)
        if (cartRes.data.acknowledged) {
            Swal.fire({
                title: 'success!',
                text: 'Domain Added',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            // refetch()

        }
    }

    return (
        <div className="md:my-40 md:mx-0 lg:mx-[5%]">
           <DomainForm addDomain={addDomain}></DomainForm>
        </div>
    );
};

export default CreateDomain;