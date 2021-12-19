import React, { Component,useCallback,useState } from 'react'
import './Header.scss';
import { Link } from "react-router-dom";
import Sidebar from "./SideBar";
import Hiddenbar from "./HiddenBar";
import RightSide from './RightSide';
import Menu from "./Menu"
import Setting from './Setting';
import CPass from './CPass';
import ACDetails from './ACDetails';
import Contact from './Contact';
import Social from './Social';
function Header(){
    const [status,setstus]=useState(false);
    
    const Check=()=>{
        window.addEventListener("resize",()=>{
            if(window.innerWidth <=990){
               setstus(true)
            }else{
                setstus(false)
            }
        })
    }
    Check();
    useCallback(Check(),[status])


        return (
            <>
                <div className="Header">
                    <div className="HeaderManager Manager" data-manager="Header-controller">
                        <div className="Header-controller container" data-controller="Header-container">
                            <div className="Header-logo logo-img" data-logo="its-logo">
                                <Link to="/">
                                    <div className="logo-icon logo-frame-icon">
                                        <i class="fas fa-bolt"></i>
                                    </div>
                                    <div className="logo-text logo-icon text-logo" data-img="logo-text">
                                        <span className="logo-name">
                                            I-Media
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {/* logo-section */}
                        <div className="Input-Section search-people" data-search="search-people">
                            <div className="search-controller main-search">
                                <div className="search-icon">
                                    <i class="fas fa-search"></i>
                                </div>
                                <div className="search-box google-search" data-input="google">
                                    <input type="text" placeholder="search people" name="search" id="search" />
                                </div>
                            </div>
                        </div>
                        {/* input-section */}

                        <div className="menu-section menu-btn" data-btn="menu-btn">
                            <div className="menu-manager">
                                <div className="menu-controller">
                                    <div className="menu-icon menu-icon1">
                                        <Link to="/">
                                            <div className="menu-circle">
                                                <i class="fas fa-home"></i>
                                            </div></Link>
                                    </div>
                                    <div className="menu-icon menu-icon2">
                                        <Link to="/">
                                            <div className="menu-circle">
                                                <i class="fas fa-bolt"></i>
                                            </div></Link>
                                    </div>
                                    <div className="menu-icon menu-icon3">
                                        <Link to="/">
                                            <div className="menu-circle">
                                                <i class="fas fa-video"></i>
                                            </div></Link>
                                    </div>
                                    <div className="menu-icon menu-icon4">
                                        <Link to="/">
                                            <div className="menu-circle">
                                                <i class="far fa-user"></i>
                                            </div></Link>
                                    </div>
                                    <div className="menu-icon menu-icon5">
                                        <Link to="/">
                                            <div className="menu-circle">
                                                <i class="fas fa-shopping-bag"></i>
                                            </div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* menu-section */}
                        <div className="setting-section user-setting" data-setting="user-setting">
                            <div className="setting-manager">
                                <div className="setting-controller fab">
                                    <div className="setting-icon set-icon1">
                                        <Link to="/">
                                            <div className="setting-circle">
                                                <i class="far fa-bell"></i>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="setting-icon set-icon2">
                                        <Link to="/">
                                            <div className="setting-circle">
                                                <i class="far fa-comment-alt"></i>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="setting-icon set-icon3">
                                        <Link to="/">
                                            <div className="setting-circle">
                                                <i class="fas fa-cog"></i>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="setting-icon set-icon4">
                                        <Link to="/">
                                            <div className="setting-circle">
                                                <i class="far fa-bell"></i>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* setting-section */}

                        <div className="hd-setting hdset" data-hid="hd-setting">
                            <div className="hd-manaager hd-md">
                                <div className="hd-controller">
                                    <div className="hd-icons hd-icn1">
                                        <Link to="/">
                                            <div className="hide-circle">
                                                <i class="far fa-comment"></i>
                                            </div></Link>

                                    </div>
                                    <div className="hd-icons hd-icn2">
                                        <Link to="/">
                                            <div className="hide-circle">
                                                <i class="fas fa-video"></i>
                                            </div></Link>

                                    </div>
                                    <div className="hd-icons hd-icn3">
                                        <Link to="/">
                                            <div className="hide-circle">
                                                <i class="fas fa-search"></i>
                                            </div></Link>

                                    </div>
                                    <div className="hd-icons hd-icn4">

                                        <div className="hide-circle" >
                                            <button className="fab-btn"></button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* hidden-setting */}





                    </div>
                </div>
                <div className="I-M-Parent">
                 <div className="Care-Taker">
                 <div className="parent-left">
                     <Sidebar/>
                 </div>
                  <div className="parent-right">
                      <div className="sub-left">
                          <Menu/>
                      </div>
                      <div className="sub-right">
                            <RightSide/>
                      </div>

                  </div>
                 </div>

                </div>




            </>
        )
}
export default Header