const fs = require('fs');

function getFlightPrices(source, destination, date) {
  const flightData = fs.readFileSync('flightData.json');
  const flights = JSON.parse(flightData);

  const flightPrices = {};

  flights.forEach(flight => {
    if (
      flight.source === source &&
      flight.destination === destination &&
      flight.date === date
    ) {
      flightPrices[flight.airline] = '₹' + flight.price;
    }
  });

  return flightPrices;
}

// Usage example
const source = 'Delhi';
const destination = 'Jaipur';
const date = '15 April 2023';

const flightPrices = getFlightPrices(source, destination, date);
console.log(flightPrices);
