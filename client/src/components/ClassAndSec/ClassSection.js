import React, { useState, useEffect } from 'react';
import { Button, Label, Col, Row, Input, Form, FormFeedback } from 'reactstrap';
import Sidenav from '../SideNav';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Class from './Class';
import { getCurrentClass, createClass } from '../../actions/classActions';
import Spinner from '../common/Spinner';

const ClassSection = (props) => {
  const [classAndsec, setClassAndSec] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    props.getCurrentClass();
  }, []);

  useEffect(() => {
    if (props.errors) {
      setErrors(props.errors);
    }
  }, [props.errors]);

  const onSubmit = (e) => {
    e.preventDefault();
    const classData = {
      classAndsec: classAndsec,
    };
    props.createClass(classData);
    setClassAndSec('');
    setErrors({});
  };

  const onChange = (e) => {
    setClassAndSec(e.target.value);
  };

  const { user } = props.auth;
  const { classes, loading } = props.classes;

  let classContent;
  if (classes === null || loading) {
    classContent = <Spinner />;
  } else {
    // Check if logged in user has class data
    let a = false;
    if (classes.classAndsec !== undefined) {
      if (classes.classAndsec.length > 0) {
        a = true;
      }
    }
    if (Object.keys(classes).length > 0 && a) {
      classContent = (
        <div>
          <Class section={classes.classAndsec} />
        </div>
      );
    } else {
      //User is logged in but has no class
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
            <h2 id="addclass">ADD CLASS-SECTIONS</h2>
            <Form onSubmit={onSubmit}>
              <Row className="mt-5">
                <Col md={{ size: 3, offset: 1 }}>
                  <Label className="labelname">CLASS-SECTION</Label>
                </Col>
                <Col md={7}>
                  <Input
                    type="text"
                    id="class"
                    name="classAndsec"
                    value={classAndsec}
                    placeholder="eg. A"
                    onChange={onChange}
                    className={classnames(
                      'fa fa-search form-control-feedback',
                      { 'is-invalid': errors.classAndsec }
                    )}
                    title="Please use comma seperated values if giving more than one Class input together"
                  />
                  <FormFeedback>{errors.classAndsec}</FormFeedback>
                </Col>
                <Col md={{ size: 1, offset: 0.5 }}>
                  <Button type="submit" color="primary">
                    Add
                  </Button>
                </Col>
              </Row>
            </Form>
            <Row
              className="display-4"
              style={{ marginLeft: 50, marginTop: 25 }}
            >
              {classContent}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

ClassSection.propTypes = {
  getCurrentClass: PropTypes.func.isRequired,
  createClass: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  classes: state.classes,
  errors: state.errors,
});

export default connect(mapStateToProps, { getCurrentClass, createClass })(
  ClassSection
);
