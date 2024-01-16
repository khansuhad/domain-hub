import Container from "../../../Component/UI/Container";
import Heading from "../../../Component/UI/Heading";
import Description from "../../../Component/UI/Description";
import image from "../../../assets/FreeTrialSectionImages/Domain-free-trial.png"

const FreeTrial = () => {
    return (

        <>
            <Container>
                <Heading>Freetrial</Heading>
                <Description>description</Description>
            </Container>

{/* Free Trial Section Start */}

<section className="flex lg:flex-row flex-col items-center justify-between lg:px-[15%]">

<div>
    <img src={image} className="lg:w-[750px]" alt="" />
</div>

<div className=" h-screen flex items-center justify-center">

    <div className="max-w-md p-8 bg-white shadow-md rounded-md">

        <h1 className="text-4xl font-bold text-blue-500 mb-6">Free Trial Application</h1>

        <form className="mb-4">
            <label  className="block text-gray-700 text-sm font-semibold mb-2">Email Address:</label>
            <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required/>
        </form>

        <p className="text-gray-700 mb-4">
            Sign up for a free trial and explore our amazing features!.
        </p>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Apply for Free Trial
        </button>

    </div>

</div>

</section>

{/* Free Trial Section Finish */}


        </>
    );
};

export default FreeTrial;