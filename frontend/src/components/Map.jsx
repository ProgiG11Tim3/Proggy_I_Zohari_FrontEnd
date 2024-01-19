import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
 
const Map = (props) => {
    const [markers, setMarkers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("/api"+ props.link +"/getAllSelectedSpecialistExaminations").then(res => {
            const locs = []
            res.data.forEach(exam => {
                exam.hospitalLocations.forEach(loc => {
                    console.log(loc)
                    locs.push(
                        <Marker position={[loc.x_coordinate, loc.y_coordinate]} key={loc.hospitalLocationId}>
                            <Popup>
                                {loc.hospitalName}
                            </Popup>
                        </Marker>
                    );
                })
            })
            setMarkers(locs);
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