import Loading from "../../../Component/Loading/Loading";
import Heading from "../../../Component/UI/Heading";
import UseAuth from "../../../Hock/UseAuth";
import useGetAdminState from "../../../Hock/useGetAdminState";
import BarCh from "./BarCh";
import Chart from "./Chart";

const Dashboard = () => {
  const { user } = UseAuth();
  const { stats, isPendingStats } = useGetAdminState();
  const barData = [
    {
      name: "Total domains",
      total: stats.totalDomain,
    },
    {
      name: "Total sold domain",
      total: stats.totalDomainSold,
    },
    {
      name: "Total free tail request",
      total: stats.totalFreeTailRequest,
    },
    {
      name: "Total Review",
      total: stats.totalReview,
    },
    {
      name: "Total users",
      total: stats.totalUser,
    },
  ];
  const pieChartData = [
    { name: "Total domains", value: stats.totalDomain },
    { name: "Total sold domain", value: stats.totalDomainSold },
    { name: "Total free tail request", value: stats.totalFreeTailRequest },
    { name: "Total Review", value: stats.totalReview },
    { name: "Total users", value: stats.totalUser },
  ];
  return (
    <>
      {isPendingStats ? (
        <Loading />
      ) : (
        <div className="px-[5%] bg-firstColor  dark:bg-slate-700 py-10">
          <Heading>Welcome to dashboard {user?.displayName}</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:mt-10 text-white dark:text-sixthColor font-bold">
            <div className="border border-fourthColor dark:border-sixthColor rounded text-center p-5 md:p-10">
              <h1 className="text-6xl">{stats.totalDomain}</h1>
              <h1 className="text-xl">Total domains</h1>
            </div>
            <div className="border border-fourthColor dark:border-sixthColor rounded text-center p-5 md:p-10">
              <h1 className="text-6xl">{stats.totalDomainSold}</h1>
              <h1 className="text-xl">Total sold domains</h1>
            </div>
            <div className="border border-fourthColor dark:border-sixthColor rounded text-center p-5 md:p-10">
              <h1 className="text-6xl">{stats.totalFreeTailRequest}</h1>
              <h1 className="text-xl">Total free tail request</h1>
            </div>
            <div className="border border-fourthColor dark:border-sixthColor rounded text-center p-5 md:p-10">
              <h1 className="text-6xl">{stats.totalReview}</h1>
              <h1 className="text-xl">Total Review</h1>
            </div>
            <div className="border border-fourthColor dark:border-sixthColor rounded text-center p-5 md:p-10">
              <h1 className="text-6xl">{stats.totalUser}</h1>
              <h1 className="text-xl">Total users</h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5 mt-10">
            <Chart pieChartData={pieChartData} />
            <BarCh barData={barData} />
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
