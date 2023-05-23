import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayTimetable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday'],
      intervals: [
        '11:00 - 12:00',
        '12:00 - 01:00',
        '01:00 - 02:00',
        '02:00 - 03:00',
        '03:00-04:00',
      ],
    };
  }

  render() {
    const tt = this.props.timeTable.timeTable ? (
      this.props.timeTable.timeTable.map((el) => {
        return (
          <table
            className="table table-bordered"
            key={this.props.timeTable.timeTable.indexOf(el)}
          >
            <thead>
              <tr>
                <th className="eachlab">Days\Time</th>
                {this.state.intervals.map((interval) => {
                  return (
                    <th
                      className="eachlab"
                      key={this.state.intervals.indexOf(interval)}
                    >
                      {interval}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {el.map((ele) => {
                let i = 0;
                return (
                  <tr key={el.indexOf(ele)}>
                    <th className="eachlab">
                      {this.state.days[el.indexOf(ele)]}
                    </th>
                    {ele.map((elem) => {
                      if (elem === 0) {
                        i = i + 1;
                        return <td key={i}>-</td>;
                      } else {
                        i = i + 1;
                        return (
                          <td key={i}>
                            {elem.subject} <br /> ({elem.teacher})
                          </td>
                        );
                      }
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        );
      })
    ) : (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th style={{ fontSize: '25px' }}>Days\Time</th>
            {this.state.intervals.map((interval) => {
              return (
                <th
                  style={{ fontSize: '25px' }}
                  key={this.state.intervals.indexOf(interval)}
                >
                  {interval}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody style={{ fontSize: '20px' }}>
          <tr>
            <th>Sunday</th>
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <th>Monday</th>
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <th>Tuesday</th>
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <th>Wednesday</th>
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <th>Thrusday</th>
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <th>Friday</th>
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
        </tbody>
      </table>
    );
    return (
      <div>
        <div className="page display" style={{ marginTop: '100px' }}>
          <h2>Class-Section</h2>
          {tt}
        </div>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            window.print();
          }}
        >
          Print
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  timeTable: state.timeTable,
});

export default connect(mapStateToProps, null)(DisplayTimetable);
