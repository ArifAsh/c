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
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function SectionDownload() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Contacts</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="linkedin-sharrre btn-round  ml-2"
                color="google-bg"
                href = "https://www.linkedin.com/in/arif-ashogbon-95b1631a5/"
                id="tooltip840791273"
                target="_blank"
               
              >
                <i className="fa fa-linkedin" /> Linkedin
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip840791273">
                Linkedin
              </UncontrolledTooltip>
             
              <Button
                className="sharrre btn-round ml-2"
                color="github-bg"
                href="https://github.com/ArifAsh"
                target="_blank"
                id="tooltip864353654"
              >
                <i className="fa fa-github" /> Github
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip864353654">
                Github
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDownload;
