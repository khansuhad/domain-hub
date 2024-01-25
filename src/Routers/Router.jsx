import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Registration from "../Pages/Authentication/Registration/Registration";
import About from "../Pages/About/About";
import Contact from "../Pages/ContactPage/Contact";
import SearchingDomain from "../Pages/SearchDomainPage/SearchingDomain";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Pages/Dashboard/Profile/Profile";
import MyFreeTailApplication from "../Pages/Dashboard/MyFreeTailApplication/MyFreeTailApplication";
import MyAllDomains from "../Pages/Dashboard/MyAllDomains/MyAllDomains";
import MyAllReviews from "../Pages/Dashboard/MyAllReviews/MyAllReviews";
import Support from "../Pages/Dashboard/Support/Support";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import CreateDomain from "../Pages/Dashboard/CreateDomain/CreateDomain";
import EditDomain from "../Pages/Dashboard/EditDomain/EditDomain";
import AllDomains from "../Pages/Dashboard/AllDomains/AllDomains";
import AllDomainRequest from "../Pages/Dashboard/AllDomainRequest/AllDomainRequest";
import AllFreeTailApplication from "../Pages/Dashboard/AllFreeTailApplication/AllFreeTailApplication";
import AllReviews from "../Pages/Dashboard/AllReviews/AllReviews";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import EditProfile from "../Pages/Dashboard/EditProfile/EditProfile";
import { Review } from "../Pages/Home/Review/Review";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/category.json"),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      // other routes
      {
        path: "/about",
        element: <About />,
      },
     {
      path: "/reviews",
      element: <Review></Review>
     },
      {
        path: "/searchPage",
        element: <SearchingDomain></SearchingDomain>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },

  // dashboard Routes
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      // user paths
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/edit-profile",
        element: <EditProfile />,
      },
      {
        path: "/dashboard/my-free-tail-application",
        element: <MyFreeTailApplication />,
      },
      {
        path: "/dashboard/my-all-domains",
        element: <MyAllDomains />,
      },
      {
        path: "/dashboard/my-all-reviews",
        element: <MyAllReviews />,
      },
      {
        path: "/dashboard/support",
        element: <Support />,
      },
      // admin paths
      {
        path: "/dashboard/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/create-domain",
        element: <CreateDomain />,
      },
      {
        path: "edit-domain",
        element: <EditDomain />,
      },
      {
        path: "/dashboard/all-domains",
        element: <AllDomains />,
      },
      {
        path: "/dashboard/all-domain-requests",
        element: <AllDomainRequest />,
      },
      {
        path: "/dashboard/all-free-tail-applications",
        element: <AllFreeTailApplication />,
      },
      {
        path: "/dashboard/all-Reviews",
        element: <AllReviews />,
      },
      {
        path: "/dashboard/all-users",
        element: <AllUsers />,
      },
    ],
  },
]);

export default Router;
