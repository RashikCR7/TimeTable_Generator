import React, { Component } from 'react';
import {
  Button,
  Label,
  Col,
  Input,
  Form,
  FormGroup,
  FormFeedback,
} from 'reactstrap';
import { createnumSlot, getCurrentSlot } from '../../actions/slotActions';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import isEmpty from '../../validation/is-empty';
import Spinner from '../common/Spinner';

class NumPeriods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sunday: '',
      monday: '',
      tuesday: '',
      wednesday: '',
      thrusday: '',
      friday: '',
      errors: {},
      submitClicked: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.slot) {
      if (nextProps.slot.sunday) {
        const day = nextProps.slot;
        console.log(day);
        // If slot field doesn't exist, make empty string
        day.sunday = !isEmpty(day.sunday) ? day.sunday : '';
        day.monday = !isEmpty(day.monday) ? day.monday : '';
        day.tuesday = !isEmpty(day.tuesday) ? day.tuesday : '';
        day.wednesday = !isEmpty(day.wednesday) ? day.wednesday : '';
        day.thrusday = !isEmpty(day.thrusday) ? day.thrusday : '';
        day.friday = !isEmpty(day.friday) ? day.friday : '';

        // Set component fields state
        this.setState({
          sunday: day.sunday,
          monday: day.monday,
          tuesday: day.tuesday,
          wednesday: day.wednesday,
          thrusday: day.thrusday,
          friday: day.friday,
        });
      }
    }
  }

  componentDidMount() {
    this.props.getCurrentSlot();
  }

  onSubmit(e) {
    e.preventDefault();

    const numSlotData = {
      sunday: this.state.sunday,
      monday: this.state.monday,
      tuesday: this.state.tuesday,
      wednesday: this.state.wednesday,
      thrusday: this.state.thrusday,
      friday: this.state.friday,
    };
    this.props.createnumSlot(numSlotData);
    this.setState({
      errors: {},
      submitClicked: true,
    });
    // window.location.reload();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, submitClicked } = this.state;
    const { slot, loading } = this.props.slot;

    let numslotContent;
    if (slot === null || loading) {
      numslotContent = <Spinner />;
    } else {
      // Check if logged in user has slot data
      if (Object.keys(slot).length > 0 && submitClicked) {
        numslotContent = (
          <table className="table table-bordered table-responsive-sm custom-table">
            <thead>
              <tr className="eachlab">
                <th>Day</th>
                <th>Periods</th>
              </tr>
            </thead>
            <tbody>
              {isEmpty(slot.sunday) ? null : (
                <tr>
                  <td>Sunday</td>
                  <td>{slot.sunday}</td>
                </tr>
              )}
              {isEmpty(slot.monday) ? null : (
                <tr>
                  <td>Monday</td>
                  <td>{slot.monday}</td>
                </tr>
              )}
              {isEmpty(slot.tuesday) ? null : (
                <tr>
                  <td>Tuesday</td>
                  <td>{slot.tuesday}</td>
                </tr>
              )}
              {isEmpty(slot.wednesday) ? null : (
                <tr>
                  <td>Wednesday</td>
                  <td>{slot.wednesday}</td>
                </tr>
              )}
              {isEmpty(slot.thrusday) ? null : (
                <tr>
                  <td>Thrusday</td>
                  <td>{slot.thrusday}</td>
                </tr>
              )}
              {isEmpty(slot.friday) ? null : (
                <tr>
                  <td>Friday</td>
                  <td>{slot.friday}</td>
                </tr>
              )}
            </tbody>
          </table>
        );
      } else {
        // numslotContent = <p>Please submit the form to view the table</p>
      }
    }

    return (
      <div className="mt-5">
        <Form onSubmit={this.onSubmit}>
          <FormGroup row>
            <Col md={{ size: 1, offset: 3 }}>
              <Label className="dayname" htmlFor="sunday">
                Sunday
              </Label>
            </Col>
            <Col md={5}>
              <Input
                type="number"
                id="sunday"
                name="sunday"
                onChange={this.onChange}
                value={this.state.sunday}
                className={classnames('fa fa-search form-control-feedback', {
                  'is-invalid': errors.sunday,
                })}
              />
              <FormFeedback>{errors.sunday}</FormFeedback>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 1, offset: 3 }}>
              <Label className="dayname" htmlFor="monday">
                Monday
              </Label>
            </Col>
            <Col md={5}>
              <Input
                type="number"
                id="monday"
                name="monday"
                onChange={this.onChange}
                value={this.state.monday}
                className={classnames('fa fa-search form-control-feedback', {
                  'is-invalid': errors.monday,
                })}
              />
              <FormFeedback>{errors.monday}</FormFeedback>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 1, offset: 3 }}>
              <Label className="dayname" htmlFor="tuesday">
                Tuesday
              </Label>
            </Col>
            <Col md={5}>
              <Input
                type="number"
                id="tuesday"
                name="tuesday"
                onChange={this.onChange}
                value={this.state.tuesday}
                className={classnames('fa fa-search form-control-feedback', {
                  'is-invalid': errors.tuesday,
                })}
              />
              <FormFeedback>{errors.tuesday}</FormFeedback>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 1.1, offset: 3 }}>
              <Label className="dayname" htmlFor="wednesday">
                Wednesday
              </Label>
            </Col>
            <Col md={5}>
              <Input
                type="number"
                id="wednesday"
                name="wednesday"
                onChange={this.onChange}
                value={this.state.wednesday}
                className={classnames('fa fa-search form-control-feedback', {
                  'is-invalid': errors.wednesday,
                })}
              />
              <FormFeedback>{errors.wednesday}</FormFeedback>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 1, offset: 3 }}>
              <Label className="dayname" htmlFor="thrusday">
                Thrusday
              </Label>
            </Col>
            <Col md={5}>
              <Input
                type="number"
                id="thrusday"
                name="thrusday"
                onChange={this.onChange}
                value={this.state.thrusday}
                className={classnames('fa fa-search form-control-feedback', {
                  'is-invalid': errors.thrusday,
                })}
              />
              <FormFeedback>{errors.thrusday}</FormFeedback>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 1, offset: 3 }}>
              <Label className="dayname" htmlFor="friday">
                Friday
              </Label>
            </Col>
            <Col md={5}>
              <Input
                type="number"
                id="friday"
                name="friday"
                onChange={this.onChange}
                value={this.state.friday}
                className={classnames('fa fa-search form-control-feedback', {
                  'is-invalid': errors.friday,
                })}
              />
              <FormFeedback>{errors.friday}</FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{ size: 10, offset: 2 }}>
              <Button type="submit" color="secondary" className="mt-2">
                Submit
              </Button>
            </Col>
          </FormGroup>
          <FormGroup row>{numslotContent}</FormGroup>
        </Form>
      </div>
    );
  }
}

NumPeriods.propTypes = {
  createnumSlot: PropTypes.func.isRequired,
  getCurrentSlot: PropTypes.func.isRequired,
  slot: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  slot: state.slot,
  auth: state.auth,
});

export default connect(mapStateToProps, { createnumSlot, getCurrentSlot })(
  NumPeriods
);
