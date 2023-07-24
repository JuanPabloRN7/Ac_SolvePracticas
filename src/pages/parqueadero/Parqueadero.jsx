import Stories from "../../components/stories/Stories"

import Share from "../../components/share/Share"
import "./parqueadero.scss"

import React, { useRef, useEffect, useState} from 'react';
import { MapContainer } from 'react-leaflet';
import Map from '../../components/Map/Map';

import "../../components/Map/Map.css"
import 'leaflet/dist/leaflet.css';

import BusinessDataService from "../../components/BusinessDataService";
import { point } from "leaflet";

const position = [-3.9917339, -79.2044926]

const Parqueadero = () => { 

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [points, setPoints] = useState([]);
  const [endPoints, setEndPoints] = useState([]);

  const selectNear=async (latitude,longitude)=>{
    console.log(latitude, longitude);
    const locations=[];
    const docSnap=await BusinessDataService.getBusinessLatitudeLongitude(latitude, longitude);
    docSnap.forEach((doc) => {
      locations.push(doc.data());
      });
    setPoints(locations);
    console.log("Locations: ",locations);
    console.log("Points 2: ",points);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLatitude(latitude);
      setLongitude(longitude);
    });

    console.log(latitude);
    console.log(longitude);

    selectNear(latitude,longitude);
    console.log("Points 1: ", points);
    points.map((point)=>{
      console.log(point.name);
    });
  }, [latitude]);

  return (
    <div className="parqueadero">
        {latitude}
        {longitude}
       {/* <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="mapa">
            <Map />
        </MapContainer> */}

    </div>
  )
}

export default Parqueadero