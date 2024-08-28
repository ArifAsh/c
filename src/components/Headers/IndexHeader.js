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
/*eslint-disable*/
import React from "react";
import antoineBarresImg from "../../assets/img/antoine-barres.jpg";
import fogLowImg from "../../assets/img/fog-low.png";
import cloudsImg from "../../assets/img/clouds.png";


// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{ backgroundImage: `url(${antoineBarresImg})` }}

      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Arif Ashogbon</h1>
              <div className="fog-low">
                <img
                  alt="..."
                  src={fogLowImg}

                />
              </div>
              <div className="fog-low right">
                <img
                  alt="..."
                  src={fogLowImg}
                />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
             Google Software Developer 
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{ backgroundImage: `url(${cloudsImg})` }}

        />
      
      </div>
    </>
  );
}

export default IndexHeader;
