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
              I am a recent graduate with an Honours Bachelor of Science in Computer Science and a minor in Business Management from Wilfrid Laurier University. My journey in technology has been driven by a deep curiosity and a passion for solving complex problems, leading me to roles at Google where I contributed to both the Google Cloud Build OSS and Gmail teams. My work primarily involved developing CI/CD pipelines, enhancing infrastructure, and improving developer tools using technologies like Angular, Java, Tekton, Docker, and APIs.

              <br/>Throughout my academic and professional journey, I have consistently sought to expand my skill set, becoming proficient in programming languages such as Python, JavaScript, Java, C, and Golang. My love for coding and problem-solving has been evident not only in my professional work but also in the numerous personal projects I've undertaken, such as developing full-stack applications and algorithm visualizers.

              <br/>I am driven by a desire to continue growing within the field, eager to take on new challenges that allow me to apply and further refine my skills. I look forward to contributing to innovative projects and making meaningful impacts within the tech industry.
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
