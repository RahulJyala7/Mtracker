import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className={this.props.sidebarStatus ? "logo" : "logo logoshort"}>
                    <div className="logoicon"><i className="fa fa-cloud-upload"></i></div>
                    <div className="logotext">Client Name</div>            
            </div>
        )
    }
}

export default Header;