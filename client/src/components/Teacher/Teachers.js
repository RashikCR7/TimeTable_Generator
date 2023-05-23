import React, { useState, useEffect } from 'react';
import { Button, Label, Col, Row, Input, FormFeedback, Form } from 'reactstrap';
import Sidenav from '../SideNav';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Teacher from './Teacher';
import { getCurrentTeacher, createTeacher } from '../../actions/teacherActions';
import Spinner from '../common/Spinner';

const Teachers = (props) => {
  const [teachersName, setTeachersName] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    props.getCurrentTeacher();
  }, []);

  useEffect(() => {
    if (props.errors) {
      setErrors(props.errors);
    }
  }, [props.errors]);

  const onSubmit = (e) => {
    e.preventDefault();
    const teacherData = {
      teachersName: teachersName,
    };
    props.createTeacher(teacherData);
    setTeachersName('');
    setErrors({});
  };

  const onChange = (e) => {
    setTeachersName(e.target.value);
  };

  const { user } = props.auth;
  const { teacher, loading } = props.teacher;

  let teacherContent;
  if (teacher === null || loading) {
    teacherContent = <Spinner />;
  } else {
    let a = false;
    // Check if logged in user has teacher data
    if (teacher.teachersName !== undefined) {
      if (teacher.teachersName.length > 0) {
        a = true;
      }
    }
    if (a && Object.keys(teacher).length > 0) {
      teacherContent = (
        <div>
          <Teacher teachers={teacher.teachersName} />
        </div>
      );
    } else {
      //User is logged in but has no teacher
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
            <h2 id="addteacher">ADD TEACHERS</h2>
            <Form onSubmit={onSubmit}>
              <Row className="mt-5">
                <Col md={{ size: 2, offset: 1 }}>
                  <Label className="labelname">Teacher Name</Label>
                </Col>

                <Col md={8}>
                  <Input
                    type="text"
                    id="teacherName"
                    name="teachersName"
                    value={teachersName}
                    placeholder="Teacher's Name"
                    onChange={onChange}
                    className={classnames(
                      'fa fa-search form-control-feedback',
                      { 'is-invalid': errors.teachersName }
                    )}
                    title="Please use comma seperated values if giving more than one Teacher's Name input together"
                  />
                  <FormFeedback>{errors.teachersName}</FormFeedback>
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
              {teacherContent}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

Teachers.propTypes = {
  getCurrentTeacher: PropTypes.func.isRequired,
  createTeacher: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  teacher: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  teacher: state.teacher,
  errors: state.errors,
});

export default connect(mapStateToProps, { getCurrentTeacher, createTeacher })(
  Teachers
);
