// cypress/e2e/page_objects/AutocompletePage.ts
export class AutocompletePage {
    getOriginSuggestions() {
      return cy.get('[data-testid="origin-suggestion"]');
    }
  }
  