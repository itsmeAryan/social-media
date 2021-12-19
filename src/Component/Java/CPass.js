import React, { Component } from 'react'
import "./CPass.scss"
export default class CPass extends Component {
    render() {
        return (
            <div className="CPass">
                <div className="Changep-controller">
                    <div className="cpass-title">
                        <div className="change-passd">
                            <span classNames="arrowdf">
                            <i class="fas fa-arrow-left"></i>
                            </span>
                            <span className="text">change password</span>
                        </div>
                    </div>
                    <div className="pass-form">
                        <div className="form-inpo">
                            <div className="form-label">current password</div>
                            <div className="form-input">
                                <input type="text" name="password" placeholder="current password"/>
                            </div>
                        </div>
                        <div className="form-inpo">
                            <div className="form-label">current password</div>
                            <div className="form-input">
                                <input type="text" name="password" placeholder="current password"/>
                            </div>
                        </div>
                        <div className="form-inpo">
                            <div className="form-label">current password</div>
                            <div className="form-input">
                                <input type="text" name="password" placeholder="current password"/>
                            </div>
                        </div>
                    </div>
                    <div className="Save-pass">
                        <span className="save-mel">save</span>
                    </div>
                </div>
            </div>
        )
    }
}
