import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./SideBar.scss"
 class SideBar extends Component {
  
constructor(props){
    super(props)
    this.state={
        state:this.props.status,
        width:this.props.width
    }
}
    render() {
        
        return (
                <div className={`Side-bar hd-side sider`} data-side="side-bar">
                <div className="side-manager">
                    <div className="side-controller">
                        <div className="new-feed" data-new="feed-new">
                            <div className="feed-manager fd-manger">
                                <div className="heading-text">
                                    <h1>news feed</h1>
                                </div>
                                <div className="feed-controller">

                                    <div className="feed-icon feed-icn1">
                                       <Link to="/">
                                       <div className="feed-circle">
                                        <i class="fas fa-tv"></i>
                                        </div>
                                        <div className="feed-text8h">new feed</div>
                                       </Link>
                                    </div>
                                    <div className="feed-icon feed-icn2">
                                       <Link to="/">
                                       <div className="feed-circle">
                                       <i class="fas fa-award"></i>
                                        </div>
                                        <div className="feed-text8h">new feed</div>

                                       </Link>
                                    </div>
                                    <div className="feed-icon feed-icn3">
                                       <Link to="/">
                                       <div className="feed-circle">
                                       <i class="fas fa-globe"></i>
                                        </div>
                                        <div className="feed-text8h">new feed</div>

                                       </Link>
                                    </div>
                                    <div className="feed-icon feed-icn4">
                                       <Link to="/">
                                       <div className="feed-circle">
                                       <i class="fas fa-bolt"></i>
                                        </div>
                                        <div className="feed-text8h">new feed</div>

                                       </Link>
                                    </div>
                                    <div className="feed-icon feed-icn5">
                                       <Link to="/">
                                       <div className="feed-circle">
                                       <i class="far fa-user"></i>
                                        </div>
                                        <div className="feed-text8h">new feed</div>

                                       </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* new feed */}
                        <div className="  More-page" data-page="More-page">
                            <div className="more-controller">
                            <div className="heading-text">
                                    <h1>news feed</h1>
                                </div>
                                <div className="more-icon more-icn1">
                                    <div className="left-icon-mr icon-mr">
                                        <span className="ic-1"><i class="fas fa-inbox"></i></span>
                                        <span className="ic-text">email box</span>
                                    </div>
                                    <div className="right-icon icon-mr">
                                        <div className="feed-circle">
                                            <span className="fd-crcle-text">
                                                584
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="more-icon more-icn2">
                                    <div className="left-icon-mr icon-mr">
                                        <span className="ic-1"><i class="fas fa-home"></i></span>
                                        <span className="ic-text">email box</span>
                                    </div>
                                    
                                </div>
                                <div className="more-icon more-icn3">
                                    <div className="left-icon-mr icon-mr">
                                        <span className="ic-1"><i class="fas fa-map-marker-alt"></i></span>
                                        <span className="ic-text">email box</span>
                                    </div>
                               
                                </div>
                                <div className="more-icon more-icn4">
                                    <div className="left-icon-mr icon-mr">
                                        <span className="ic-1"><i class="fab fa-youtube"></i></span>
                                        <span className="ic-text">email box</span>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                        {/* more-pages */}
                        <div className="  Account-section" data-account="Account-stcn">
                            <div className="Account-controller ac-cn">
                            <div className="heading-text">
                                    <h1>news feed</h1>
                                </div>
                                <div className="ac-icon ac-icon1">
                                    
                                        <span className="ac-img ac-img1">
                                        <i class="fas fa-cog"></i>
                                        </span>
                                        <span className="ac-text ac-text1">setting</span>
                                    
                                </div>
                                <div className="ac-icon ac-icon2">
                                        <span className="ac-img ac-img1">
                                        <i class="fas fa-chart-pie"></i>
                                        </span>
                                        <span className="ac-text ac-text1">setting</span>
                                </div>
                                <div className="ac-icon ac-icon3">
                                        <span className="ac-img ac-img1">
                                        <i class="far fa-comment-alt"></i>
                                        </span>
                                        <span className="ac-text ac-text1">setting</span>
                                </div>
                            </div>
                        </div>
                        {/* Accounts */}

                    </div>
                </div>

            </div>
        )
    }
}
export default React.memo(SideBar)
