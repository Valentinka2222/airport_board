import React, { Component } from 'react';
import moment from 'moment';
import { Columns } from './columns';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { flightListDepartureSelector } from '../flights/flights.selector';
import { getflightsList } from '../flights/flights.action';

const baseUrl = 'https://api.iev.aero/';
class BoardDepartures extends Component {
  constructor(props) {
    super(props);

    this.logo;
  }

  componentDidMount() {
    this.props.getflightsList(this.props.searchDate);
  }

  render() {
    const { departure, value } = this.props;

    let renderFlights = departure.map((row, index) => {
      Columns.map((col, index) => {
        if (col.name === 'Destination') {
          col.accessor = 'airportToID.city_en';
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
                this.logo = row.logo;
                return (
                  <tr className="board_table__item" key={row.ID}>
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
                            <span>
                              {row.codeShareData.map(el => {
                                if (el.airline.en.name === 'undefined') {
                                  return;
                                }
                                return el.airline.en.name;
                              })}
                            </span>
                            <img
                              className="logo-airlines"
                              src={`${baseUrl}${row.codeShareData[0].logo}`}
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
    departure: flightListDepartureSelector(state),
  };
};

export default connect(mapState, mapDispatch)(BoardDepartures);
