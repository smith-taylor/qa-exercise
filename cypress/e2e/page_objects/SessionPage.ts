// cypress/e2e/page_objects/SessionPage.ts
export class SessionPage {
    getSessionExpiredMessage() {
      return cy.contains('Your session has expired');
    }
  }
  