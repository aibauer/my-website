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
              <p className="opening">My name is Andrew Bauer, and I am a recent Georgia Tech graduate, receiving my B.S. in computer science in May 2023 with concentrations in Intelligence and People. I have career interests in product management, human computer interaction, and data science. I believe that I am a technically savvy individual with exceptional communicative and organizational skills. I seek to utilize this diverse skillset to nurture the development and deployment of technology that can help benefit society.  I am currently working as a Brand Technical Specialist at IBM in Chicago, Illinois. Upon the completion of Global Sales School, I will be combining my domain knowledge and expertise in software and data with my communicative and developer skills to serve as a technical liaison for a sales team responsible for deploying IBM’s Data, AI, and Automation products in the U.S. Midwest region.</p>
              <p>Prior to this, I took on multiple opportunities in the field of product management. In the summer of 2021, I worked as an Enterprise Transformation Intern at Grant Thornton, where I was tasked in aiding the development of several IT platforms for the accounting firm. I was responsible for managing the user facing component of the firm’s client data platform. I collaborated with UX designers and outsourced software teams to create user stories and features for the platform, which was pivotal in the data enablement of the accounting firm. In addition to this, I completed IT analytics work on the firm’s AI chatbot, Alyx. By creating Power BI dashboards to visually analyze UAT testing result data, I provided insight on the quality of the chatbot’s training data, allowing for improvements in the functionality of the tool. The following summer, I interned at American Express, working as a product manager on their Enterprise Platforms team. There, my main responsibility was to provide analytical reporting of the development of the company’s Digital Banking Enterprise. I defined KPIs and OKRs for the business Initiative demands of the enterprise platforms, and leveraged Jira data using Tableau to analyze them in an effort to aid in the PI planning process.</p>  
              <p>Beyond my work experience, I have developed proficiencies in designing UI frameworks and prototypes using Figma, creating machine learning models from python packages such as sklearn and pytorch, and making data visualizations using d3.js through my computer science degree at Georgia Tech. I also possess a strong analytical skillset having taken on projects involving the use of SQL, R, Tableau, and Power BI. With a robust combination of soft and technical skills through my project and work experiences, I have blossomed into a capable developer, data scientist and analyst, product manager, and UX/UI designer. For further information on some of my projects, feel free to take look at the “Projects” section of this web app.</p>
              <p>Outside of the office, I am an avid reader, enjoying primarily short stories, memoirs, and novels. I have a major appreciation of storytelling, regardless of the genre. I also am extremely interested in neuroscience and psychology, frequently reading non-fiction works and articles on these topics as well. Additionally, I possess a passion for basketball, a sport that is currently undergoing a major transformation in the way it’s played through an emphasis on data analytics, as well as for sports in general (I played club ice hockey while at Georgia Tech).  While I have recently embarked on a new career journey, I am still very much open to working in the sports and entertainment industry in the future, and would very much enjoy discussing the prospect of this at a greater length.</p>
            </div>
        </div>
        
      );
  }  
}


export default About;