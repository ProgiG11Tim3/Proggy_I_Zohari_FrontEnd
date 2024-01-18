import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

class Map extends React.Component {

    render() {
        return <MapContainer id="map" center={[45.8, 15.966565]} zoom={11.8} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[45.815399, 15.966568]}>
                    <Popup>
                        Ovdje ide ime neke lokacije.
                    </Popup>
                </Marker>
        </MapContainer>
    }
}

export default Map;