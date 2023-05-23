import React from "react";
import { CardImg, CardTitle, Row, Col, CardBody } from "reactstrap";
import "../index.css";

function About() {
  return (
    <div className="container page">
      <h1 className="mt-4">About Us</h1>
      <div className="mt-5">
        <Row>
          <Col sm="4">
            {/* <Card className="mb-4"> */}
            <CardImg src="assets/shailesh.jpg" />
            <CardBody>
              <CardTitle>
                <strong class="name">Shailesh Yadav</strong>
                <br />
                <span class="social-media">
                  <a
                    href="https://www.linkedin.com/in/shailesh-yadav-479965177/"
                    title="LinkedIn"
                  >
                    <i class="fa fa-linkedin-square" />
                  </a>{" "}
                  &nbsp;
                  <a href="https://twitter.com/zadav2058" title="Twitter">
                    <i class="fa fa-twitter" />
                  </a>{" "}
                  &nbsp;
                  <a href="https://github.com/zadavshailesh" title="GitHub">
                    <i class="fa fa-github" />
                  </a>
                </span>
              </CardTitle>
            </CardBody>
            {/* </Card> */}
          </Col>

          <Col sm="4">
            {/* <Card className="mb-4"> */}
            <CardImg src="assets/rashik.jpg" />
            <CardBody>
              <CardTitle>
                <strong class="name">Rashik Shrestha</strong>
                <br />
                <span class="social-media">
                  <a
                    href="#"
                    title="LinkedIn"
                  >
                    <i class="fa fa-linkedin-square" />
                  </a>{" "}
                  &nbsp;
                  <a href="#" title="Twitter">
                    <i class="fa fa-twitter" />
                  </a>{" "}
                  &nbsp;
                  <a href="" title="GitHub">
                    <i class="fa fa-github" />
                  </a>
                </span>
              </CardTitle>
            </CardBody>
            {/* </Card> */}
          </Col>
          <Col sm="4">
            {/* <Card className="mb-4"> */}
            <CardImg src="assets/pratik.jpg" />
            <CardBody>
              <CardTitle>
                <strong class="name">Pratik Giri</strong>
                <br />
                <span class="social-media">
                  <a
                    href="https://github.com/Pratik4321"
                    title="LinkedIn"
                  >
                    <i class="fa fa-linkedin-square" />
                  </a>{" "}
                  &nbsp;
                  <a href="#" title="Twitter">
                    <i class="fa fa-twitter" />
                  </a>{" "}
                  &nbsp;
                  <a href="#" title="GitHub">
                    <i class="fa fa-github" />
                  </a>
                </span>
              </CardTitle>
            </CardBody>
            {/* </Card> */}
          </Col>          
        </Row>     
      </div>
    </div>
  );
}

export default About;
