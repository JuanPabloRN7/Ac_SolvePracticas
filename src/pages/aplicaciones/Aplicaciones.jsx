import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import "./aplicaciones.scss"
import Administrar from "../../assets/a.ico";
import Aplicacion from "../../assets/g.ico";
import Chat from "../../assets/c.ico";
import Parqueadero from "../../assets/p.ico";
import Peliculas from "../../assets/o1.ico";
import Prueba from "../../assets/j.ico";
import Tienda from "../../assets/t.ico";
import Sociedad from "../../assets/o.ico";
import { Link } from "react-router-dom"
import { brown, green } from "@mui/material/colors";


const Aplicaciones = () => {
  return (
    <div className="aplicaciones">
      <div className="container">
         <div className="item">
            <Link to= "/administrar" style={{textDecoration:"none",color: "green" }}>
            <img src={Administrar} alt="" />
            <span>  Administrar</span>
            </Link>
          </div>

          <div className="item">
            <Link to= "/aplicaciones" style={{textDecoration:"none", color:"yellow"}}>
            <img src={Aplicacion} alt="" />
            <span>  Aplicaciones</span>
            </Link>
          </div>
          <div className="item">
            <Link to= "/chat" style={{textDecoration:"none", color:"brown"}}>
            <img src={Chat} alt="" />
            <span>  Chat</span>
            </Link>
          </div>
          
          <div className="item">
            <Link to= "/parqueadero" style={{textDecoration:"none", color:"pink"}}>
            <img src={Parqueadero} alt="" />
            <span>  Parqueadero</span>
            </Link>
          </div>
          <div className="item">
            <Link to= "/peliculas" style={{textDecoration:"none", color:"red"}}>
            <img src={Peliculas} alt="" />
            <span>  Peliculas</span>
            </Link>
          </div>
          <div className="item">
            <Link to= "/prueba" style={{textDecoration:"none", color:"violet"}}>
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
            <Link to= "/tienda" style={{textDecoration:"none", color:"silver"}}>
            <img src={Tienda} alt="" />
            <span>  Tienda</span>
            </Link>
          </div>
          
          </div>
    </div>
  )
}

export default Aplicaciones