// cypress/e2e/tests/round_trip_search.cy.ts
import { HomePage } from '../page_objects/HomePage';
import { SearchResultsPage } from '../page_objects/SearchResultsPage';

describe('TC002 – Round‑Trip Flight Search – Valid', () => {
  const home = new HomePage();
  const results = new SearchResultsPage();

  beforeEach(() => {
    cy.visit('/');
  });

  it('selects round‑trip, enters ATL↔LAX, picks 7‑day apart dates, and searches', () => {
    home.selectTripType('roundtrip');
    home.enterOrigin('ATL');
    home.enterDestination('LAX');
    home.selectRoundTripDates(7, 14); // depart in 7d, return in 14d
    home.submitSearch();

    results.verifyResultsLoaded();
    // ensure both outbound & return flights show up
    cy.get('[data-testid="flight-option"]').should('have.length.gte', 2);
  });
});
