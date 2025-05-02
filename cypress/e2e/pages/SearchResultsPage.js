export default class SearchResultsPage {
    waitForResults() {
      cy.get('SELECTOR_RESULTS_CONTAINER', { timeout: 20000 }).should('be.visible');
    }
  
    verifyRoute(origin: string, destination: string) {
      cy.get('SELECTOR_ROUTE_HEADER').should('contain', `${origin} → ${destination}`);
    }
  
    verifyDate(date: string) {
      cy.get('SELECTOR_DATE_DISPLAY').should('contain', date);
    }
  
    verifyAtLeastFlights(count: number) {
      cy.get('SELECTOR_FLIGHT_CARD').its('length').should('be.gte', count);
    }
  }
