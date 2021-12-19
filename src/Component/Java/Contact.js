import React, { Component } from 'react'
import "./Contact.scss"
export default class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <div className="Contact-container">
                <div className="ac-title">
                        <div className="ac-passd">
                            <span classNames="ac-arrowdf">
                                <i class="fas fa-arrow-left"></i>
                            </span>
                            <span className="ac-text">change password</span>
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
