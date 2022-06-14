import React from "react";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="line"></div>
      <div className="pcards">
        <div className="pimg">
          <img src={"assets/Nykaa.png"} alt="" />
        </div>
        <div className="pinf">
          {/* <div className="pinfone"> */}
          <h3>Nykaa Fashion(clone)</h3>
          <p>
          An E-commerce website for purchasing clothings & electronic gadgets
            </p>
            {/* </div> */}
          <h4>Tech Stack</h4>
          <p>HTML5 . CSS3 . Javascript . Local Storage</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://keen-clarke-eefd2c.netlify.app/">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/Sourav12061999/nykaafashion"> CODE</a></button>
          </div>
        </div>
          </div>
          
      

       <div className="pcards">
        <div className="pimg">
          <img src={"assets/Faasos.png"} alt="" />
        </div>
        <div className="pinf">
        <h3>Faasos(clone)</h3>
          <p>
          A website to buy food online from faasos restaurants
           </p>
          <h4>Tech Stack</h4>
          <p>HTML . CSS . Javascript . Local Storage</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://faasoos.netlify.app/">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/aashishkumar1/Faasos-clone"> CODE</a></button>
          </div>
        </div>
      </div>

      

   {/*   <div className="pcards">
        <div className="pimg">
          <img src={"assets/lakme.png"} alt="" />
        </div>
        <div className="pinf">
        <h3>LAKME(clone)</h3>
          <p>
            A clone of Zoomcar is a self-drive car rental service.
            </p>
          <h4>Tech Stack</h4>
          <p>HTML5 . CSS . JavaScript . Localstorage</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://tumblrclone.netlify.app/">DEMO</a></button>
            <button><a target="_blank" href=" https://github.com/nkil123/lakme_clone"> CODE</a></button>
          </div>
        </div>
      </div>
  */}


         
    </div>
  );
}
