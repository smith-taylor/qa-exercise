// cypress/e2e/tests/calendar_logic.cy.ts
import { HomePage } from '../page_objects/HomePage';

describe('TC006 – Date Picker Calendar Logic', () => {
  const home = new HomePage();

  beforeEach(() => {
    cy.visit('/');
  });

  it('only allows future dates to be selected', () => {
    cy.get('[data-testid="departure-date-input"]').click();
    // try to select a greyed-out (past) date button
    cy.get('.react-datepicker__day--disabled').first().click({ force: true });
    // confirm it did not set that date
    cy.get('[data-testid="departure-date-input"]')
      .invoke('val')
      .should('not.match', /^\d{4}-\d{2}-\d{2}$/); // still empty or unchanged

    // select a valid future date
    home.selectDate(5);
    cy.get('[data-testid="departure-date-input"]')
      .invoke('val')
      .should('match', /^\d{4}-\d{2}-\d{2}$/);
  });
});
