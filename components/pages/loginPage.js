import React from 'react';
import * as Toster from '../helpers/tosterService'

export default class LoginPage extends React.Component {
    constructor() {
        super()
        this.state = 
        {
         "username": "",
         "password": ""
        };
    }


    handleChangeForm(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    Login() {
        if (this.state.username == "admin" && this.state.password == "admin") {
            window.localStorage.setItem("isLogin" , true)
            this.props.history.push('/trackingconfig/dashboard');
        }
        else {
            Toster.showToster("error", "Invalid Credentials");
        }
    }

    render() {
        return (
            <div className="loginBg">
                <div className="LoginPage">
                    <h1>Login</h1>
                    <div name="form" >
                        <div className="formrow">
                            <label htmlFor="username">Username</label>
                            <input type="text" autoComplete="new-password" className="forminput" name="username" value={this.state.username} onChange={this.handleChangeForm.bind(this)} />
                        </div>
                        <div className="formrow">
                            <label htmlFor="password">Password</label>
                            <input type="password" autoComplete="new-password" className="forminput" name="password" value={this.state.password} onChange={this.handleChangeForm.bind(this)} />
                        </div>
                        <div className="form-group">
                            <button className="Loginbutton" onClick={this.Login.bind(this)}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}