import React, { Component } from 'react'
import Header from '../components/Header';
import GoogleMap from '../components/GoogleMap';


export default class MainPage extends Component {
    render() {
      const style={
        marginTop: "90vh",
        position: "relative",
        top: 0,
      }
        return (
            <div>
                <Header />
                <div>
                  <GoogleMap />
                </div>
                <div className="spacer" style={style}></div>
            </div>
        )
    }
}
