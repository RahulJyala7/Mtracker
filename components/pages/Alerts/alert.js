import React from 'react';


export default class Alerts extends React.Component
{
constructor(props){
    super(props)
}


render()
{
    return(
        <div className="mainDashBoard">
        <div className="dashboard-pageheader">
            <div className="page-header__title">Alerts</div>
        </div>
        <div>
           <h3>No Pending Alerts</h3>
        </div>
    </div>
    )
}

}