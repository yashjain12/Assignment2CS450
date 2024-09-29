import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div className="flex-container" id="c1">
                <div className="intro">
                    <h2>{this.props.personInfo.name}</h2>
                    <h3 id="datascientist">{this.props.personInfo.occupation}</h3>
                </div>
                <div id="emailwebmobile">
                    <div>Email: <a href="mailto:abc@gmail.com">{this.props.contactInfo.email}</a></div>
                    <div>Web: {this.props.contactInfo.web}</div>
                    <div>Mobile:{this.props.contactInfo.mobile}</div>
                </div>
            </div>
        )
    }
}

export default Header;
