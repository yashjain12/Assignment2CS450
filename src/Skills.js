import React, { Component } from "react";

class Skills extends Component {
    render() {
        return (
            <div className="flex-container" id="c4">
                <div>Key Skills</div>
                <div className="keyskills">
                    {this.props.skillList.map((elem) => 
                        <div>{elem}</div>
                    )}
                </div>
            </div>
        )
    }
}

export default Skills;