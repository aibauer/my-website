import React, { Component } from 'react';

//components
import hockey from './files/hockey.jpg';
//includes


  class About extends Component {
    render() {
      return (
        <div className ="container-fluid">
            <div className="top">
              <img src={hockey} alt="hockey"/>
              <h1><mark>About Me</mark></h1>
            </div>
            <div className ="content">  
              <p className="opening">My name is Andrew Bauer, and I am a third-year computer science major at Georgia Tech. My concentrations are in Intelligence and People, and I have interests in product management, human computer interaction, and big data. This summer, I am working as an Enterprise Transformation Intern at Grant Thornton where I will be doing product management work on different technology products within the accounting industry. </p>         
              <p>Prior to my enrollment at Georgia Tech, a majority of my ventures revolved around soft skill development. For four years I served as the volunteer director of the Teams For Kids Foundation, Inc., a 501(c) non-profit organization founded in 2014 that seeks to provide children from underserved families in New Jersey with the ability to participate in sports. I maximized fundraising through writing grants, planning events, direct mail solicitations, and launching the organization’s largest initiative: The Student Athlete Ambassador Program. Through these experiences, I learned valuable skills of leadership, verbal and written communication, and collaboration.</p>      
              <p>More recently, my well-developed soft skills have become complimented with technical skills. During the Fall 2020 semester, I worked as a Data Scientist and Engineer for the Discussion Forum sub team of the Data Driven Education Vertically Integrated Project at Georgia Tech. On this team, I collected and analyzed data from the academic discussion boards of Georgia Tech’s learning management systems using languages and packages such as python, pandas, and numPy. Additionally, I supported the front-end team through the use of python libraries such as matplotlib and bokeh to visualize this data. Ultimately, my team and I used natural language processing and sentiment analysis techniques to create python scripts and visualizations to be used in a web application with the goal of aiding Georgia Tech professors in their instruction. Additionally, this team utilized agile methodologies with weekly Scrum-style stand up meetings and an interation plan.</p>
              <p>Furthermore, I have experience in software and application development. I have completed coursework in object-oriented programming, and in data structures and algorithms. Additionally, I have completed a project-based course where I developed a farm simulation game on a 5-student team. Through this experience, I became accustomed to object-oriented analysis and design as well as project management practices such as agile development, the unified process, and UML diagraming. During the Spring 2021 semester, I began my Junior Design Project, where I have been writing user stories, creating UX prototypes, and performing user research while working directly with an assigned client with the goal of developing a biometric authentication system and web application to be used by Georgia Tech students.</p>
              <p>Outside of academics, I am an active member of my fraternity, Alpha Epsilon Pi at Georgia Tech, where I currently serve as Vice President and as Philanthropy Chair. I also previously served as Social Chair (I held the position during COVID-19, how fun!). Additionally, I play on the Georgia Tech Club Ice Hockey Team and used to play the trombone in a jazz combo at Georgia Tech. In my free time I enjoy watching sports, reading and learning basketball statistics and analytics, listening to music, and trying new foods.</p>
            </div>
        </div>
        
      );
  }  
}


export default About;