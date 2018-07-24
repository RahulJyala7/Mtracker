import React from 'react';
import MapContainer from '../map/google_map'



export default class ViewDataSource extends React.Component {
    constructor(props) {
        super(props)
    }


    getDataSet = () => {
        this.props.viewDataset();
    }

    render() {
        return (
            <div>

                <div className="gd">

                    <div className="dash-cardbox-map google_map_shadow">
                        <div className="cardbox__icon cardbox__icon--botsavailable"><i className="fa fa-car"></i></div>
                        <div className="cardbox__content">
                            <div className="cardbox__number_formap">Name : Avinash</div>
                            <div className="cardbox__number_formap">Vheicle No : UK5665</div>
                        </div>
                    </div>

                    <div className="dash-cardbox-map google_map_shadow">
                        <div className="cardbox__icon cardbox__icon--botsavailable"><i className="fa fa-car"></i></div>
                        <div className="cardbox__content">
                            <div className="cardbox__number_formap">Name : Shaurabh</div>
                            <div className="cardbox__number_formap">Vheicle No : UK5665</div>
                        </div>
                    </div>


                    <div className="dash-cardbox-map google_map_shadow">
                        <div className="cardbox__icon cardbox__icon--botsavailable"><i className="fa fa-car"></i></div>
                        <div className="cardbox__content">
                            <div className="cardbox__number_formap">Name : Rahul</div>
                            <div className="cardbox__number_formap">Vheicle No : UK5665</div>
                        </div>
                    </div>

                </div>

                <div className="google_map">
                    <MapContainer />
                </div>

            </div>
        )
    }
}