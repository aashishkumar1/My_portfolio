import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="main" id="about">
      <div className="about">
        <h1>About Me</h1>
        <div className="line"></div>
        <div className="parCont">
          <div className="para">
            <h2>Hi , I am Aashish Kumar</h2>
           🏡 I live in Delhi.
             <br />
           <br />
            I am a Full-Stack Web Developer.
            <br />
            <br />
            I have done B.Tech in Computer Science and Engineering from PDM College of Engineering. 
            After graduation, I joined Masai School and from here my journey to become a full stack developer started. 
            In Masai, after five months I got selected as an Instructional Associate.
            I am always curious about learning new technologies, and love to develop scalable web applications.
            <br />
             <br />
          I have designed the
          clone of some of the websites using React, CSS, HTML and Javascript.
          Curious to learn and apply my skills on a large scale.
        </div>
        <div className="parImg">
          <img src="assets/aboutImg.jpg" alt="" />
          </div>
          </div>
      </div>
      <div className="skills">
        <h1>Proficiency</h1>
        <div className="line"></div>
        <div className="options">
          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/html5.png"} alt="" />
              </div>
              <div className="name">HTML</div>
            </div>
                  </div>
                  
                   <div className="icons">
            <div className="mainCO">
              <div className="iconContainer" >
                <img src={"assets/css3.png"} alt="" />
              </div>
              <div className="name">CSS</div>
            </div>
                  </div>
                  
                   <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/JavaScript.png"} alt="" />
              </div>
              <div className="name">Javascript</div>
            </div>
                  </div>
                  
                   <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/React.png"} alt="" />
              </div>
              <div className="name">React</div>
            </div>
                  </div>
                  
                   <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/redux.png"} alt="" />
              </div>
              <div className="name">Redux</div>
            </div>
          </div>
          
          

                   <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/npm.png"} alt="" />
              </div>
              <div className="name">NPM</div>
            </div>
          </div>
          
           <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/node.jpg"} alt="" />
              </div>
              <div className="name">Node.js</div>
            </div>
                  </div>
                  
           <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/express.png"} alt="" />
              </div>
              <div className="name">Express.js</div>
            </div>
          </div>
          
           <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/mongodb.png"} alt="" />
              </div>
              <div className="name">MongoDB</div>
            </div>
          </div>
          
           <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/material-ui.png"} alt="" />
              </div>
              <div className="name">Material-UI</div>
            </div>
          </div>
          
           <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/github.png"} alt="" />
              </div>
              <div className="name">GIT</div>
            </div>
          </div>
          
                  
        </div>
      </div>
    </div>
  );
}
