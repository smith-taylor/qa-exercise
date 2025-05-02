export default class HomePage {
    selectTripType(type: 'oneway' | 'roundtrip') {
      cy.selectTripType(type);
    }
  
    enterAirport(field: 'from' | 'to', code: string) {
      cy.enterAirport(field, code);
    }
  
    selectDate(picker: 'departure' | 'return', date: string) {
      cy.selectDate(picker, date);
    }
  
    setPassengers(passengers: Record<string, number>) {
      cy.setPassengers(passengers);
    }
  
    clickSearch() {
      cy.clickSearch();
    }
  }
