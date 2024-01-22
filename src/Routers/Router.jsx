import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Registration from "../Pages/Authentication/Registration/Registration";
import About from "../Pages/About/About";
import Contact from "../Pages/ContactPage/Contact";
import SearchingDomain from "../Pages/SearchDomainPage/SearchingDomain";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ()=> fetch("/category.json")
      },
      {
        path:"/contact",
        element: <Contact></Contact>
    
      },
      // other routes
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/searchPage",
        element:<SearchingDomain></SearchingDomain>
      }
    
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
]);

export default Router;
