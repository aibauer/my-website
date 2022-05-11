import React, { Component } from 'react';

//components
import proj1 from "./files/tag.jpg";
import proj2 from "./files/bs.jpg";
import proj3 from "./files/ruok.jpg";
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
            <a href="http://wildlife-tagger.herokuapp.com/" target="_blank" color="#235789">
            <img src = {proj1} alt="vis" />
            <div>
              <p></p>
              <a>ATL Wildin'</a>
              <p></p>
              <p>Biodiversity surveying game where users tag presented photos of animals as a means of data collection of biodiveristy on Georgia Tech's campus greenspaces</p>
              <p>Developed as a Django web application, using mySQL databases for the animal and image data, with a python backend and an HTML, CSS, and javascript front end</p>
              <p>Completed as junior design project at Georgia Tech</p>
            </div>
            </a>
          </div>
          <div className ="projContainer">
            <a href="https://dwwilson3.github.io/Brain-Tumor-Classification/report_final" target="_blank" color="#235789">
            <img src = {proj2} alt="bs" />
            <div>
              <p></p>
              <a>Brain Tumor Classification</a>
              <p></p>
              <p>Group project for machine learning course</p>
              <p>Sought to create machine learning model to classify dataset of brain MRI images based on type of tumor presented</p>
              <p>Utilized python packges such as numpy, pandas, matplotlib, keras, tensorflow, and sklearn to perform kmeans clustering and creater neural network and cnn on MRI brain scan dataset</p>
              
            </div>
            </a>
          </div>
          <div className ="projContainer">
            <a href="https://www.figma.com/proto/7hbTemmD0qs0wpMmp6togn/CS-3873?node-id=145%3A261&scaling=min-zoom&page-id=145%3A2&starting-point-node-id=145%3A261" target="_blank" color="#235789">
            <img src = {proj3} alt="ruok" />
            <div>
              <p></p>
              <a>R U OK?</a>
              <p></p>
              <p>Mobile application  prototype for app that provides college-aged students with mental health resources in an easty-to-use, accessible manner</p>
              <p>Completed for Special Topics in HCI course, where we were tasked with creating a home-healthcare technology UI prototype</p>
              <p>Completed user research to outline usability goals of application, performed evaluation on initial prototype, created final prototype using figma</p>
            </div>
            </a>
          </div>
        </div>
      );
  }  
}


export default Projects;