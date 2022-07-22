import React, { Component } from 'react';

import { Columns } from './columns';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { flightListSelector } from '../flights/flights.selector';
import * as flightsAction from '../flights/flights.action';

class Board extends Component {
  componentDidMount() {
    this.props.getflightsList();
  }

  render() {
    console.log(this.props.tasks);
    return (
      <div className="board">
        <table className="board_table">
          <thead className="board_table-head">
            <tr className="board_table__item light-grey">
              {Columns.map((col, index) => {
                return <th key={col.name}>{col.name}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {/* {this.props.tasks.body.map((row, rowIndex) => {
              return <td key={col.name + rowIndex}>{row[col.accessor]}</td>;
            })} */}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapDispatch = {
  getflightsList: flightsAction.getflightsList,
};

const mapState = state => {
  return { tasks: flightListSelector(state) };
};

export default connect(mapState, mapDispatch)(Board);
