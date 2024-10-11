import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/shared/home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import PrivateRoute from "./PrivateRoute";
import DetailsNewsPage from "../pages/DetailsNewsPage";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
            path:"/",
            element:<Home />
        },
        
        {
            path:'/register',
            element:<Register/>
        },
        {
          path:"/news/:id",
          element:<PrivateRoute>
            <DetailsNewsPage/>
          </PrivateRoute>
          
      },
      {
        path:'/login',
        element:<Login />
    }
      ],
    },
  ]); 

  export default router;