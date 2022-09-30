import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import UserCard from '../UserCard';

class CustomMarker extends Component {
    state = {
        showInfoWindow: true
    };
    handleMouseOver = e => {
        this.setState({
            showInfoWindow: false
        });
    };
    handleMouseExit = e => {
        this.setState({
            showInfoWindow: false
        });
    };
    render() {
        const { showInfoWindow } = this.state;
        const { info, lat, lng } = this.props.details.coordinates;
        console.log(this.props.details.coordinates);
        return (
            <Marker position={{ lat, lng }} onMouseOver=
                {this.handleMouseOver} onMouseOut={this.handleMouseExit}>
                {showInfoWindow && (
                    <InfoWindow>
                        <h4>{info}</h4>
                        <UserCard users={this.props.details} />
                    </InfoWindow>
                )}
            </Marker>
        );
    }
}
export default CustomMarker;