import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import Sidenav from '../SideNav';
import '../../index.css';
import NumPeriods from './NumPeriods';
import Slots from './Slots';

const SlotDetails = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  function RenderComponent({ selectedOption }) {
    if (selectedOption === 'option1') {
      return <NumPeriods />;
    } else {
      return <Slots />;
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
            <h2 id="addsub"> Add Slot Details</h2>
            <div className="choice mt-5">
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
                  Add Numbers of periods
                </button>
                {/* </div>
            <div className="choice"> */}
                <button
                  className={`btn ${
                    selectedOption === 'option2'
                      ? 'btn-success'
                      : 'btn-secondary'
                  }`}
                  onClick={() => setSelectedOption('option2')}
                >
                  Add Slots
                </button>
              </div>
            </div>

            <RenderComponent selectedOption={selectedOption} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SlotDetails;
