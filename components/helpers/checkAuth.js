import React from 'react'
import { Redirect, Route } from "react-router-dom";

//for Check isLogin User
//Later Check for Token 
const checkAuth = {
    authenticate() {
        let checkLogin = window.localStorage.getItem("isLogin");
        if (checkLogin) {
            return true
        }
        else {
            window.localStorage.clear();
            return false
        }
    }
};


//Private Route for Check User Login our Not
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            checkAuth.authenticate() ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: props.location }
                        }}
                    />
                )
        }
    />
);