import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Routeing from './route.jsx'

class App extends React.Component {
  render() {
    //for Disable Console.log
    //Uncomment this Function

    //console.log = function() {}
    return (
      <BrowserRouter >
        <Routeing />
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));




