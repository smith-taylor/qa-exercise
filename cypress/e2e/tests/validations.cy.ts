// cypress/e2e/tests/validations.cy.ts
import { HomePage } from '../page_objects/HomePage';

describe('Field Validations', () => {
  const home = new HomePage();

  beforeEach(() => {
    cy.visit('/');
  });

  it('TC003 – required fields blank shows errors', () => {
    home.submitSearch();
    cy.get('[data-testid="origin-error"]').should('contain', 'required');
    cy.get('[data-testid="destination-error"]').should('contain', 'required');
    cy.get('[data-testid="date-error"]').should('contain', 'required');
  });

  it('TC004 – invalid airport code displays “airport not found”', () => {
    home.enterOrigin('XXX');
    home.enterDestination('JFK');
    home.submitSearch();
    cy.get('[data-testid="origin-error"]')
      .should('contain', 'Airport not found');
  });

  it('TC005 – selecting a past date triggers validation', () => {
    home.enterOrigin('ATL');
    home.enterDestination('LAX');
    // manually set input value to yesterday
    const yesterday = Cypress.moment().subtract(1, 'days').format('YYYY-MM-DD');
    cy.get('[data-testid="departure-date-input"]').clear().type(yesterday).blur();
    home.submitSearch();
    cy.get('[data-testid="date-error"]')
      .should('contain', 'must be a future date');
  });
});
