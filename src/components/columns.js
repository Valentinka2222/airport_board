export const Columns = [
  {
    name: 'Terminal',
    accessor: 'term',
  },
  {
    name: 'Local time',
    accessor: 'actual',
  },
  {
    name: 'Destination',
    accessor: 'airportFromID.city_en',
  },
  {
    name: 'Status',
    accessor: 'status',
  },
  {
    name: 'Airline',
    accessor: 'airline.name',
  },
  {
    name: 'Flight',
    accessor: 'fltNo',
  },
];
