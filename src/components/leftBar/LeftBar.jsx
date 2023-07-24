import "./leftBar.scss";
import Administrar from "../../assets/a.ico";
import Aplicaciones from "../../assets/g.ico";
import Chat from "../../assets/c.ico";
import Parqueadero from "../../assets/p.ico";
import Peliculas from "../../assets/o1.ico";
import Prueba from "../../assets/j.ico";
import Tienda from "../../assets/t.ico";
import Sociedad from "../../assets/o.ico";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { Link } from "react-router-dom"

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePic}
              alt=""
            />
          <span>{currentUser.displayName}</span>
          </div>

          <div className="item">
            <Link to= "/administrar" style={{textDecoration:"none"}}>
            <img src={Administrar} alt="" />
            <span>  Administrar</span>
            </Link>
          </div>

          <div className="item">
            <Link to= "/aplicaciones" style={{textDecoration:"none"}}>
            <img src={Aplicaciones} alt="" />
            <span>  Aplicaciones</span>
            </Link>
          </div>
          <div className="item">
            <Link to= "/chat" style={{textDecoration:"none"}}>
            <img src={Chat} alt="" />
            <span>  Chat</span>
            </Link>
          </div>
          <div className="item">
            <Link to= "/parqueadero" style={{textDecoration:"none"}}>
            <img src={Parqueadero} alt="" />
            <span>  Parqueadero</span>
            </Link>
          </div>
          <div className="item">
            <Link to= "/peliculas" style={{textDecoration:"none"}}>
            <img src={Peliculas} alt="" />
            <span>  Peliculas</span>
            </Link>
          </div>
          <div className="item">
            <Link to= "/prueba" style={{textDecoration:"none"}}>
            <img src={Prueba} alt="" />
            <span>  Prueba</span>
            </Link>
          </div>
          <div className="item">
            <Link to= "/sociedad" style={{textDecoration:"none"}}>
            <img src={Sociedad} alt="" />
            <span>  Sociedad</span>
            </Link>
          </div>
          <div className="item">
            <Link to= "/tienda" style={{textDecoration:"none"}}>
            <img src={Tienda} alt="" />
            <span>  Tienda</span>
            </Link>
          </div>

          <hr />
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>

          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
