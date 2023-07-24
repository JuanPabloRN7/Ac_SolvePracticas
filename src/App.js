import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Parqueadero from "./pages/parqueadero/Parqueadero";
import Administrar from "./pages/administrar/Administrar";
import Chat from "./pages/chat/Chat";
import Peliculas from "./pages/peliculas/Peliculas";
import Prueba from "./pages/prueba/Prueba";
import Sociedad from "./pages/sociedad/Sociedad";
import Tienda from "./pages/tienda/Tienda";

import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import Aplicaciones from "./pages/aplicaciones/Aplicaciones";

function App() {
  const {currentUser} = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        
        {
          path: "/profile/:id",
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        
        {
          path: "/administrar",
          element: <Administrar />,
        },

        {
          path: "/chat",
          element: <Chat />,
        },

        {
          path: "/parqueadero",
          element: <Parqueadero />,
        },

        {
          path: "/peliculas",
          element: <Peliculas />,
        },

        {
          path: "/prueba",
          element: <Prueba />,
        },

        {
          path: "/sociedad",
          element: <Sociedad />,
        },
        {
          path: "/tienda",
          element: <Tienda />,
        },

       
        {
          path: "/aplicaciones",
          element: <Aplicaciones />,
        },

      ],
    },



    {
      path: "/login",
      element: <Login />,
    },
   

    {
      path: "/register",
      element: (
      
        <Register />
       
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
