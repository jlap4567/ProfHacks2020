import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from '../components/Header';
import GoogleMap from '../components/GoogleMap';
import Form from '../components/Form';



export default class MainPage extends Component {
    render() {
        const style={
          marginTop: "90vh",
          position: "relative",
          top: 0,
        }
        return (
          <div className="main">
            <Router>
              <Header />
              <div className="App">
              </div>

              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Router>
        </div>
        )
    }
}

function Home() {
  return (
    <div className="main">
      <GoogleMap />
    </div>
  )
}
function About() {
  return (
    <div className="main">
      <Form />
    </div>
  )
}
