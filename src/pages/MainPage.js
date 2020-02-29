import React, { Component } from 'react'
import Header from '../components/Header';
import GoogleMap from '../components/GoogleMap';


export default class MainPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <GoogleMap />
            </div>
        )
    }
}
