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
              <p className="opening">My name is Andrew Bauer, and I am a fourth-year computer science major at Georgia Tech with concentrations in in Intelligence and People. I have academic and career interests in product management, human computer interaction, and data science. This summer, I worked at American Express as a Product Analyst Intern, where I performed data analysis on product management data for the company's Digital Banking Enterprise amongst other platforms. I leveraged Jira data on Business Initiative Demands using Tableau to analyze KPIs, aid in planning, and analyze software team capacity.</p>
              <p>Throughout my time at Georgia Tech, I have placed a major focus on complimenting my strong soft skillset with applicable technical abilities. I came into college with no experience in the field of STEM or in computer science, and after completing my introduction coursework for my undergraduate degree, I quickly began to take on different projects and opportunities. During the Fall 2020 semester, I worked on a software team for my first time, serving as a data scientist for the Data Driven Education VIP team at Georgia Tech. On this team, I collected and analyzed data from academic discussion boards using python packages and libraries including pandas, numPy, and textblob. Additionally, I supported the front-end team using tools such as matplotlib to create visualizations of this data. Ultimately, my team and I successfully performed natural language processing and sentiment analysis techniques to create a web application prototype that would assist Georgia Tech professors in their instruction.</p>      
              <p>Over time, I gained further experience in software and application development. I have completed coursework in object-oriented programming, data structures and algorithms, objects and design, info visualization, artificial intelligence, and machine learning. During the Spring 2021 and Fall 2021 semesters, I completed my Junior Design Project, ATL Wildin’. I worked primarily as a front-end developer on this team, utilizing HTML, javascript, CSS, bootstrap, and python to develop the user interface of the web application: a game where users would tag photos of animals taken on Georgia Tech’s campus greenspaces as a means of biodiversity data collection. In addition to this, working on this team introduced me to agile methodologies, user research, and design documentation with UML diagraming.</p>
              <p>I also boast work experience in the field of product management, having worked as an Enterprise Transformation intern at Grant Thornton last summer. I was tasked with completing several projects for the IT department of the accounting firm. I was responsible for managing the user facing component of the product, where users would be able to search for client datasets to send to downstream applications. I collaborated with product owners, UX designers, and the outsourced software team to create user stories and features, solidifying and ensuring the implementation of business requirements and usability criteria for the component. In addition to this, I completed IT analytics work on the firm’s AI. I created a power BI dashboard to visually analyze where and how the chatbot fails to resolve specific request, allowing for revisions in its knowledge base that would improve its performance. From this experience, I learned that creating products with the end-user and business needs in mind is extremely appealing to me, and is something I desire to continue to do after college.</p>
              <p>Beyond these experiences, I am proficient in designing UI frameworks and prototypes using figma, creating machine learning models from python packages such as sklearn and pytorch, and making data visualizations using tools such as d3.js, tableau, and power BI. For further information on some of my projects, please look at the “Projects” section of this application, which was developed from scratch using React.js.</p>
              <p>Outside of academics and work, I am a member of my fraternity, Alpha Epsilon Pi at Georgia Tech, where I have served as social chair, vice president, and philanthropy chair during my time as an active brother. Additionally, I currently play on the Georgia Tech Club Ice Hockey Team and played the trombone in a jazz combo at Georgia Tech. In my free time, I enjoy watching sports, listening to music, reading books, and trying new foods. I am also especially interested in basketball analytics and would potentially like to explore career opportunities in that field.</p>
            </div>
        </div>
        
      );
  }  
}


export default About;