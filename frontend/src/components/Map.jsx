import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
    const [markers, setMarkers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("/api/getAllHospitalLocations").then(res => {
            res.data.forEach(loc => {
                let temp = markers;
                    temp.push(
                        <Marker position={[loc.x_coordinate, loc.y_coordinate]} key={loc.hospitalLocationId}>
                            <Popup>
                                {loc.hospitalName}
                            </Popup>
                        </Marker>
                    )
                    setMarkers(temp);
            })
            setLoading(false);
        })
    }, [])

    if(loading) {
        return("Loading...");
    }


    return <MapContainer id="map" center={[45.8, 15.966565]} zoom={11.8} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers}
    </MapContainer>
}

export default Map;