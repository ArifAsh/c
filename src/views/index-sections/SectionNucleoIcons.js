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
import bugTracker from "../../images/bugTracker.png"
import pathfinder from "../../images/pathfinder.png"
import sorting from "../../images/sortingVisualizer.png"
import sudoku from "../../images/sudoku.png"
import certificate from "../../images/Google Certificate.pdf"
import {
  TabContent,
  TabPane,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionNucleoIcons() {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  
  return (
    <>
      <div className="section section-dark section-nucleo-icons">
        <Container>
        <br/>
        <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    <h2 >Projects</h2>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    <h2>Experience</h2>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row  >
                      
                        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4" >
                        <NavLink
                href="https://bugtracker-arifash.netlify.app/"
                target="_blank">
                          <img 
                            alt="..."
                            className="img-no-padding img-responsive"
                            src={bugTracker}
                          />
                          </NavLink>
                        </Col>
                        
                        <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                        <NavLink
                href="https://bugtracker-arifash.netlify.app/"
                target="_blank">
                          <h6>
                            Bug Tracker <br />
                            <small>April 2021-August 2021</small>
                          </h6>
                          </NavLink>
                        </Col>
                        <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                        Built a FullStack web application using JavaScript, RESTful API, MVC (Model View Controller), Chart.js, HTML, CSS, jQuery and the MERN stack (MongoDB Cloud Database, Express.js, Node.js, Reactjs).
                        The backend is hosted in Heroku while the frontend is deployed on Netlify. The application features user authentication for both admin and client users, in addition to this
                        it also has a prebuilt demo admin and demo client account to allow unauthorized users to demo the application.
                        Admins can manage all users account information (edit/delete/create) with the exception of passwords. Only the account owner can change their password. Admins can also delete previously reported bugs, report new bugs and assign them to client users, edit existing bugs and view all active reported bugs. 
                        Clients can view all bugs assigned to them by an admin in detailed text and mark them as complete upon completion.              
                        </Col>
                        
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                        <NavLink
                href="https://arifash.github.io/SortingVisualizer/"
                target="_blank">
                          <img
                            alt="..."
                            className="img-no-padding img-responsive"
                            src={sorting}
                          />
                      </NavLink>
                        </Col>
                        <Col lg="3" md="4" xs="4">
                        <NavLink
                href="https://arifash.github.io/SortingVisualizer/"
                target="_blank">
                          <h6>
                            Sorting Visualizer <br />
                            <small>July 2020</small>
                          </h6>
                          </NavLink>
                        </Col>
                        <Col lg="7" md="4" xs="4">
                        Built a react application that visualizes sorting algorithms. Implemented Quick Sort, Merge Sort,
Bubble Sort, and Insertion Sort.
• Developed with JavaScript, HTML, and CSS using Visual Studio Code and a variety of sorting
algorithms with different space complexities.
</Col>
                        
                        
                      </Row>
                    </li>
                    
                    <hr />
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                        <NavLink
                href="https://arifash.itch.io/pathfinder-visualizer"
                target="_blank">
                          <img
                            alt="..."
                            className="img-no-padding img-responsive"
                            src={pathfinder}
                          />
                          </NavLink>
                        </Col>
                        <Col lg="3" md="4" xs="4">
                        <NavLink
                href="https://arifash.itch.io/pathfinder-visualizer"
                target="_blank">
                          <h6>
                            A* PathFinder Visualizer <br />
                            <small>June 2020</small>
                          </h6>
                          </NavLink>
                        </Col>
                        <Col lg="7" md="4" xs="4">
                        Developed a UI that allows you to add barriers, pick a start node and an end node. Implemented
the A* search algorithm to find the shortest possible path.
• Made with Python using the Eclipse IDE, best-first search algorithm, and python pygame module.
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                        <NavLink
                href="https://arifash.itch.io/sudoku-game-and-solver"
                target="_blank">
                          <img
                            alt="..."
                            className="img-no-padding img-responsive"
                            src={sudoku}
                          />
                          </NavLink>
                        </Col>
                        <Col lg="3" md="4" xs="4">
                        <NavLink
                href="https://arifash.itch.io/sudoku-game-and-solver"
                target="_blank">
                          <h6>
                            Sudoku Game and Solver <br />
                            <small>May 2020</small>
                          </h6>
                          </NavLink>
                        </Col>
                        <Col lg="7" md="4" xs="4">
                        Developed a UI to play the game of sudoku and implemented the backtracking algorithm to solve
any solvable board.
• Made with Python using Eclipse IDE, pythons pygame module, and known algorithm
                        </Col>
                       
                      </Row>
                    </li>
                    <hr/>
                    

                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="following">
              <Row>
                <Col>
              
                <ul>   
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                        <h6>Volunteer Experience</h6>
                        </Col>
                        <Col lg="3" md="4" xs="4">
               
                          <h6>
                            Certified Listeners<br />
                            <small>Feb 2021- May 2021</small>
                          </h6>
                          
                        </Col>
                        <Col lg="7" md="4" xs="4">
                        • Worked with Acuity Scheduling using the API customization to regulate the number the time slots
a person can schedule a week and automate the scheduling of new members.<br/>
• Set up an emotional support help line using Amazons AWS connect system and developed new
control flows.
                        </Col>
                       
                      </Row>
                    </li>
                    <hr/>
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                        <h6>Extracurricular Experience</h6>
                        </Col>
                        <Col lg="3" md="4" xs="4">
               
                          <h6>
                          WLU PHI Society of Computer Science and Mathematics (Waterloo) Member<br />
                            <small>January 2020-Present</small>
                          </h6>
                          
                        </Col>
                        <Col lg="7" md="4" xs="4">
                        • Assisted and collaborated with fellow computer science students to complete projects and build
applications <br/>
• Successfully built a file encoder and decoder using the Huffman algorithm.
                        </Col>
                       
                      </Row>
                    </li>
                    <hr/>
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                        <h6>Extracurricular Experience</h6>
                        </Col>
                        <Col lg="3" md="4" xs="4">
               
                          <h6>
                          Artificial Intelligence Club<br />
                            <small>February 2021-Present</small>
                          </h6>
                          
                        </Col>
                        <Col lg="7" md="4" xs="4">
                        • Attending events with qualified professionals in fields relevant to mine that expand my
understanding of computer science and related fields.
                        </Col>
                       
                      </Row>
                    </li>
                    <hr/>
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                        <NavLink
                href={certificate}
                target="_blank">
                        <h6 >Certificate</h6>
                        </NavLink>
                        </Col>
                        <Col lg="3" md="4" xs="4">
                        <NavLink
                href={certificate}
                target="_blank">
                          <h6 href={certificate}>
                          Google IT Automation with Python by Coursera Certificate<br />
                            <small>May 2020</small>
                          </h6>
                          </NavLink>
                          
                        </Col>
                        <Col lg="7" md="4" xs="4">
                        • Six-course certificate designed by google providing in-demand skills like Python, Git, and IT automation.
                        </Col>
                       
                      </Row>
                    </li>
                    <hr/>
                    

                  </ul>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
     

          
          <br />
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionNucleoIcons;
