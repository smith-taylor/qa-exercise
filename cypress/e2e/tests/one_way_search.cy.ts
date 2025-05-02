// cypress/e2e/tests/one_way_search.cy.ts
import { HomePage } from '../page_objects/HomePage';
import { SearchResultsPage } from '../page_objects/SearchResultsPage';

describe('TC001 – One‑Way Flight Search – Valid', () => {
  const home = new HomePage();
  const results = new SearchResultsPage();

  beforeEach(() => {
    cy.visit('/');
  });

  it('selects one‑way, enters ATL→JFK, picks a future date, and searches', () => {
    home.selectTripType('oneway');
    home.enterOrigin('ATL');
    home.enterDestination('JFK');
    home.selectDate(30); // 30 days from today
    home.submitSearch();

    results.verifyResultsLoaded();
    cy.get('[data-testid="flight-option"]').first().within(() => {
      cy.get('[data-testid="flight-price"]').should('exist');
      cy.get('[data-testid="flight-duration"]').should('exist');
      cy.get('[data-testid="flight-airline"]').should('exist');
    });
  });
});
