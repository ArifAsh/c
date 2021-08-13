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
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import * as emailjs from 'emailjs-com'



// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components

function SectionLogin() {

  const [details,setDetails ]=useState({name:"",email:"",message:""})
  function formChange(e){
    setDetails({
      ...details,
      [e.target.name]: e.target.value
  })
  
    }
    const toastifySuccess = () => {
      toast('Message sent, thank you!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,  
        draggable: false,
        className: 'submit-feedback success',
        toastId: 'notifyToast'
      });
    };

    async function submit(e){
      
      const { name, email, message } = details;
      if (name && email && message){
      try {
        const templateParams = {
          name:name,
          email:email,
          message:message
        };
       
        await emailjs.send(
         "service_3e18e8i",
         "template_9g2kp5o",
        templateParams,
          "user_wZduSCeJDtvWdC8XKklbE"
        );
        
        toastifySuccess();
        resetForm();
      } catch (e) {
        console.log(e);
      }
      return false;
    }
      return false;
    }
    function resetForm(){
      const frm = document.getElementById("btnsubmit")
      frm.reset();
    }
  
  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage:
            "url(" + require("assets/img/login-image.jpg").default + ")",
        }}
      >
        <Container>
          <Row>
            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register">
                <h2 className="title mx-auto">Contact Me</h2>
                
                <Form className="register-form" id="btnsubmit">
                <label>Name</label>
                  <InputGroup className="form-group-no-border">
                   
                    <Input name="name" placeholder="Enter name" type="text"  required onChange={formChange}/>
                  </InputGroup>
                  <label>Email</label>
                  <InputGroup className="form-group-no-border">
                    
                    <Input name="email" placeholder="email@email.com" type="email" required onChange={formChange} />
                  </InputGroup>
                  <label>Message</label>
                  <InputGroup className="form-group-no-border">
                   
                    <textarea name="message" placeholder="Hello Arif, I am reaching out to..." type="text" cols="48" required onChange={formChange}/>
                  </InputGroup>
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="submit"
                    onClick={submit}
                  >
                    Send
                  </Button>
                </Form>
                <ToastContainer />
             
              </Card>
            </Col>
          </Row>
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

export default SectionLogin;
