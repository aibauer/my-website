import React, { Component } from 'react';
//components
import image from './files/AB.jpg';
import resume from './files/Resume.pdf';
//includes


  class HomePage extends Component {
    render() {
      return (
        <div className ="container-fluid">
            <div className="title">
                <img src={image} alt="profile" />
                <h1>Andrew Bauer</h1>
                <p>
                    AI Technical Specialist at IBM
                </p>
                <p>
                Georgia Tech Alum
                </p>
            </div>
            <div className="contact">
                <ul>
                    <li>
                        <button onClick={()=> window.open("https://www.linkedin.com/in/andrew-bauer-0451b8199/", "_blank")} className="button" ><span>LinkedIn </span></button>
                    </li>
                    <li>
                        <button onClick={()=> window.open("mailto:aibauer7@gmail.com")} className="button"><span>Email </span></button>
                    </li>
                    <li classname='last'>
                        <button onClick={()=> window.open(resume)} className="button"><span>Resume </span></button>
                    </li>
                </ul>
            </div>
        </div>
      );
  }  
}


export default HomePage;