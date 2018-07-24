import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { showToster } from '../helpers/tosterService'


class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isBotSubmenuDisplayed: false, isEntitiesSubmenuDisplayed: false
    }
  }

  toggleBotSubMenuItems() {
    this.state.isBotSubmenuDisplayed ? this.setState({ isBotSubmenuDisplayed: false }) : this.setState({ isBotSubmenuDisplayed: true })
  }

  toggleEntitiesSubMenuItems() {
    this.state.isEntitiesSubmenuDisplayed ? this.setState({ isEntitiesSubmenuDisplayed: false }) : this.setState({ isEntitiesSubmenuDisplayed: true })
  }

  handleSubMenuClicked = (menuName, id) => {
    this.props.action(menuName, id)
  }



  //
  showAlert = (type) => {
    if (type === "Integration") {
      showToster("info", "Integration Not Configured")
    }
    if (type === "Decision") {
      showToster("info", "Decision Engine Not Configured")
    }
  }

  render() {
    return (
      <div className={this.props.sidebarStatus ? "leftPanel" : "leftPanel leftPanelHide"}>
        <div id="ToolBoxContainer" className="sideNavContainer">
          <div className="sideNav">
            <ul className="sideNav-list">
              <li className="sideNav-list__item">
                <NavLink className="list-item__link" to="/trackingconfig/dashboard">
                  <i className="list-item__icon fa fa-tachometer"></i>
                  <span className="list-item__title">Dashboard</span>
                </NavLink>
              </li>
              <li className="sideNav-list__item">
                <NavLink className="list-item__link" to="/trackingconfig/datasource">
                  <i className="list-item__icon fa fa-database"></i>
                  <span className="list-item__title">Track Team</span>
                </NavLink>
              </li>
              <li className="sideNav-list__item">
                <NavLink className="list-item__link" to="/trackingconfig/Settings">
                  <i className="list-item__icon fa fa-cubes"></i>
                  <span className="list-item__title">Geo Allocation</span>
                </NavLink>
              </li>
              <li className="sideNav-list__item" hidden={true}>
                <NavLink className="list-item__link" to="/datanextconfig/IDM">
                  <i className="list-item__icon fa fa-industry"></i>
                  <span className="list-item__title">IDM</span>
                </NavLink>
              </li>
              <li className="sideNav-list__item" hidden={true}>
                <NavLink className="list-item__link" to="/datanextconfig/POA">
                  <i className="list-item__icon fa fa-hashtag"></i>
                  <span className="list-item__title">Point Of Analysis</span>
                </NavLink>
              </li>
              <li className="sideNav-list__item" hidden={true}>
                <NavLink className="list-item__link" to="/datanextconfig/Settings">
                  <i className="list-item__icon fa fa-cogs"></i>
                  <span className="list-item__title">Settings</span>
                </NavLink>
              </li>
              <li className="sideNav-list__item" hidden={true} >
                <NavLink className="list-item__link" to="/datanextconfig/strategybuilder">
                  <i className="list-item__icon 	fa fa-sitemap"></i>
                  <span className="list-item__title">Strategy Builder</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SideBar;