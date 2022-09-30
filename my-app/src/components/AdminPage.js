import React from 'react';
import Nav from './helper/Nav';
import CustomMarker from './helper/CustomMarker';
import { GoogleMap, Marker } from "react-google-maps"

function AdminPage() {

    const data = [
        { info: 'Rome', lat: 41.903, lng: 12.496 },
        { info: 'New York', lat: 40.712, lng: -74.005 }
    ]

    return (
        <>
            <div className="heading">
                <h1>Suraksha</h1>
                <h3>Portal</h3>
            </div>
            <Nav />
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                {data.map(props => <CustomMarker {...props} />)}
            </GoogleMap>
        </>
    );
}

export default AdminPage;