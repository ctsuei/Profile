import React, { Component } from 'react';
import logo from './cLogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="header-content">
            <div className="header-logo">
              <img src={logo} className="header-logo" alt="logo" />
            </div>
            <div className="header-text">
              <div className="header-title">Christine (Tsuei) Hong</div>
              <a href="mailto:ctsuei@gmail.com" target="_top">ctsuei@gmail.com</a><br/>
              <a href="tel:+16262771847">626-277-1847</a>
            </div>
          </div>
        </div>
        <div className="resume">
          <div className="resume-content">
            <section>
              <h3 className="resume-section-title">- Technical Skills -</h3>
              <div>Languages: Javascript(ES5/ES6), PHP, HTML5, CSS3, SASS, SQL</div>
              <div>Frameworks: BackboneJS, ReactJS, Handlebars, Zend, ExtJS, jQuery</div>
            </section>
            <section>
              <h3 className="resume-section-title">- Experience -</h3>
              <h4 className="resume-section-job"><a href="https://dogvacay.com" target="_blank">Dogvacay</a> &bull; Sr. Front End/Full stack Engineer<br/>Santa Monica, CA &bull; April 2014 - July 2017</h4>
              <ul>
                <li>Build desktop, mobile web, and responsive pages in Javascript using BackboneJS, ReactJS, Handlebars template, CSS3/SCSS and HTML5.</li>
                <li>Build product features to increase conversion for e-commerce.</li>
                <li>Set up A/B testing for experimental features in PHP, JS, MySQL.</li>
                <li>Moved legacy code from inline javascript to Backbone and recently started moving code over to ReactJS.</li>
                <li>Interacted closely with designers, product, and qa in initiative teams.</li>
                <li>Code reviewing and helping out with the interview process.</li>
              </ul>
              <h4 className="resume-section-job">Exelis/Saalex - NASA Deep Space Network &bull; Associate Software Engineer<br/>Monrovia, CA &bull; June 2010 - April 2014</h4>
              <ul>
                <li>Build internal web applications and mobile web applications for network and operation engineers using PHP with Zend Framework, ExtJS, jQuery, MSSQL, MySQL, MongoDB, and Java.</li>
                <li>Build iOS mobile applications for management.</li>
                <li>Web applications automate the generation of charts and reports, parsing data, displaying views of close to real time equipment status.</li>
                <li>Worked with clients from design, documentation, development, testing, to production.</li>
              </ul>
              <h4 className="resume-section-job">Cal Poly Pomona: Instructional and Information Technology &bull; Classroom Studio Operator<br/>Pomona, CA &bull; October 2007-June 2010</h4>
              <ul>
                <li>Design and develop in-house Java programs required to create and manipulate video/transcript files on servers.</li>
                <li>Video production, encoding, streaming of classroom instructions and online classes.</li>
                <li>Captioning instructional materials for web accessibility.</li>
              </ul>
              <h4 className="resume-section-job">Cal Poly Pomona: Department of Computer Science &bull; Grader<br/>Pomona, CA &bull; April 2009-July 2009</h4>
              <ul>
                <li>Grading homework and project for professor.</li>
                <li>Ability to catch errors in student’s work and codes.</li>
              </ul>
              </section>
              <section>
                <h3 className="resume-section-title">- Education -</h3>
                <div>
                  California State Polytechnic University, Pomona<br/>
                  <span>Graduate Studies &bull; Computer Science &bull; 2007–2010</span>
                </div>
                <br/>
                <div>
                  University Of California, Riverside<br/>
                  <span>Bachelor of Science &bull; Biology &bull; 2001-2006</span>
                </div>
              </section>
              <section>
                <h3 className="resume-section-title">- Additional Skills -</h3>
                <div>Languages: English and Chinese-Mandarin.</div>
              </section>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
