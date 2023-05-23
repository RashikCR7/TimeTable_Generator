import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteSubject } from '../../actions/subjectActions';

const EachSubject = (props) => {
  const onDeleteClick = (sbj) => {
    props.deleteSubject(sbj);
  };

  return (
    <div className="table-responsive">
      <Table className="table table-bordered table-responsive-sm custom-table">
        <thead>
          <tr className="eachlab">
            <th className="table-header">Subject Name</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.subjects.map((sbj) => (
            <tr key={sbj}>
              <td className="table-data" style={{ fontSize: '25px' }}>
                {sbj}
              </td>
              <td className="table-data">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    onClick={() => onDeleteClick(sbj)}
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
    </div>
  );
};

EachSubject.propTypes = {
  deleteSubject: PropTypes.func.isRequired,
};

export default connect(null, { deleteSubject })(EachSubject);
