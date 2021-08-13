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
              <p style={{fontSize:"25px"}}>
                An aspiring software developer/ software engineer in my third year of computer science with a business minor.
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
