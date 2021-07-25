import React, { Component } from 'react';

//components
import proj1 from "./files/vis.jpg";
//includes


  class Projects extends Component {
    render() {
      return (
        <div className ="container-fluid">
          <div className="projTop">
            <h1>
                Projects
            </h1>
          </div>
          <div className ="projContainer">
            <img src = {proj1} alt="vis" />
            <div>
              <a>Characterizing Aircraft Incidents Dashboard</a>
              <p>Utlized d3.js and bootstrap to create interactive info vis dashboard used to characterize distributions of aircraft incident data provided by a given csv file.
                Completed as final project for Information Visualization course.
              </p>
            </div>
          </div>
        </div>
      );
  }  
}


export default Projects;