import React from 'react';

export default class HomeDashboard extends React.Component {
    constructor(props) {
        super(props)
    }


    getDetails = () =>
    {
        this.props.history.push('/trackingconfig/datasource');
    }

    getAlertDetails =() =>{
        this.props.history.push('/trackingconfig/alerts');
    }

    render() {
        return <div className="mainDashBoard">
            <div className="dashboard-pageheader">
                <div className="page-header__title">Dashboard</div>
            </div>
            <div className="smallcard-row">
                <div className="smallcard__item" onClick={this.getDetails}>
                    <div className="dash-card dash-card--small">
                        <div className="dash-cardbox">
                            <div className="cardbox__icon cardbox__icon--botsavailable"><i className="fa fa-cubes"></i></div>
                            <div className="cardbox__content">
                                <div className="cardbox__number">Running Vehicle</div>
                            </div>
                        </div>
                        <div className="cardbox_bottom">
                                Number of Active Vehicle : 04 
                        </div>
                    </div>
                </div>

                <div className="smallcard__item" onClick={this.getDetails}>
                    <div className="dash-card dash-card--small">
                        <div className="dash-cardbox">
                            <div className="cardbox__icon cardbox__icon--totalrevenue"><i className="fa fa-line-chart"></i></div>
                            <div className="cardbox__content">
                                <div className="cardbox__number"> Stop Vehicle</div>
                            </div>
                        </div>
                        <div className="cardbox_bottom">
                                Number of Stop Vehicle  : 09 
                        </div>
                    </div>
                </div>

                <div className="smallcard__item" onClick={this.getDetails}>
                    <div className="dash-card dash-card--small">
                        <div className="dash-cardbox">
                            <div className="cardbox__icon cardbox__icon--activeusers"><i className="fa fa-thumbs-up"></i></div>
                            <div className="cardbox__content">
                                <div className="cardbox__number">Idle Vehicle</div>
                            </div>
                        </div>
                        <div className="cardbox_bottom">
                                Number of Idle Vehicle : 10 
                        </div>
                    </div>
                </div>

                
                <div className="smallcard__item" onClick={this.getDetails}>
                    <div className="dash-card dash-card--small">
                        <div className="dash-cardbox">
                            <div className="cardbox__icon cardbox__icon--botsavailable"><i className="fa fa-crosshairs"></i></div>
                            <div className="cardbox__content">
                                <div className="cardbox__number">Inactive Vehicle</div>
                            </div>
                        </div>
                        <div className="cardbox_bottom">
                                Number of Inactive Vehicle : 21 
                        </div>
                    </div>
                </div>


                
                <div className="smallcard__item" onClick={this.getDetails}>
                    <div className="dash-card dash-card--small">
                        <div className="dash-cardbox">
                            <div className="cardbox__icon cardbox__icon--activeusers"><i className="fa fa-child"></i></div>
                            <div className="cardbox__content">
                                {/* <div className="cardbox__number">18</div> */}
                                <div className="cardbox__number">No Data</div>
                            </div>
                        </div>
                        <div className="cardbox_bottom">
                                No Data Found On : 12 
                        </div>
                    </div>
                </div>


                
                <div className="smallcard__item" onClick={this.getAlertDetails}>
                    <div className="dash-card dash-card--small">
                        <div className="dash-cardbox">
                            <div className="cardbox__icon cardbox__icon--activeusers"><i className="fa fa-user"></i></div>
                            <div className="cardbox__content">
                                <div className="cardbox__number">Alerts</div>
                            </div>
                        </div>
                        <div className="cardbox_bottom">
                                Number of Alerts : 04 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}