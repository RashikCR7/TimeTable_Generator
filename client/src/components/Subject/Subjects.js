import React, { useState, useEffect } from 'react';
import { Button, Label, Col, Row, Input, Form, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import EachSubject from './EachSubject';
import { getCurrentSubject, createSubject } from '../../actions/subjectActions';
import Spinner from '../common/Spinner';

const Subjects = (props) => {
  const [subject, setSubject] = useState('');
  const [errors, setErrors] = useState({});
  const { user } = props.auth;
  const { subject: currentSubject, loading } = props.subject;
  useEffect(() => {
    props.getCurrentSubject();
    if (props.errors) {
      setErrors(props.errors);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const subjectData = {
      subject: subject,
    };
    props.createSubject(subjectData);
    setSubject('');
    setErrors({});
  };

  const onChange = (e) => {
    setSubject(e.target.value);
  };

  let subjectContent;
  if (currentSubject === null || loading) {
    subjectContent = <Spinner />;
  } else {
    let a = false;
    // Check if logged in user has subject data
    if (currentSubject.subject !== undefined) {
      if (currentSubject.subject.length > 0) {
        a = true;
      }
    }
    if (a && Object.keys(currentSubject).length > 0) {
      subjectContent = (
        <div>
          <EachSubject subjects={currentSubject.subject} />
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
            <Label>Subject Name</Label>
          </Col>
          <Col md={8}>
            <Input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject Name"
              onChange={onChange}
              value={subject}
              className={classnames('fa fa-search form-control-feedback', {
                'is-invalid': errors.subject,
              })}
              title="Please use comma seperated values if giving more than one Subject Name input together"
            />
            <FormFeedback>{errors.subject}</FormFeedback>
          </Col>
          <Col md={{ size: 1, offset: 0.5 }}>
            <Button type="submit" color="primary">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
      <Row className="display-4" style={{ marginLeft: 50, marginTop: 25 }}>
        {subjectContent}
      </Row>
    </div>
  );
};
Subjects.propTypes = {
  getCurrentSubject: PropTypes.func.isRequired,
  createSubject: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  subject: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  subject: state.subject,
  errors: state.errors,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentSubject, createSubject })(
  Subjects
);
