import React, { Component } from "react";

export default class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      userAddress: null,
      GOOGLE_KEY_API: "AIzaSyCw41gbUcOnPk6AOTZZzrpGOkAYCpUx_CI",
    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      alert("Geolocation is not supported by this browser");
    }
  }

  getCoordinates(position) {
    // console.log(position.coords.latitude);
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coord.longitude,
    });
  }

  render() {
    return (
      <div>
        <h2>React Geolocation Example</h2>
        <button onClick={this.getLocation}>Get coordinates</button>
        <h4>HTML5 coordinates</h4>
        <p>Latitude: {this.state.latitude}</p>
        <p>Longitude: {this.state.longitude}</p>
        <p>Address: {this.state.userAddress}</p>
        {this.state.latitude && this.state.longitude ? (
          <img
            src={
              "https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}&key=${this.state.GOOGLE_KEY_API}"
            }
            alt="Map"
          />
        ) : null}
      </div>
    );
  }
}
