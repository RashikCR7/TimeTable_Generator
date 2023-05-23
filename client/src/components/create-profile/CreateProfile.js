import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Label, Form, FormFeedback } from "reactstrap";
import PropTypes from "prop-types";
import classnames from "classnames";
import { createProfile } from "../../actions/profileActions";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      institute: "",
      institutewebsite: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      institute: this.state.institute,
      institutewebsite: this.state.institutewebsite
    };
    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="create-profile" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create You Profile</h1>
              <p className="lead text-center">
                Let's get some information to make your profile.
              </p>
              {/* <small className="d-block pb-3">* = required fields</small> */}
              <Form onSubmit={this.onSubmit}>
                <Label className="label">Institute Name: </Label>
                <Input
                  onChange={this.onChange}
                  name="institute"
                  placeholder="Institute Name"
                  value={this.state.institute}
                />
                <Label className="label">Institute Website: </Label>
                <Input
                  onChange={this.onChange}
                  name="institutewebsite"
                  placeholder="Institute Website"
                  className={classnames("fa fa-search form-control-feedback", {
                    "is-invalid": errors.institutewebsite
                  })}
                  value={this.state.institutewebsite}
                />
                <FormFeedback>{errors.institutewebsite}</FormFeedback>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapToStateProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapToStateProps,
  { createProfile }
)(CreateProfile);
