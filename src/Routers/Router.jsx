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
import AllFreeTailApplication from "../Pages/Dashboard/AllFreeTailApplication/AllFreeTailApplication";
import AllReviews from "../Pages/Dashboard/AllReviews/AllReviews";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import EditProfile from "../Pages/Dashboard/EditProfile/EditProfile";
// import { Review } from "../Pages/Review/Review";
import PrivateRoute from "./PrivateRoute";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Checkout from "../Pages/Dashboard/Checkout/Checkout";
import CategoryDetails from "../Pages/Home/PriceByCategory/CategoryDetails";
import Notification from "../Pages/Notification/Notification";
import UnreadNotification from "../Pages/Notification/UnreadNotification/UnreadNotification";
import MakePremiumCheckout from "../Pages/Dashboard/MakePremiumCheckout/MakePremiumCheckout";


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
      // {
      //   path: "/reviews",
      //   element: <Review></Review>,
      // },
      {
        path: "/notifications",
        element: <Notification/>,
      },
      {
        path: "/unreadnotifications",
        element: <UnreadNotification/>,
      },
      {
        path: "/searchPage",
        element: <SearchingDomain></SearchingDomain>,
      },
      {
        path: "/domainDetails",
        element: <CategoryDetails></CategoryDetails>
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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // user paths
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/make-premium-checkout",
        element: (
          <PrivateRoute>
            <MakePremiumCheckout />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/edit-profile",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-free-tail-application",
        element: (
          <PrivateRoute>
            <MyFreeTailApplication />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-all-domains",
        element: (
          <PrivateRoute>
            <MyAllDomains />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-all-reviews",
        element: (
          <PrivateRoute>
            <MyAllReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/support",
        element: (
          <PrivateRoute>
            <Support />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myCart",
        element: (
          <PrivateRoute>
            <MyCart/>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/checkout",
        element: (
          <PrivateRoute>
            <Checkout/>
          </PrivateRoute>
        ),
      },
      // admin paths
      {
        path: "/dashboard/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/create-domain",
        element: (
          <PrivateRoute>
            <CreateDomain />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/edit-domain",
        element: (
          <PrivateRoute>
            <EditDomain />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-domains",
        element: (
          <PrivateRoute>
            <AllDomains />
          </PrivateRoute>
        ),
      },
      
    
      {
        path: "/dashboard/all-free-tail-applications",
        element: (
          <PrivateRoute>
            <AllFreeTailApplication />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-Reviews",
        element: (
          <PrivateRoute>
            <AllReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-users",
        element: (
          <PrivateRoute>
            <AllUsers />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Router;
