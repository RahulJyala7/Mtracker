import React from 'react';
import {Route,Switch } from "react-router-dom";
import Sidebar from '../templates/sidebar';
import Header from '../templates/header';
import HomeDashboard from './dashboard/dashboard';
import DataSource from './datasource/datasource';
import Settings from './settings/settings';
import Alert from './Alerts/alert';


export default class AgentConfig extends React.Component {
    constructor() {
        super()
        this.state = {
            isSideBarOpen: true,
            menuClicked: "",
            EntityId: 0

        }

    }
 // to clear local storage item on logout
 handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  }

    getSideBarStatus = () => {
        this.setState({ isSideBarOpen: !this.state.isSideBarOpen });
    }

    getMenuClickedDetails = (clicked, id) => {

        if (clicked === "AddEntity") {
            //this.props.history.push('/agentconfig/addentity')
        }

        if (clicked === "AddBot") {
            //this.props.history.push('/agentconfig/addagent')
        }
        this.setState({ menuClicked: clicked, EntityId: id });
    }

    BotSuccess() {
        this.setState({ menuClicked: "BotEditor" })
    }

    render() {
        const { match } = this.props;

        return (
            <div className="bodyContent">
                <div className="header">
                    <Header sidebarStatus={this.state.isSideBarOpen}/>
                    <div className="header__navicon" onClick={this.getSideBarStatus.bind(this)}><i className="fa fa-reorder"></i></div>
                    <div className="header__logout">
                        <div className="header__logout-btn" onClick={this.handleLogout}><i className="fa fa-sign-out" aria-hidden="true"></i></div>
                    </div>
                </div>
                <div className="mainContainer">
                <Sidebar sidebarStatus={this.state.isSideBarOpen} action={this.getMenuClickedDetails} />
                <Switch>
                    <Route path={`${match.url}/dashboard`} component={HomeDashboard}/>
                    <Route path={`${match.url}/datasource`} component={DataSource}/>
                    <Route path={`${match.url}/alerts`} component={Alert} />
                    <Route path={`${match.url}/Settings`} component={Settings} />
                </Switch>
                </div>
            </div>
        )
    }
}