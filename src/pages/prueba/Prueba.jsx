
import { useState } from "react";
import "./prueba.scss"
import React from 'react';
import { MapContainer } from 'react-leaflet';
import Map from '../../components/Map/Map';

import "../../components/Map/Map.css"
import 'leaflet/dist/leaflet.css';

const position = [-3.9917339, -79.2044926]
const Prueba = () => {
  const [commentOpen, setCommentOpen] = useState(false);

  return (
    <div className="prueba">
      <span> hola asasd</span>
      
       <div className="container">
       <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="mapa">
            <Map />
        </MapContainer>
     
      </div>
     
    </div>
  )
}

export default Prueba