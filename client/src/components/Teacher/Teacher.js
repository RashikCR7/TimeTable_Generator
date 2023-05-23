import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTeacher } from '../../actions/teacherActions';

class Teacher extends Component {
  onDeleteClick(tcr) {
    this.props.deleteTeacher(tcr);
  }

  render() {
    const teachersName = this.props.teachers.map((tcr) => (
      <tr key={tcr}>
        <td className="table-data" style={{ fontSize: '25px' }}>
          {tcr}
        </td>
        <td>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              onClick={this.onDeleteClick.bind(this, tcr)}
              className="btn btn-danger"
            >
              Delete
            </button>
            <button className="btn btn-primary btn-sm">Update</button>
          </div>
        </td>
      </tr>
    ));

    return (
      <div className="teacher-table-container">
        <table className="table table-bordered table-responsive-sm custom-table">
          <thead>
            <tr className="eachlab">
              <th className="table-header">Teacher's Name</th>
              <th className="table-header">Actions</th>
            </tr>
          </thead>
          <tbody>{teachersName}</tbody>
        </table>
      </div>
    );
  }
}

Teacher.propTypes = {
  deleteTeacher: PropTypes.func.isRequired,
};

export default connect(null, { deleteTeacher })(Teacher);
