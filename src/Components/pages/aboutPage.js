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
              <p className="opening">My name is Andrew Bauer, and I am a Georgia Tech graduate, receiving my B.S. in computer science in May 2023 with concentrations in Intelligence and People. I have career interests in product management, human computer interaction, and data science. I believe that I am a technically savvy individual with exceptional communicative and organizational skills. I seek to utilize this diverse skillset to nurture the development and deployment of technology that can help benefit society.  I am currently working as a an AI Technical Specialist (sales engineer) at IBM in Chicago, Illinois, with a specialization on IBM's generative AI, buusiness analytics, and process automation software. In this role, I combine my technical product knowledge and expertise with my strong communication skills to serve as the technical liason in a client's pre-sales process. I provide technical product knowledge, deliver presentations and demos, and help contribute to the design and development of proof of concepts. I regularly ideate use cases and serve as a trusted advisor in helping my clients responsibly and effectively infuse AI into their business operations.</p>
              <p>Prior to this, I took on multiple opportunities in the field of product management. In the summer of 2021, I worked as an Enterprise Transformation Intern at Grant Thornton, where I was tasked in aiding the development of several IT platforms for the accounting firm. I was responsible for managing the user facing component of the firm’s client data platform. I collaborated with UX designers and outsourced software teams to author user stories and features for the platform, which was pivotal in the data enablement of the accounting firm. In addition to this, I completed IT analytics work on the firm’s AI chatbot, Alyx. By creating Power BI dashboards to visually analyze UAT testing result data, I provided insight on the quality of the chatbot’s training data, allowing for improvements in the functionality of the tool. The following summer, I interned at American Express, working as a product manager on their Enterprise Platforms team. There, my main responsibility was to provide analytical reporting of the development of the company’s Digital Banking Enterprise. I defined KPIs and OKRs for the business initiative demands of the enterprise platforms, and leveraged Jira data using Tableau to analyze them in an effort to aid in the PI planning process.</p>  
              <p>Beyond my work experience, I have developed proficiencies in designing UI frameworks and prototypes using Figma, creating machine learning models from python packages such as sklearn and pytorch, and making data visualizations using d3.js through my computer science degree at Georgia Tech. I also possess a strong analytical skillset having taken on projects involving the use of SQL, R, Tableau, and Power BI. With a robust combination of soft and technical skills through my project and work experiences, I have blossomed into a capable developer, data scientist and analyst, product manager, and UX/UI designer. For further information on some of my projects, feel free to take look at the “Projects” section of this web app.</p>
              <p>Outside of the office, I am an avid reader, enjoying primarily short stories, memoirs, and contemporary fiction. I have a major appreciation of storytelling, regardless of the genre. This interest in expertise has als launched a new hobby since moving to Chicago: long-form improv. I completed the iO Theater training program in October 2024, and am always seeking opportunities to rehearse and perform on stage. In addition to this, I love going to concerts, comedy shows, and sporting events, and am an avid follower of the NBA.</p>
            </div>
        </div>
        
      );
  }  
}


export default About;