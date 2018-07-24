import React from 'react';

export default class HomeDashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="mainDashBoard">
            <div className="dashboard-pageheader">
                <div className="page-header__title">Dashboard</div>
            </div>
            <div className="smallcard-row">
                <div className="smallcard__item">
                    <div className="dash-card dash-card--small">
                        <div className="dash-cardbox">
                            <div className="cardbox__icon cardbox__icon--botsavailable"><i className="fa fa-cubes"></i></div>
                            <div className="cardbox__content">
                                <div className="cardbox__number">Account Analytics</div>
                            </div>
                        </div>
                        <div className="cardbox_bottom">
                                Dashboards : 04 | Accuracy : 67%
                        </div>
                    </div>
                </div>

                <div className="smallcard__item">
                    <div className="dash-card dash-card--small">
                        <div className="dash-cardbox">
                            <div className="cardbox__icon cardbox__icon--totalrevenue"><i className="fa fa-line-chart"></i></div>
                            <div className="cardbox__content">
                                <div className="cardbox__number">Revenue Forecasting</div>
                            </div>
                        </div>
                        <div className="cardbox_bottom">
                                Dashboards : 09 | Accuracy : 89%
                        </div>
                    </div>
                </div>

                <div className="smallcard__item">
                    <div className="dash-card dash-card--small">
                        <div className="dash-cardbox">
                            <div className="cardbox__icon cardbox__icon--activeusers"><i className="fa fa-thumbs-up"></i></div>
                            <div className="cardbox__content">
                                {/* <div className="cardbox__number">18</div> */}
                                <div className="cardbox__number">Target Achievement</div>
                            </div>
                        </div>
                        <div className="cardbox_bottom">
                                Dashboards : 10 | Accuracy : 77%
                        </div>
                    </div>
                </div>

                
                <div className="smallcard__item">
                    <div className="dash-card dash-card--small">
                        <div className="dash-cardbox">
                            <div className="cardbox__icon cardbox__icon--botsavailable"><i className="fa fa-crosshairs"></i></div>
                            <div className="cardbox__content">
                                {/* <div className="cardbox__number">18</div> */}
                                <div className="cardbox__number">Cross Sell</div>
                            </div>
                        </div>
                        <div className="cardbox_bottom">
                                Dashboards : 21 | Accuracy : 74%
                        </div>
                    </div>
                </div>


                
                <div className="smallcard__item">
                    <div className="dash-card dash-card--small">
                        <div className="dash-cardbox">
                            <div className="cardbox__icon cardbox__icon--activeusers"><i className="fa fa-child"></i></div>
                            <div className="cardbox__content">
                                {/* <div className="cardbox__number">18</div> */}
                                <div className="cardbox__number">Customer Segmentation</div>
                            </div>
                        </div>
                        <div className="cardbox_bottom">
                                Dashboards : 12 | Accuracy : 82%
                        </div>
                    </div>
                </div>


                
                <div className="smallcard__item" hidden={true}>
                    <div className="dash-card dash-card--small">
                        <div className="dash-cardbox">
                            <div className="cardbox__icon cardbox__icon--activeusers"><i className="fa fa-user"></i></div>
                            <div className="cardbox__content">
                                {/* <div className="cardbox__number">18</div> */}
                                <div className="cardbox__number">Active Users</div>
                            </div>
                        </div>
                        <div className="cardbox_bottom">
                                Dashboards : 04 | Accuracy : 67%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}