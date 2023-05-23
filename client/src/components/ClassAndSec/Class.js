import React from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteClass } from '../../actions/classActions';

const Class = ({ section, deleteClass }) => {
  const onDeleteClick = (cls) => {
    deleteClass(cls);
  };

  return (
    <Table className="table table-bordered table-responsive-sm custom-table">
      <thead>
        <tr className="eachlab">
          <th>Class-Section</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {section.map((cls) => (
          <tr key={cls}>
            <td className="table-data" style={{ fontSize: '25px' }}>
              {cls}
            </td>
            <td>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  onClick={() => onDeleteClick(cls)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
                <button className="btn btn-primary btn-sm">Update</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

Class.propTypes = {
  deleteClass: PropTypes.func.isRequired,
  section: PropTypes.array.isRequired,
};

export default connect(null, { deleteClass })(Class);
