import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteSlot } from '../../actions/slotActions';

class EachSlot extends Component {
  onDeleteClick(id) {
    this.props.deleteSlot(id);
  }
  render() {
    const slots = this.props.slots.map((slot) => (
      <tr key={slot._id}>
        <td>{slot.teacher}</td>
        <td>{slot.sections}</td>
        <td>{slot.subject}</td>
        <td>{slot.numLectures}</td>
        <td>
        <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
          <button
            onClick={this.onDeleteClick.bind(this, slot._id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
          <button className="btn btn-primary btn-sm">Update</button>
          </div>
        </td>
      </tr>
    ));

    return (
      <div className="table-responsive">
        {/* {console.log(this.props.slots)} */}
        <table className="table table-bordered table-responsive-sm custom-table">
          <thead>
            <tr className="eachlab">
              <th className="table-header">Teacher Name</th>
              <th className="table-header">Class-Section</th>
              <th className="table-header">Subject</th>
              <th className="table-header">Number Of Class(weekly)</th>
              <th className="table-header">Action</th>
            </tr>
          </thead>
          <tbody className="table-data" style={{ fontSize: '25px' }}>
            {slots}
          </tbody>
        </table>
      </div>
    );
  }
}

EachSlot.propTypes = {
  deleteSlot: PropTypes.func.isRequired,
};

export default connect(null, { deleteSlot })(EachSlot);
