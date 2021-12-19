import React, { Component } from 'react'
import Header from "./Component/Java/Header";
import Sidebar from "./Component/Java/SideBar";
import HiddenBar from './Component/Java/HiddenBar'
import {BrowserRouter as Browser,Routes as Switcher ,Route} from 'react-router-dom'
export default class App extends Component {
    render() {
        return (
            <div>
                <Browser>
                <Header/>
               
                <Switcher>

                </Switcher>
                </Browser>
            </div>
        )
    }
}
