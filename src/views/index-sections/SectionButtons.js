/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import {
  Container,
  Row,
  Col,

} from "reactstrap";

function SectionButtons() {
    const [activeTab, setActiveTab] = React.useState("1");
    const toggle = (tab) => {
      if (activeTab !== tab) {
        setActiveTab(tab);
      }
    };
    

  
  return (
    <>
      <div className="section section-buttons">
        <Container>
          <div className="title" style={{textAlign:"center"}}>
            <h2>About Me</h2>
          </div>
          <div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="10">
              <p style={{fontSize:"25px",fontWeight:"400"}}>
              A third-year student at Wilfred Laurier University currently undergoing a degree in Computer science with management option with an expected graduation date of April 2023.
              In addition to this, I am also an aspiring software developer/software engineer. 
              My love for coding stems from my love for math which started as early as I can remember. 
              I always enjoyed solving challenging problems and realized coding would not only make me solve challenging problems, but the solution to some of these problems could have a real impact on something or someone.
              Upon this realization, coding became my passion and a big part of my life. 
              I chose computer science as a degree with no experience or knowledge of coding whatsoever. 
              Consequently, I had to be really determined and self-disciplined to learn and apply a lot of the skills required to be in the field of computer science.
              Although I have been able to apply some of these skills in my personal projects, I look forward to honing and applying them in real-world situations.
              Remember, I am always up for a challenge. 

              </p>
              <br />
              </Col>
        </Row>
        </div>
        <br/>
        
        </Container>
      </div>
    </>
  );
}

export default SectionButtons;
