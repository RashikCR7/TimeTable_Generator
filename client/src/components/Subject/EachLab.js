import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteLab } from '../../actions/subjectActions';

const EachLab = ({ labs, deleteLab }) => {
  const onDeleteClick = (lab) => {
    deleteLab(lab);
  };

  const labList = labs.map((lab) => (
    <tr key={lab._id}>
      <td style={{ fontSize: '25px' }}>{lab.labname}</td>
      <td style={{ fontSize: '25px' }}>{lab.numberoflabs}</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            onClick={() => onDeleteClick(lab._id)}
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
    <div>
      <table className="table table-bordered table-responsive-sm custom-table">
        <thead>
          <tr className="eachlab">
            <th>Lab Name</th>
            <th>Number Of Labs</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{labList}</tbody>
      </table>
    </div>
  );
};

EachLab.propTypes = {
  deleteLab: PropTypes.func.isRequired,
};

export default connect(null, { deleteLab })(EachLab);
