import React, { Component } from 'react'
import "./Setting.scss";
import {Link} from "react-router-dom"
export default class Setting extends Component {
    render() {
        return (
            <div className="Setting">
                <div className="Setting-controller">
                    <div className="Setting-title">
                        <span className="text">setting</span>
                    </div>
                    <div className="Setting-box">
                        <div className="setting-name">
                            <span className="text">general</span>
                        </div>
                        <div className="set-items">
                            <div className="setting-icon">
                                <div className="setting-circle">
                                <span className="icon-img">
                                <i class="fas fa-map-marker-alt"></i>
                                </span>
                                </div>
                                <div className="Set-0pro">
                                <span className="shu-name">accounst</span>

                                </div>
                            </div>
                            <div className="sett-link">
                                <Link to="/">
                                <i class="fas fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="set-items">
                            <div className="setting-icon">
                                <div className="setting-circle">
                                <span className="icon-img">
                                <i class="fas fa-map-marker-alt"></i>
                                </span>
                                </div>
                                <div className="Set-0pro">
                                <span className="shu-name">accounst</span>

                                </div>
                            </div>
                            <div className="sett-link">
                                <Link to="/">
                                <i class="fas fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="Setting-box">
                        <div className="setting-name">
                            <span className="text">accounts</span>
                        </div>
                        <div className="set-items">
                            <div className="setting-icon">
                                <div className="setting-circle">
                                <span className="icon-img">
                                <i class="fas fa-map-marker-alt"></i>
                                </span>
                                </div>
                                <div className="Set-0pro">
                                <span className="shu-name">accounst</span>

                                </div>
                            </div>
                            <div className="sett-link">
                                <Link to="/">
                                <i class="fas fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="set-items">
                            <div className="setting-icon">
                                <div className="setting-circle">
                                <span className="icon-img">
                                <i class="fas fa-map-marker-alt"></i>
                                </span>
                                </div>
                                <div className="Set-0pro">
                                <span className="shu-name">accounst</span>

                                </div>
                            </div>
                            <div className="sett-link">
                                <Link to="/">
                                <i class="fas fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="Setting-box">
                        <div className="setting-name">
                            <span className="text">other</span>
                        </div>
                        <div className="set-items">
                            <div className="setting-icon">
                                <div className="setting-circle">
                                <span className="icon-img">
                                <i class="fas fa-map-marker-alt"></i>
                                </span>
                                </div>
                                <div className="Set-0pro">
                                <span className="shu-name">accounst</span>

                                </div>
                            </div>
                            <div className="sett-link">
                                <Link to="/">
                                <i class="fas fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="set-items">
                            <div className="setting-icon">
                                <div className="setting-circle">
                                <span className="icon-img">
                                <i class="fas fa-map-marker-alt"></i>
                                </span>
                                </div>
                                <div className="Set-0pro">
                                <span className="shu-name">accounst</span>

                                </div>
                            </div>
                            <div className="sett-link">
                                <Link to="/">
                                <i class="fas fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
