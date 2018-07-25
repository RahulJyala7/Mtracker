import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline, Polygon   } from 'google-maps-react';

export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };



    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {

        const style = {
            width: '120vh',
            height: '100vh'
        }

        const triangleCoords = [
            { lat: 28.628454, lng: 77.376945 },
            { lat: 28.578766, lng: 77.317421 },
        ];

        return (
            <Map style={style} google={this.props.google} zoom={12}  initialCenter={{ lat: 28.603800 , lng: 77.366200 }}>

                <Marker
                    onClick={this.onMarkerClick}
                    title={'Vehicle Status'}
                    name={'Vehicle Heading to next consignment'}
                    position={{ lat: 28.628454, lng: 77.376945 }} />
                <Marker
                    onClick={this.onMarkerClick}
                    title={'Vehicle Status'}
                    name={'Vehicle Number UK5852 is heading toward this consignment '}
                    position={{ lat: 28.578766, lng: 77.317421 }} />
                
                <Polyline
                        path={triangleCoords}
                        strokeColor="#00a99d"
                        strokeOpacity={0.8}
                        strokeWeight={3}
                        geodesic = {true}
                         />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h5>{this.state.selectedPlace.name}</h5>
                    </div>
                </InfoWindow>

            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("")
})(MapContainer)