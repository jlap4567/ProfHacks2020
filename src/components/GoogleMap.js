import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from "react";
 
const style = {
    width: "100%",
    height: "81%",
    position: "relative"
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

    render() {
        return (
        <Map google={this.props.google}
            className={"map"}
            style={style}
            zoom={16}
            initialCenter={{
            lat: this.state.currlat,
            lng: this.state.currlon
            }}
            center={{ lat: this.state.currlat, lng: this.state.currlon }}
        >
    
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
    
            <InfoWindow 
                marker={this.state.activeMarker}
                onClose={this.onInfoWindowClose}
                visible={this.state.showingInfoWindow}>
                <div>
                <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
        </Map>
        );
    }
    }
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBIQpZBgN7WPGuBCRsCXQBfZJvetJxurFg")
})(GoogleMap)