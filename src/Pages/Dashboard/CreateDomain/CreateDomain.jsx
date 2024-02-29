import Swal from "sweetalert2";
import DomainForm from "../../../Component/Shared/DomainForm/DomainForm";
import useAxiosPublic from "../../../Hock/useAxiosPublic";
import { Helmet } from "react-helmet";

const CreateDomain = () => {
  const useAxios = useAxiosPublic();

  const addDomain = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.tld.value;
    const price = form.price.value;
    const category = form.category.value;
    const description = form.description.value;

    const cartItem = { name, price, category, description };
    console.log(cartItem);

    const cartRes = await useAxios.post("/domain", cartItem);
    if (cartRes.data.acknowledged) {
      Swal.fire({
        title: "success!",
        text: "Domain Added",
        icon: "success",
        confirmButtonText: "Cool",
      });
      // refetch()
    }
  };

  return (
    <>
      <Helmet>
        <title>DomainHub | Create Domain</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <div className="md:py-40 md:px-0 lg:px-[5%] bg-firstColor dark:bg-slate-700 ">
        <DomainForm addDomain={addDomain}></DomainForm>
      </div>
    </>
  );
};

export default CreateDomain;
