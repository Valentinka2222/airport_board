import React, { Component } from 'react';
import moment from 'moment';
import { Columns } from './columns';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { flightListArrivalSelector } from '../flights/flights.selector';
import { getflightsList } from '../flights/flights.action';

class BoardDepartures extends Component {
  componentDidMount() {
    this.props.getflightsList();
  }

  render() {
    const { arrival, value, setValue } = this.props;

    let renderFlights = arrival.map((row, index) => {
      Columns.map((col, index) => {
        if (col.name === 'Destination' && row.status === 'LN') {
          col.accessor = 'airportFromID.city_en';
        }
      });
      return row;
    });
    if (this.props.value) {
      const filterArr = renderFlights.filter(el => {
        let filter = el.codeShareData.filter(elem =>
          elem.codeShare.toLowerCase().includes(value.toLowerCase()),
        );
        if (JSON.stringify(el).includes(JSON.stringify(filter))) {
          return el;
        }
      });
      renderFlights = filterArr;
    }

    return (
      <div className="board">
        {renderFlights.length === 0 ? (
          <span className="span">
            <p>No Flights</p>
          </span>
        ) : (
          <table className="board_table">
            <thead>
              <tr>
                {Columns.map((col, index) => {
                  return <th key={col.id}>{col.name}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {renderFlights.map((row, rowIndex) => {
                return (
                  <tr key={row.ID} className="board_table__item">
                    {Columns.map((col, index) => {
                      if (col.name === 'Local time') {
                        return (
                          <td key={col.id}>
                            <span>{moment(row.actual).format('HH:mm')}</span>
                          </td>
                        );
                      }
                      if (col.name === 'Status') {
                        return (
                          <td key={col.id}>
                            <span>{`${row.status} to ${moment(row.timeTakeofFact).format(
                              'LT',
                            )}`}</span>
                          </td>
                        );
                      }

                      if (col.name === 'Airline') {
                        return (
                          <td className="logo" key={col.id}>
                            <span>{row.codeShareData.map(el => el.airline.en.name)}</span>
                            <img
                              className="logo-airlines"
                              src={`https://api.iev.aero${row.logo}`}
                              alt="Logo"
                            />
                          </td>
                        );
                      }
                      if (col.name === 'Flight') {
                        return (
                          <td key={col.id}>
                            <span>{row.codeShareData.map(el => el.codeShare)}</span>
                          </td>
                        );
                      }
                      return <td key={col.id}> {row[col.accessor]}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

const mapDispatch = {
  getflightsList: getflightsList,
};

const mapState = state => {
  console.log(state);
  return {
    arrival: flightListArrivalSelector(state),
  };
};

export default connect(mapState, mapDispatch)(BoardDepartures);
