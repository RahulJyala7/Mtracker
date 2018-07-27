import React from 'react';
import MapContainer from '../map/google_map';
import TimeLine from './timeline'
import TimeLine2 from './timeline2'
import GoogleMapPoint from '../map/googlemap_point'

export default class ViewDataSource extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showInfo: false,
            type: ""
        }
    }

    getDataSet = () => {
        this.props.viewDataset();
    }


    getVheicleDetails = (rank) => {
        let info = true;
        if (this.state.showInfo === true) { info = false }
        this.setState({ showInfo: info, type: rank })
    }

    render() {
        return (
            <div className="flexbox">
                <div className="list_padding">
                    <div className="hover_list">
                        <div className="dash-cardbox-map google_map_shadow" onClick={this.getVheicleDetails}>
                            <div className="cardbox__icon cardbox__icon--botsavailable"><i className="fa fa-car"></i></div>
                            <div className="cardbox__content">
                                <div> <h4>DL 3cp 1859 </h4></div>
                                <div>Meharouli Badarpur Road,Saket,Delhi</div>
                                <div>
                                    <i style={{color :"red"}} className="fa fa-key icon_padding wifi_icon"></i>
                                    <i style={{color :"green"}} className="fa fa-asterisk icon_padding"></i>
                                    <i style={{color :"green"}} className="fa fa-battery-half icon_padding"></i>
                                    <i style={{color :"red"}} className="fa fa-wifi icon_padding"></i>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="timeline_arrange" hidden={!this.state.showInfo}>
                        <TimeLine2 />
                    </div>

                    <div className="hover_list">
                        <div className="dash-cardbox-map google_map_shadow" onClick={this.getVheicleDetails}>
                            <div className="cardbox__icon cardbox__icon--botsavailable"><i className="fa fa-car"></i></div>
                            <div className="cardbox__content">
                                <div><h4>MH 16D 2546 </h4></div>
                                <div>Aaare Dairy Goregaon East,Mumbai</div>
                                <div>
                                    <i style={{color :"green"}} className="fa fa-key icon_padding"></i>
                                    <i style={{color :"green"}} className="fa fa-asterisk icon_padding"></i>
                                    <i style={{color :"green"}} className="fa fa-battery-half icon_padding"></i>
                                    <i style={{color :"green"}} className="fa fa-wifi icon_padding"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hover_list">
                        <div className="dash-cardbox-map google_map_shadow" onClick={this.getVheicleDetails}>
                            <div className="cardbox__icon cardbox__icon--botsavailable"><i className="fa fa-car"></i></div>
                            <div className="cardbox__content">
                                <div><h4>UP 16 1585</h4></div>
                                <div>Indrapuram , Gazhaibad , Uttar Pradesh </div>
                                <div>
                                    <i style={{color :"green"}} className="fa fa-key icon_padding"></i>
                                    <i style={{color :"green"}} className="fa fa-asterisk icon_padding"></i>
                                    <i style={{color :"red"}} className="fa fa-battery-half icon_padding"></i>
                                    <i style={{color :"green"}} className="fa fa-wifi icon_padding"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hover_list">
                        <div className="dash-cardbox-map google_map_shadow" onClick={this.getVheicleDetails}>
                            <div className="cardbox__icon cardbox__icon--botsavailable"><i className="fa fa-car"></i></div>
                            <div className="cardbox__content">
                                <div><h4>RJ 8D 4562 </h4></div>
                                <div>Vaishali Nagar,Jaipur,Rajasthan</div>
                                <div>
                                    <i style={{color :"red"}} className="fa fa-key icon_padding"></i>
                                    <i style={{color :"red"}} className="fa fa-asterisk icon_padding"></i>
                                    <i style={{color :"green"}} className="fa fa-battery-half icon_padding"></i>
                                    <i style={{color :"green"}} className="fa fa-wifi icon_padding"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="google_map">
                    {this.state.showInfo === true ? <GoogleMapPoint /> : <MapContainer />}
                </div>
            </div>
        )
    }
}