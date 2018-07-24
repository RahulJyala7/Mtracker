import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

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
            width: '150vh',
            height: '100vh'
        }

        return (
            <Map style={style} google={this.props.google} zoom={14} initialCenter={{ lat: 28.535517, lng: 77.391029 }}>

                <Marker
                    onClick={this.onMarkerClick}
                    title={'Vehicle Status'}
                    name={'Vehicle Number UK5256 Heading Toward Mumbai'}
                    position={{ lat: 19.076025, lng: 72.8777 }} />
                <Marker
                    onClick={this.onMarkerClick}
                    title={'Vehicle Status'}
                    name={'Vehicle Number UK9656 Heading Toward Delhi'}
                    position={{ lat: 28.535517, lng: 77.391029 }} />

                <Marker
                    onClick={this.onMarkerClick}
                    title={'Vehicle Status'}
                    name={'Vehicle Number MH5652 Heading Toward Gujrat'}
                    position={{ lat: 28.704123, lng: 77.102529 }} />


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