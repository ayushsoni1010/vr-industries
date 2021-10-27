import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class GoogleMaps extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyA7Od9WF0lpfOEWgkAvJ0AbocJo8vXdNNw",
})(GoogleMaps);




/*
        <iframe
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=VR Industries Dewas&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
*/
