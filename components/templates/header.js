import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className={this.props.sidebarStatus ? "logo logoshort" : "logo"}>
                    <div className="logoicon" style={{ paddingTop: '14px'}}  ><img src="../../images/logo_02.png"></img></div>
                    <div className="logotext">TrackMe</div>
            </div>
        )
    }
}

export default Header;