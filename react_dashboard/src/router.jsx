import{Navigate, createBrowserRouter} from "react-router-dom";
import Signup from "./views/Signup.jsx";
import Login from "./views/Login.jsx";
import Users from "./views/Users.jsx";
import Notfound from "./views/Notfound.jsx";
import Dashboard from "./views/Dashboard.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [
      {
        path:'/',
        element: <Navigate to="/users"/>
      },
      {
        path: '/login',
        element:<Login/>
      },
      {
        path: '/dashboard',
        element:<Dashboard/>
      },
    ]
  },

  {
    path: '/',
    element: <GuestLayout/>,
    children:[
      {
        path:'/',
        element: <Navigate to="/login"/>
      },

      {
        path: '/signup',
        element:<Signup/>
      },
      {
        path: '/users',
        element:<Users/>
      },
    ]
  },


  {
    path: '/*',
    element:<Notfound/>
  },
])

export default router;
