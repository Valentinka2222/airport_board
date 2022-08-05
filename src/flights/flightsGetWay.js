const baseUrl = `https://api.iev.aero/api/flights`;

export const fetchFlightsListByDate = newDate =>
  fetch(`${baseUrl}/${newDate}`).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
