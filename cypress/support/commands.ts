// Extend Cypress commands for reusable actions

Cypress.Commands.add('selectTripType', (type: 'oneway' | 'roundtrip') => {
    cy.get('SELECTOR_TRIP_TYPE_BUTTON').click();
    cy.get(`SELECTOR_TRIP_TYPE_${type.toUpperCase()}`).click();
  });
  
  Cypress.Commands.add('enterAirport', (field: 'from' | 'to', code: string) => {
    const selector = field === 'from' ? 'SELECTOR_FROM_INPUT' : 'SELECTOR_TO_INPUT';
    cy.get(selector).clear().type(code);
    cy.get('SELECTOR_AIRPORT_SUGGESTION').contains(code).click();
  });
  
  Cypress.Commands.add('selectDate', (picker: 'departure' | 'return', date: string) => {
    const inputSel = picker === 'departure' ? 'SELECTOR_DEPART_INPUT' : 'SELECTOR_RETURN_INPUT';
    cy.get(inputSel).click();
    cy.get(`button[aria-label="${new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}"]`).click();
  });
  
  Cypress.Commands.add('setPassengers', (passengers: Record<string, number>) => {
    cy.get('SELECTOR_PASSENGER_TOGGLE').click();
    if (passengers.adults > 1) {
      for (let i = 1; i < passengers.adults; i++) cy.get('SELECTOR_ADULT_PLUS').click();
    }
    // children and infants handled similarly
    cy.get('SELECTOR_PASSENGER_DONE').click();
  });
  
  Cypress.Commands.add('clickSearch', () => {
    cy.get('SELECTOR_SEARCH_BUTTON').click();
  });
  