// cypress/e2e/page_objects/HomePage.ts
export class HomePage {
  selectTripType(type: 'oneway' | 'roundtrip') {
    cy.get('[data-testid="trip-type-selector"]').contains(type).click();
  }

  enterOrigin(code: string) {
    cy.get('[data-testid="origin-input"]').clear().type(code);
    cy.get('[data-testid="origin-suggestion"]').first().click();
  }

  enterDestination(code: string) {
    cy.get('[data-testid="destination-input"]').clear().type(code);
    cy.get('[data-testid="destination-suggestion"]').first().click();
  }

  openCalendar() {
    cy.get('[data-testid="departure-date-input"]').click();
  }

  selectDate(offsetDays: number) {
    const targetDate = Cypress.moment().add(offsetDays, 'days').format('YYYY-MM-DD');
    this.openCalendar();
    cy.get(`[data-date="${targetDate}"]`).click();
  }

  selectRoundTripDates(departureOffset: number, returnOffset: number) {
    this.openCalendar();
    this.selectDate(departureOffset);
    cy.get('[data-testid="return-date-input"]').click();
    const returnDate = Cypress.moment().add(returnOffset, 'days').format('YYYY-MM-DD');
    cy.get(`[data-date="${returnDate}"]`).click();
  }

  submitSearch() {
    cy.get('[data-testid="flight-submit-button"]').click();
  }

  // —— Validation errors ——  
  getOriginError() {
    return cy.get('[data-testid="origin-error"]');
  }

  getDestinationError() {
    return cy.get('[data-testid="destination-error"]');
  }

  getDateError() {
    return cy.get('[data-testid="date-error"]');
  }

  // —— Mobile menu ——  
  openMobileMenu() {
    cy.get('[data-testid="mobile-menu-button"]').click();
  }
}
