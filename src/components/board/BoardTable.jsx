import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Columns } from './../../columns';

const BoardTable = ({ renderFlights }) => {
  return (
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
                      <span>{`${row.status} to ${moment(row.timeTakeofFact).format('LT')}`}</span>
                    </td>
                  );
                }
                if (col.name === 'Airline') {
                  return (
                    <td className="logo" key={col.id}>
                      <span>
                        {row.codeShareData.map(el => {
                          if (el.airline.en.name === undefined) {
                            return el.airline.en.icao;
                          }
                          return el.airline.en.name;
                        })}
                      </span>
                      <img
                        className="logo-airlines"
                        src={`https://api.iev.aero${row.codeShareData[0].logo}`}
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
  );
};

BoardTable.propTypes = {
  renderFlights: PropTypes.array,
};
export default BoardTable;
