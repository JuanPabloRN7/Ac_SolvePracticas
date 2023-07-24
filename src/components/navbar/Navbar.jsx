import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import  CuentaIconos  from '@mui/material/SvgIcon';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser,logout  } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration: "none" }}>
        <span>{currentUser.displayName}</span>
        </Link>
        <Link to= "/tienda" style={{textDecoration:"none", color:"red"}}>
          <HomeOutlinedIcon />
        </Link>
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <Link to= "/aplicaciones" style={{textDecoration:"none"}}>
          <GridViewOutlinedIcon />
        </Link>
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <CuentaIconos/>
        <PersonOutlinedIcon onClick={handleLogout} />        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
        <span>{currentUser.displayName}</span>

          <img src={currentUser ? currentUser.profilePic : ""} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
