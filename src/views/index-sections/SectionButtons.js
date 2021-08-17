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
              I am a third-year student, currently undergoing a computer science degree with a business minor at Wilfrid Laurier University.
              My love for coding and dream of becoming a software engineer stemmed from my internal drive to solve complex problems. Ever since 
              I was a child, I have loved math and essentially anything that could push me to grow mentally and develop my ingenuity, and it was this realization that
              led me to pursue a degree in computer science. I have been self-determined and have continuously pushed myself to refine my skills and excel in this field, which can 
              be seen by the numerous independent projects that I have completed as well as the extracurricular and volunteer opportunities that I have pursued to give me more of that hands-on experience. 
              I have developed a strong coding foundation and I look forward to being able to hone these skills and continue growing within the workplace.
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
