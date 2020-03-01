import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from "react";
import axios from "axios";
import ResturantMarker from '../images/resturantMarker.png';

const style = {
    width: "100%",
    height: "90vh",
    position: "relative",
  };

export class GoogleMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {},
          currlat: 39.708262399999995, // 39.9528,
          currlon: -75.11408639999999, //-75.1635,
          taps: [],
          tapsLoaded: false,
          allLocations: {},
        };
      }

      onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  renderMarkers() {
    return this.state.allLocations.map(item => {
      return (
        <Marker
              icon={{
                url: ResturantMarker,
                anchor: new this.props.google.maps.Point(32,32),
                scaledSize: new this.props.google.maps.Size(64,64)
              }}
              onClick={this.onMarkerClick}
              name={item.name}
              address = {"address"}
              sTime = {item.food_available_start_time}
              eTime = {item.food_available_end_time}
              foodAvail = {item.food_availble}
              allergies = {item.potential_allergies}
              position={{lat: item.location.coordinates[0], lng: item.location.coordinates[1]}}/>
      )
    })
  }

  componentDidMount() {
    axios.get('http://localhost:5000/donors/')
      .then(res => {
        this.setState({ allLocations: res.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

    render() {
        console.log(this.state.allLocations);
        return (
        <Map google={this.props.google}
            className={"map"}
            id="map"
            style={style}
            zoom={14}
            initialCenter={{
            lat: this.state.currlat,
            lng: this.state.currlon
            }}
            center={{ lat: this.state.currlat, lng: this.state.currlon }}
        >
            <Marker
            onClick={this.onMarkerClick}
            name={'Current location'} >
              <InfoWindow
                marker={this.state.activeMarker}
                onClose={this.onInfoWindowClose}
                visible={this.state.showingInfoWindow}>
                <div>
                <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
            </Marker>
            {this.renderMarkers()}
            <Marker
                  icon={{
                    url: ResturantMarker,
                    anchor: new this.props.google.maps.Point(32,32),
                    scaledSize: new this.props.google.maps.Size(64,64)
                  }}
                  onClick={this.onMarkerClick}
                  name={'Holder Marker'}
                  address = {"Location"}
                  sTime = {"Start Time"}
                  eTime = {"End Time"}
                  foodAvail = {"Food Avalible"}
                  allergies = {"Allergies"}
                  position={{lat: 39.709262, lng: -75.1240}}/>


            <InfoWindow
                marker={this.state.activeMarker}
                onClose={this.onInfoWindowClose}
                visible={this.state.showingInfoWindow}>
                <div>
                <h2>{this.state.selectedPlace.name}</h2>
                <h4>{this.state.selectedPlace.address}</h4>
                <h4>{this.state.selectedPlace.sTime}</h4>
                <h4>{this.state.selectedPlace.eTime}</h4>
                <h4>{this.state.selectedPlace.foodAvail}</h4>
                <h4>{this.state.selectedPlace.allergies}</h4>
                </div>
            </InfoWindow>
        </Map>
        );
    }
    }

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBIQpZBgN7WPGuBCRsCXQBfZJvetJxurFg")
})(GoogleMap)
