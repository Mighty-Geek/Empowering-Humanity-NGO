import React from 'react';
import Nav from './helper/Nav';
import CustomMarker from './helper/CustomMarker';
import { Marker, withGoogleMap, GoogleMap } from "react-google-maps";
import users from '../sample-data';

class AdminPage extends React.Component {
    state = {
        users: users,
    }

    render() {

        // const GoogleMapEg = withGoogleMap(props => {
        //     <GoogleMap
        //         defaultZoom={8}
        //         defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        //     >
        //         {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        //         {/* {Object.keys(this.state.users).map(key => { props.isMarkerShown && <CustomMarker key={key} index={key} details={this.state.users[key]} /> })} */}
        //     </GoogleMap>
        // });

        // Object.keys(this.state.users).map(key => console.log(this.state.users[key]));

        return (
            <>
                <div className="heading">
                    <h1>Suraksha</h1>
                    <h3>Portal</h3>
                </div>
                <Nav />
                <div className="mapWrapper">
                    {/* <GoogleMapEg
                        isMarkerShown={true}
                        containerElement={<div style={{ height: `27rem`, width: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    /> */}

                    <img src="/map.png" className="admin-map" />
                    <a className='usr-a'><div className="usr active a"></div></a>
                    <a className='usr-a' href='/video.html'><div className="usr danger b"></div></a>
                    <a className='usr-a' href='/video.html'><div className="usr danger c"></div></a>
                    <a className='usr-a'><div className="usr active d"></div></a>
                    <a className='usr-a'><div className="usr active e"></div></a>
                    <a className='usr-a'><div className="usr active f"></div></a>
                    <a className='usr-a'><div className="usr active g"></div></a>
                    <a className='usr-a'><div className="usr active h"></div></a>
                </div>
            </>
        );
    }
}

export default AdminPage;

