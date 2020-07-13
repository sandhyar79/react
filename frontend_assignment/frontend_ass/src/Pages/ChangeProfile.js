import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';
class ChangeProfile extends Component {
    render() {
        const mapStyles = {
            width: '100%',
            height: '100%',
        };
        return (
            <div className="card"> {console.log('image')}
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176 }}
                />
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBHp-vJtZkA0SZUErDjLiE9hdZ-jmP8Zfk'
})(ChangeProfile);