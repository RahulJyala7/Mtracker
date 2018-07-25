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
            <div className="minheight_map">
                <div>
                    <div className="gd">
                        <div className="hover_list">
                            <div className="dash-cardbox-map google_map_shadow" onClick={this.getVheicleDetails}>
                                <div className="cardbox__icon cardbox__icon--botsavailable"><i className="fa fa-car"></i></div>
                                <div className="cardbox__content">
                                    <div>Name : Avinash</div>
                                    <div>Age : 29</div>
                                    <div>Vheicle No : UK5665</div>
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
                                    <div>Name : Rahul</div>
                                    <div>Age : 26</div>
                                    <div>Vheicle No : UK7465</div>
                                </div>
                            </div>
                        </div>

                        <div className="hover_list">
                            <div className="dash-cardbox-map google_map_shadow" onClick={this.getVheicleDetails}>
                                <div className="cardbox__icon cardbox__icon--botsavailable"><i className="fa fa-car"></i></div>
                                <div className="cardbox__content">
                                    <div>Name : Shaurabh</div>
                                    <div>Age : 58</div>
                                    <div>Vheicle No : UK9635</div>
                                </div>
                            </div>
                        </div>

                        <div className="hover_list">
                            <div className="dash-cardbox-map google_map_shadow" onClick={this.getVheicleDetails}>
                                <div className="cardbox__icon cardbox__icon--botsavailable"><i className="fa fa-car"></i></div>
                                <div className="cardbox__content">
                                    <div>Name : Ashish</div>
                                    <div>Age : 31</div>
                                    <div>Vheicle No : UK4565</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               <div className="google_map">
        {  this.state.showInfo === true ? <GoogleMapPoint/>  :  <MapContainer />    }
                </div>

            </div>
        )
    }
}