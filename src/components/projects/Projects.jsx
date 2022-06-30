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
          An E-commerce website for purchasing clothings & electronic gadgets. It has login, filter, dynamic cart, various product page and payment functionality.
            </p>
            {/* </div> */}
          <h4>Tech Stack</h4>
          <p>HTML5 . CSS3 . Javascript . Local Storage</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://keen-clarke-eefd2c.netlify.app/">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/aashishkumar1/Nykaafashion_clone"> CODE</a></button>
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
          A website to buy food online from faasos restaurants. It has signin, signup, search, filter, dynamic cart, live location features, coupons for payment.
           </p>
          <h4>Tech Stack</h4>
          <p>HTML . CSS . Javascript . Local Storage</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://faasoos.netlify.app/">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/aashishkumar1/Faasos-clone"> CODE</a></button>
          </div>
        </div>
      </div>

      

   <div className="pcards">
        <div className="pimg">
          <img src={"assets/expensetracker.png"} alt="" />
        </div>
        <div className="pinf">
        <h3>Expense Tracker</h3>
          <p>
            It is an expense tracker app. In this, you can view expenses with filter and also store your expenses.
            </p>
          <h4>Tech Stack</h4>
          <p>REACT . CSS </p>
          <div className="card_btn">
            <button><a target="_blank" href="https://expense-tracker122.netlify.app/">DEMO</a></button>
            <button><a target="_blank" href=" https://github.com/aashishkumar1/ExpenseManager"> CODE</a></button>
          </div>
        </div>
      </div>
  


         
    </div>
  );
}
