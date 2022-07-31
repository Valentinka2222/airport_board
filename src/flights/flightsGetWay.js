import moment from 'moment';

const baseUrl = `https://api.iev.aero/api/flights`;

export const fetchFlightsListByDate = newDate =>
  fetch(`${baseUrl}/${moment(new Date(newDate)).format('DD-MM-YYYY')}`).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
