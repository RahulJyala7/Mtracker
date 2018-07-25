import React from 'react';


export default class TimeLine extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="timeline">
                <div className="container left">
                    <div className="content">
                        <h5>9:10</h5>
                        <p>Vehicle Heading to Noida</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <h5>11:00</h5>
                        <p>Vehicle on DND Highway</p>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                        <h5>12:00</h5>
                        <p>Vehicle is stoped</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <h5>11:00</h5>
                        <p>Vehicle is Reached</p>
                    </div>
                </div>
            </div>
        )
    }
}
