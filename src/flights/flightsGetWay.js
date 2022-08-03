const baseUrl = `https://api.iev.aero/api/flights`;

export const fetchFlightsListByDate = newDate => {
  console.log(String(newDate));
  return fetch(`${baseUrl}/${newDate}`).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
};
