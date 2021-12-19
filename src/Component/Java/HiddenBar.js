import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./HiddenBar.scss"
export default class HiddenBar extends Component {
    render() {
        return (
            <div>
                <div className="Hidden-bar hidenbar" data-bar="hidden-bar">
                 <div className="hide-bar-manager bar-manager">
                     <div className="hide-bar-controller">
                         <div className="hidden-icons hide-bar-icon1">
                             <Link to="/">
                                 <div className="hide-bar-circle">
                                 <i class="fas fa-home"></i>
                                 </div>
                             </Link>
                         </div>
                         <div className="hidden-icons hide-bar-icon2">
                             <Link to="/">
                                 <div className="hide-bar-circle">
                                 <i class="fas fa-cube"></i>
                                 </div>
                             </Link>
                         </div>
                         <div className="hidden-icons hide-bar-icon3">
                             <Link to="/">
                                 <div className="hide-bar-circle">
                                 <i class="fas fa-copy"></i>
                                 </div>
                             </Link>
                         </div>
                         <div className="hidden-icons hide-bar-icon4">
                             <Link to="/">
                                 <div className="hide-bar-circle">
                                 <i class="fas fa-layer-group"></i>
                                 </div>
                             </Link>
                         </div>
                         <div className="hidden-icons hide-bar-icon5">
                             <Link to="/">
                                 <div className="hide-bar-circle">
                                 <i class="fas fa-home"></i>
                                 </div>
                             </Link>
                         </div>
                     </div>
                 </div>
             </div>
            {/* hidden-bar */}
            </div>
        )
    }
}
