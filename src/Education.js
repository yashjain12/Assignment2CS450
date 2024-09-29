import React, { Component } from "react";

class Education extends Component {
    render() {
        return (
            <div className="flex-container" id="c5">
                <div>Education</div>
                <div className='education'>
                    {this.props.collegeList.map((elem, index) => {
                        return (
                            <div>
                                <div>{this.props.collegeList[index]}</div>
                                <div>{this.props.degreeList[index]}</div>
                                <div>{this.props.yearList[index]}</div>
                                <div>GPA: {this.props.gpaList[index].toString()}</div>
                            </div>
                        );
                    }
                    )}
                </div>
            </div>
        )
    }
}

export default Education;