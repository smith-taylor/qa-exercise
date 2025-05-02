export class SearchResultsPage {
  verifyResultsLoaded() {
    cy.get('[data-testid="results-list"]').should('be.visible');
  }

  filterNonStop() {
    cy.get('[data-testid="nonstop-filter"]').click();
  }

  selectFlightByIndex(index: number) {
    cy.get('[data-testid="flight-option"]').eq(index)
      .contains('Select')
      .click();
  }
}
