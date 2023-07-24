import React, { useRef, useEffect, useState} from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";
import "./Map.css"
import 'leaflet/dist/leaflet.css';
import BusinessDataService from '../BusinessDataService';

// const endPoints = [
//     { label: 'Parqueadero 1', lat: -3.9870591, lng: -79.1985607 },
//     { label: 'Parqueadero 2', lat: -3.9900973, lng: -79.2040410 },
//     { label: 'Parqueadero 3', lat: -4.0052088, lng: -79.2014455 },
//     { label: 'Parqueadero 4', lat: -4.0059472, lng: -79.2082861 },
//     { label: 'Parqueadero 5', lat: -4.0307251, lng: -79.1996470 }
// ];

// const endPoints = [
//     { label: 'Parqueadero 1', lat: -0.161906, lng: -78.456373 },
//     { label: 'Parqueadero 2', lat: -0.161906, lng: -78.436373 },
//     { label: 'Parqueadero 3', lat: -0.151906, lng: -78.446373 },
//      { label: 'Parqueadero 4', lat: -0.171906, lng: -78.446373 },
// ];

const actualizarS = 5000;

function Map({endPoints}) {
    const mapRef = useRef(null);
    const routingControlRef = useRef(null);
    const [endPoint] = useState(endPoints[0]);
    const map = useMap();

    useEffect(() => {
        // Obtener ubicacion actual
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            // add a tile layer to the map
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '� <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            //Controlador de rutas------------------------------------------------------------
            routingControlRef.current = L.Routing.control({
                waypoints: [
                    L.latLng(latitude, longitude),
                    L.latLng(endPoint.lat, endPoint.lng)
                ],
                lineOptions: {
                    styles: [
                        {
                            color: "blue",
                            weight: 4,
                            opacity: 0.7,
                        },
                    ],
                },
                routeWhileDragging: false,
                draggableWaypoints: false,
                addWaypoints: false,
                fitSelectedRoutes: true,
                showAlternatives: true,
                autoRoute: true,
                waypointMode: "connect"
                //geocoder: L.Control.Geocoder.nominatim()
            }).addTo(map);
            //--------------------------------------------------------------------------------
        });
        //Actualizar X segundos---------------------------------------------------------------
        const intervalId = setInterval(() => {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                routingControlRef.current.spliceWaypoints(0, 1, L.latLng(latitude, longitude));
            });
        }, actualizarS);
        return () => {
            clearInterval(intervalId);
        };
        //------------------------------------------------------------------------------------
    }, [endPoint]);

    return (
        <div>
            <select value={endPoint.label} onChange={(event) => {
                const selectedEndPoint = endPoints.find(p => p.label === event.target.value);
                //Cambiar destino mapa
                navigator.geolocation.getCurrentPosition((position) => {
                    const { latitude, longitude } = position.coords;
                    routingControlRef.current.setWaypoints([
                        L.latLng(latitude, longitude),
                        L.latLng(selectedEndPoint.lat, selectedEndPoint.lng)
                    ]);
                });
            }}>
                {endPoints.map(p => (
                    <option key={p.label} value={p.label}>{p.label}</option>
                ))}
            </select>
            <div ref={mapRef} className="ruta" />
        </div>
    );
}

export default Map;

//div contenedor Izquierda Arriba
//class="leaflet-top leaflet-right"
//class="leaflet-routing-container leaflet-bar leaflet-control"