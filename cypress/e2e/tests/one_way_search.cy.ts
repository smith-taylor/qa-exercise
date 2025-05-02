import HomePage from '../page_objects/HomePage';
import SearchResultsPage from '../page_objects/SearchResultsPage';
import flightData from '../../fixtures/flightData.json';

describe('One-way Flight Search', () => {
  const home = new HomePage();
  const results = new SearchResultsPage();

  beforeEach(() => {
    cy.visit('/');
  });

  it('should display results for valid one-way search', () => {
    const data = flightData.oneWay;
    home.selectTripType('oneway');
    home.enterAirport('from', data.origin);
    home.enterAirport('to', data.destination);
    home.selectDate('departure', data.departureDate);
    home.setPassengers(data.passengers);
    home.clickSearch();

    results.waitForResults();
    results.verifyRoute(data.origin, data.destination);
    results.verifyDate(data.departureDate);
    results.verifyAtLeastFlights(1);
  });
});