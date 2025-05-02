export class BookingPage {
  verifyBookingSummary() {
    cy.get('[data-testid="booking-summary"]').should('contain', 'Total');
  }

  fillPassengerDetails(firstName: string, lastName: string, dob: string) {
    cy.get('[data-testid="passenger-first-name"]').clear().type(firstName);
    cy.get('[data-testid="passenger-last-name"]').clear().type(lastName);
    cy.get('[data-testid="passenger-dob"]').clear().type(dob);
  }

  fillContactInfo(email: string, phone: string) {
    cy.get('[data-testid="contact-email"]').clear().type(email);
    cy.get('[data-testid="contact-phone"]').clear().type(phone);
  }

  clickContinue() {
    cy.get('[data-testid="continue-button"]').click();
  }
}
