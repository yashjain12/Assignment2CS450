import React, { Component } from "react";

class PersonalProfile extends Component {
    render() {
        return (
            <div className="flex-container" id="c2">
                <div>
                    Personal Profile
                </div>
                <div className="personalinfo">
                    {this.props.whoAmI}
                </div>
            </div>
        )
    }
}

export default PersonalProfile;