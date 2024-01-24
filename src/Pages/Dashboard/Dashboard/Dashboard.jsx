import Container from "../../../Component/UI/Container";
import Heading from "../../../Component/UI/Heading";
import UseAuth from "../../../Hock/UseAuth";
import BarCh from "./BarCh";
import Chart from "./Chart";

const Dashboard = () => {
  const { user } = UseAuth();

  const barData = [
    {
      name: "Total domains",
      total: 5,
    },
    {
      name: "Total domain request",
      total: 5,
    },
    {
      name: "Total free tail request",
      total: 5,
    },
    {
      name: "Total Review",
      total: 5,
    },
    {
      name: "Total users",
      total: 5,
    },
  ];
  const pieChartData = [
    { name: "Total domains", value: 5 },
    { name: "Total domain request", value: 5 },
    { name: "Total free tail request", value: 5 },
    { name: "Total Review", value: 5 },
    { name: "Total users", value: 5 },
  ];
  return (
    <Container>
      <div className="px-[5%]">
        <Heading>Welcome to dashboard {user?.displayName}</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:mt-10 text-fifthColor dark:text-sixthColor font-bold">
          <div className="border border-fourthColor dark:border-sixthColor rounded text-center p-5 md:p-10">
            <h1 className="text-6xl">5</h1>
            <h1 className="text-xl">Total domains</h1>
          </div>
          <div className="border border-fourthColor dark:border-sixthColor rounded text-center p-5 md:p-10">
            <h1 className="text-6xl">5</h1>
            <h1 className="text-xl">Total domain request</h1>
          </div>
          <div className="border border-fourthColor dark:border-sixthColor rounded text-center p-5 md:p-10">
            <h1 className="text-6xl">5</h1>
            <h1 className="text-xl">Total free tail request</h1>
          </div>
          <div className="border border-fourthColor dark:border-sixthColor rounded text-center p-5 md:p-10">
            <h1 className="text-6xl">5</h1>
            <h1 className="text-xl">Total Review</h1>
          </div>
          <div className="border border-fourthColor dark:border-sixthColor rounded text-center p-5 md:p-10">
            <h1 className="text-6xl">5</h1>
            <h1 className="text-xl">Total users</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5 mt-10">
          <Chart pieChartData={pieChartData} />
          <BarCh barData={barData} />
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
