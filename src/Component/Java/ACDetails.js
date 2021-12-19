import React, { Component } from 'react'
import "./ACDetails.scss";
import User from "./fb/user.jpg"
export default class ACDetails extends Component {
    render() {
        return (
            <div className="AcDetails">
                <div className="Ac-controller">
                    <div className="ac-title">
                        <div className="ac-passd">
                            <span classNames="ac-arrowdf">
                                <i class="fas fa-arrow-left"></i>
                            </span>
                            <span className="ac-text">change password</span>
                        </div>
                    </div>
                    <div className="ac-User">
                        <div className="ac-img">
                            <img src={User} alt="hello" />
                        </div>
                        <div className="ac-dev">
                            <div className="ac-name">
                                <span className="ac-lo">surfiya jack</span>
                                <span classNames="text">brooklyn</span>
                            </div>
                        </div>
                    </div>
                    <div className="Ac-form">
                       <div className="form-list">
                       <div className="form-divide">
                               <div className="form-left">
                                 <div className="form-label">
                                     your name
                                 </div>
                                 <div className="form-menu">
                                   <input type="text" />
                               </div>
                               </div>
                               <div className=" form-left ">
                                 <div className="form-label">
                                     your name
                                 </div>
                                 <div className="form-menu">
                                   <input type="text" />
                               </div>
                               </div>
                           </div>
                           <div className="form-item ">
                               <div className="form-label">
                                   first name
                               </div>
                               <div className="form-menu">
                                   <input type="text" />
                               </div>
                           </div>
                           <div className="form-divide">
                               <div className="form-left">
                                 <div className="form-label">
                                     your name
                                 </div>
                                 <div className="form-menu">
                                   <input type="text" />
                               </div>
                               </div>
                               <div className=" form-left ">
                                 <div className="form-label">
                                     your name
                                 </div>
                                 <div className="form-menu">
                                   <input type="text" />
                               </div>
                               </div>
                           </div>
                          
                           <div className="form-item">
                               <div className="form-label">
                                   first name
                               </div>
                               <div className="form-menu">
                                   <input type="text" />
                               </div>
                           </div>
                        <div className="form-filo">
                            <input type="file" name="filo" id="filo"/>
                            <label className="fam-boi" for="filo">
                            <i class="fas fa-cloud-download-alt"></i>
                            <span className="text">drag and drop or click to replace</span>
                            </label>
                        </div>
                        <div className="form-save">
                            <span className="texo">save</span>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}
