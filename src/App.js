
import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personInfo: {
        name: "Zh Rimel",
        occupation: "Data Scientist"
      },
      contactInfo: {
        email: "abc@gmail.com",
        web: "abc.github.io/abc",
        mobile: "01234567890"
      },
      whoAmI: "Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      jobNames: ["Job Title at Company (August 2022 - December 2023)", "Job Title 2 at Company 2 (August 2020 - December 2021)"],
      jobDescs: ["Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."],
      skillList: Array(9).fill("A Key Skill"),
      collegeList: ["New Jersey Institute of Technology", "New Jersey Institute of Technology"],
      degreeList: ["BS in Computer Science", "MS in Data Science"],
      yearList: ["2018-2022", "2022-23"],
      gpaList: [3.9, 4.0]
    }
  }
  render() {
    return [
        <Header personInfo = {this.state.personInfo} contactInfo = {this.state.contactInfo}></Header>,
        <PersonalProfile whoAmI = {this.state.whoAmI}></PersonalProfile>,
        <WorkExperience jobNames = {this.state.jobNames} jobDescs = {this.state.jobDescs}></WorkExperience>,
        <Skills skillList = {this.state.skillList}></Skills>,
        <Education collegeList = {this.state.collegeList} degreeList = {this.state.degreeList} yearList = {this.state.yearList} gpaList = {this.state.gpaList}></Education>
    ];
  }
}
export default App;
