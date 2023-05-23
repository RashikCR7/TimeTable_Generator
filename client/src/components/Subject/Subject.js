import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row } from 'reactstrap';
import Sidenav from '../SideNav';
import Subjects from './Subjects';
import Labs from './Labs';

const Subject = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  function RenderComponent({ selectedOption }) {
    if (selectedOption === 'option1') {
      return <Subjects />;
    } else {
      return <Labs />;
    }
  }

  return (
    <div className="page">
      <Row className="occupy">
        <Col sm="3">
          <Sidenav />
        </Col>
        <Col sm="9">
          <div className="container mt-5 show">
            <h2 id="addsub">ADD SUBJECT</h2><br/><br/><br/>

            {/* <div className="d-flex justify-content-center">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  className={`btn ${
                    selectedOption === 'option1'
                      ? 'btn-success'
                      : 'btn-secondary'
                  }`}
                  onClick={() => setSelectedOption('option1')}
                >
                  Add Theory 
                </button>
                <button
                  className={`btn ${
                    selectedOption === 'option2'
                      ? 'btn-success'
                      : 'btn-secondary'
                  }`}
                  onClick={() => setSelectedOption('option2')}
                >
                  Add Lab 
                </button>
              </div>
            </div> */}

            <RenderComponent selectedOption={selectedOption} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Subject;
