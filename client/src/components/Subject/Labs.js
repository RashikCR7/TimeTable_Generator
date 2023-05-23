import React, { useState, useEffect } from "react";
import { Button, Label, Col, Row, Input, Form, FormFeedback } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import EachLab from "./EachLab";
import { getCurrentSubject, createLab } from "../../actions/subjectActions";
import Spinner from "../common/Spinner";

const Labs = (props) => {
const [selectedOption, setSelectedOption] = useState("option1");
const [labname, setLabname] = useState("");
const [numberoflabs, setNumberoflabs] = useState("");
const [errors, setErrors] = useState({});
const { user } = props.auth;
const { subject, loading } = props.subject;

useEffect(() => {
  props.getCurrentSubject();
  if (props.errors) {
      setErrors(props.errors);
  }
  }, []);
  
  const onSubmit = (e) => {
  e.preventDefault();
  
  const labData = {
      labname: labname,
      numberoflabs: numberoflabs
  };
  props.createLab(labData);
  setLabname("");
  setNumberoflabs("");
  setErrors({});
  }
  
  const onChange = (e) => {
  setLabname(e.target.value);
  }
  const onChange1 = (e) => {
  setNumberoflabs(e.target.value);
  }
  
  let labContent;
  if (subject === null || loading) {
  labContent = <Spinner />;
  } else {
  let a = false;
  // Check if logged in user has subject data
  if (subject.lab !== undefined) {
      if (subject.lab.length > 0) {
      a = true;
      }
  }
  if (Object.keys(subject).length > 0 && a) {
      labContent = (
      <div>
          <EachLab labs={subject.lab} />
      </div>
      );
  } else {
      //User is logged in but has no teacher
  }
  }
  
  return (
  <div>
      <Form onSubmit={onSubmit} className="mt-5">
      <Row>
          <Col md={{ size: 2, offset: 1 }}>
          <Label className="labelname">Subject Name</Label>
          </Col>
          <Col md={8}>
          <Input
              type="text"
              id="labname"
              name="labname"
              placeholder="Lab Name"
              onChange={onChange}
              value={labname}
              className={classnames("fa fa-search form-control-feedback", {
              "is-invalid": errors.labname
              })}
              title="One input at a time"
          />
          <FormFeedback>{errors.labname}</FormFeedback>
          </Col>
      </Row>
  
      <Row className="mt-8">
      <Col md={{ size: 2, offset: 1 }}>
          <Label className="labelname">Number of Labs</Label>
        </Col>
        <Col md={8}>
          <Input
            type="number"
            id="numberoflabs"
            name="numberoflabs"
            placeholder="No. of labs for this subject"
            onChange={onChange1}
            value={numberoflabs}
            className={classnames("fa fa-search form-control-feedback", {
              "is-invalid": errors.numberoflabs
            })}
            title="Should be Numeric"
          />
          <FormFeedback>{errors.numberoflabs}</FormFeedback>
        </Col>
      </Row>
      <Row>
        <Col md={{ size: 11, offset: 3 }}>
          <Button type="submit" color="primary">
            Add
          </Button>
        </Col>
      </Row>
    </Form>
    <Row className="display-4" style={{ marginLeft: 50, marginTop: 25 }}>
      {labContent}
    </Row>
  </div>
);
}

Labs.propTypes = {
  getCurrentSubject: PropTypes.func.isRequired,
createLab: PropTypes.func.isRequired,
auth: PropTypes.object.isRequired,
subject: PropTypes.object.isRequired,
errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
subject: state.subject,
errors: state.errors,
auth: state.auth
});

export default connect(
mapStateToProps,
{ getCurrentSubject, createLab }
)(Labs);
  