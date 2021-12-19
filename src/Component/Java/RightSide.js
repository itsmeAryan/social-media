import React, { Component } from 'react'
import "./RightSide.scss";
import { Link, NavLink } from "react-router-dom";
import User from "./img/user12.png";
import Grp from './groups/grp1.jpg'
export default class RightSide extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Requests: ["Tesla", "Ambani", "jeff"],
            groups: [{
                defaultClassName: "Request-controller", diffclassName: "requests", name: "friend request", showConfirm: true, showDetails: false,
                margin: "reuest-false"
            }, {
                defaultClassName: "Request-controller", diffclassName: "confirm-requests  ", name: "confirm friend", showConfirm: false, showDetails: true,
                margin: "reuest-true"
            }],
            suggestGroup: [{
                btnhide: false,
                name:"suggested group"
            }, { btnhide: true,
            name:"suggested page" }]
        }
    }
    render() {
        return (
            <div className="RightBar">
                <div className="Rightbar-manager">
                    {this.state.groups.map((xo, index) => (
                        <div className={`${xo.defaultClassName} ${xo.diffclassName}`} key={index}>
                            <div className="Right-Heading friend-request-bar">
                                <div className="Left-heading">
                                    <span className="frd">{xo.name}</span>
                                </div>
                                <div className="right-heading request">
                                    <Link to="/friends">See all</Link>
                                </div>
                            </div>
                            {this.state.Requests.map((x, index) => (
                                <div className={`Request-box  friends-reqst ${xo.margin}`} key={index}>
                                    <div className="Request-holder">
                                        <div className="chain-request">
                                            <div className="request-img ">
                                                <img src={User} alt="user friend request" />
                                            </div>
                                            <div className="request-details">
                                                <div className="request-name">
                                                    <span className="text">{x}</span>
                                                </div>
                                                <div className="request-meta">
                                                    <span className="text">12 mutual friends</span>
                                                </div>
                                            </div>
                                            {xo.showDetails && <div className="reuqest-check">
                                                <div className="check-link">
                                                    <div className="check-circle">
                                                        <i class="fas fa-angle-right"></i>
                                                    </div>
                                                </div>
                                            </div>}

                                        </div>
                                        {xo.showConfirm && <div className="request-accept ">
                                            <div className="Accept-box accept-me">
                                                <span className="text">confirm</span>
                                            </div>
                                            <div className="Accept-box cancel-me">
                                                <span className="text yup">delete</span>
                                            </div>
                                        </div>}

                                    </div>
                                </div>
                            ))}

                        </div>
                    ))}
                    {/* suggest group and link */}
                    {this.state.suggestGroup.map((x) => (
                        <div className="Suggest-groups">
                            <div className="Suggest-controller">
                                <div className="Group-links">
                                    <div className="Group-text">
                                        <span className="text">{x.name}</span>
                                    </div>
                                    <div className="Group-lin9k">
                                        <Link to="/">see all</Link>
                                    </div>
                                </div>
                                <div className="Group-details">
                                    <div className="Group-img imt0">
                                        <img src={Grp} alt="group icon" />
                                    </div>
                                    <div className="group-members" style={{display:!x.btnhide?"flex":"none"}}>

                                        <div className="memebrs-joined family-tag">
                                            <ul className="member-controller">
                                                <li className="member-par">
                                                    <span className="member-child">
                                                        <img src={User} alt="members-photo" />
                                                    </span>
                                                </li>
                                                <li className="member-par lef-ellem">
                                                    <span className="member-child">
                                                        <img src={User} alt="members-photo" />
                                                    </span>
                                                </li>   <li className="member-par lef-ellem" style={{ left: "2.3rem" }}>
                                                    <span className="member-child">
                                                        <img src={User} alt="members-photo" />
                                                    </span>
                                                </li>   <li className="member-par lef-ellem" style={{ left: "3.5rem" }}>
                                                    <span className="member-child">
                                                        <img src={User} alt="members-photo" />
                                                    </span>
                                                </li>
                                                <li className="member-par mem-hiker" style={{ left: "5rem" }}>
                                                    <span className="member-child">
                                                        <span className="gem">+</span><span className="gem">2</span>
                                                    </span>
                                                </li>
                                                <div className="member-par lef-ellem member-controller-2" style={{ left: "9rem" }}>
                                                    <span>members joined</span>
                                                </div>
                                            </ul>

                                        </div>
                                    </div>
                                    <div className="grp-off-link" style={{display:x.btnhide? "flex":"none"}}>
                                        <div className="group-circle">
                                            <Link to="/">like page</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="Group-details" style={{display:x.btnhide ?"flex":"none"}}>
                                    <div className="Group-img imt0">
                                        <img src={Grp} alt="group icon" />
                                    </div>
                                    <div className="group-members" style={{display:!x.btnhide?"flex":"none"}}>

                                        <div className="memebrs-joined family-tag">
                                            <ul className="member-controller">
                                                <li className="member-par">
                                                    <span className="member-child">
                                                        <img src={User} alt="members-photo" />
                                                    </span>
                                                </li>
                                                <li className="member-par lef-ellem">
                                                    <span className="member-child">
                                                        <img src={User} alt="members-photo" />
                                                    </span>
                                                </li>   <li className="member-par lef-ellem" style={{ left: "2.3rem" }}>
                                                    <span className="member-child">
                                                        <img src={User} alt="members-photo" />
                                                    </span>
                                                </li>   <li className="member-par lef-ellem" style={{ left: "3.5rem" }}>
                                                    <span className="member-child">
                                                        <img src={User} alt="members-photo" />
                                                    </span>
                                                </li>
                                                <li className="member-par mem-hiker" style={{ left: "5rem" }}>
                                                    <span className="member-child">
                                                        <span className="gem">+</span><span className="gem">2</span>
                                                    </span>
                                                </li>
                                                <div className="member-par lef-ellem member-controller-2" style={{ left: "9rem" }}>
                                                    <span>members joined</span>
                                                </div>
                                            </ul>

                                        </div>
                                    </div>
                                    <div className="grp-off-link" style={{display:x.btnhide? "flex":"none"}}>
                                        <div className="group-circle">
                                            <Link to="/">like page</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* venets name */}
                    <div className="Event-occur">
                        <div className="event-controler">
                            <div className="Even-list">
                                <div className="Event-list-text">
                                    <span className="text">event</span>
                                </div>
                                <div className="event-link">
                                    <Link to="/">see all</Link>
                                </div>
                            </div>
                            <div className="event-item">
                                <div className="Event-img">
                                    <div className="event-circle">
                                        <span className="Event-month">Feb</span>
                                        <span className="Event-date">22</span>

                                    </div>
                                </div>
                                <div className="event-name">
                                    <div className="event-title">
                                        <span className="text">meeting with clients</span>
                                    </div>
                                    <div className="event-heading">
                                        <span className="text">41 madison ave, floor 24 new york, NY 10010</span>
                                    </div>
                                </div>
                            </div>
                            <div className="event-item">
                                <div className="Event-img">
                                    <div className="event-circle">
                                        <span className="Event-month">Feb</span>
                                        <span className="Event-date">22</span>

                                    </div>
                                </div>
                                <div className="event-name">
                                    <div className="event-title">
                                        <span className="text">meeting with clients</span>
                                    </div>
                                    <div className="event-heading">
                                        <span className="text">41 madison ave, floor 24 new york, NY 10010</span>
                                    </div>
                                </div>
                            </div>
                            <div className="event-item">
                                <div className="Event-img">
                                    <div className="event-circle">
                                        <span className="Event-month">Feb</span>
                                        <span className="Event-date">22</span>

                                    </div>
                                </div>
                                <div className="event-name">
                                    <div className="event-title">
                                        <span className="text">meeting with clients</span>
                                    </div>
                                    <div className="event-heading">
                                        <span className="text">41 madison ave, floor 24 new york, NY 10010</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        )
    }
}
