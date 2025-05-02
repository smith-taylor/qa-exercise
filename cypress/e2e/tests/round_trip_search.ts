import HomePage from '../page_objects/HomePage';
import SearchResultsPage from '../page_objects/SearchResultsPage';
import flightData from '../../fixtures/flightData.json';

describe('Round-trip Flight Search', () => {
  const home = new HomePage();
  const results = new SearchResultsPage();

  beforeEach(() => cy.visit('/'));

  it('should show validation error for return before departure', () => {
    const data = flightData.roundTrip;
    home.selectTripType('roundtrip');
    home.enterAirport('from', data.origin);
    home.enterAirport('to', data.destination);
    home.selectDate('departure', data.departureDate);
    home.selectDate('return', data.returnDate.slice(0,10));
    home.setPassengers(data.passengers);
    home.clickSearch();

    cy.get('SELECTOR_DATE_ERROR').should('contain', 'Return date must be after departure date');
  });

  it('should display results for valid round-trip search', () => {
    const data = { ...flightData.roundTrip, returnDate: flightData.roundTrip.returnDate };
    home.selectTripType('roundtrip');
    home.enterAirport('from', data.origin);
    home.enterAirport('to', data.destination);
    home.selectDate('departure', data.departureDate);
    home.selectDate('return', data.returnDate);
    home.setPassengers(data.passengers);
    home.clickSearch();

    results.waitForResults();
    results.verifyRoute(data.origin, data.destination);
    results.verifyDate(data.departureDate);
    results.verifyAtLeastFlights(1);
  });
});