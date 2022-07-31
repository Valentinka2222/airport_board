import moment from 'moment';

const date = moment().format('DD-MM-YYYY');

const baseUrl = `https://api.iev.aero/api/flights/10-02-2020`;

export const fetchFlightsList = () =>
  fetch(baseUrl).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
