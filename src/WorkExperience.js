import React, { Component } from "react";

class WorkExperience extends Component {
    render() {
        return (
            <div className="flex-container" id="c3">
                <div>Work Experience</div>
                <div className="workexperience">
                    {this.props.jobNames.map((elem, index) => {
                            return (
                                <div>
                                    <div>{this.props.jobNames[index]}</div>
                                    <div>{this.props.jobDescs[index]}</div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default WorkExperience;