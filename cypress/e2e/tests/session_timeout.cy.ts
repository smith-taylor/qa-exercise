// cypress/e2e/tests/session_timeout.cy.ts
import { HomePage } from '../page_objects/HomePage';

describe('TC008 – Session Timeout Behavior', () => {
  const home = new HomePage();

  it('expires session after 20 minutes of inactivity', () => {
    cy.clock();
    cy.visit('/');
    home.selectTripType('oneway');
    home.enterOrigin('ATL');
    home.enterDestination('BOS');
    home.selectDate(10);

    // simulate 20+ minutes idle
    cy.tick(20 * 60 * 1000 + 1000);

    home.submitSearch();
    // the app should now show a session-expired message or redirect to login
    cy.get('body').should('contain', 'Your session has expired');
  });
});
