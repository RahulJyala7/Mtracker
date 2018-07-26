import React from 'react';
import ViewDataSource from './viewdatasource'


export default class DataSource extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
           
        }
    }

    onAddDataSource = () => {
        this.props.history.push('/datanextconfig/viewdataset')
    }


    render() {
        let DS =  <ViewDataSource  viewDataset = {this.onAddDataSource} />
        return (
            <div className="mainDashBoard">
                <div className="dashboard-pageheader">
                    <div className="page-header__title">Live Tracking</div>
                </div>
                <div>
                    {DS}
                </div>
            </div>
        )
    }
}