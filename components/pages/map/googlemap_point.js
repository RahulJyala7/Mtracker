import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline, Polygon  } from 'google-maps-react';

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
            { lat:28.603800, lng:  77.366200  }
        ];


        console.log(triangleCoords)

        return (
            <Map style={style} google={this.props.google} zoom={12}  initialCenter={{ lat: 28.603800 , lng: 77.366200 }}>

                <Marker
                    onClick={this.onMarkerClick}
                    title={'Vehicle Status'}
                    name={'Noida Sector 62 , 1 day ago'}
                    position={{ lat: 28.628454, lng: 77.376945 }} />
                <Marker
                    onClick={this.onMarkerClick}
                    title={'Vehicle Status'}
                    name={'Noida Sector 16 , 30 Min ago'}
                    position={{ lat: 28.578766, lng: 77.317421 }} />

                <Marker
                    onClick={this.onMarkerClick}
                    title={'Vehicle Status'}
                    name={'Noida Sector 60 , a min ago'}
                    position={{ lat: 28.603800, lng: 77.366200 }} />
                
                <Polyline
                        path={triangleCoords}
                        strokeColor="#00a99d"
                        strokeOpacity={0.8}
                        strokeWeight={3}
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