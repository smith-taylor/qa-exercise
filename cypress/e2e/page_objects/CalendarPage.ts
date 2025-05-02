// cypress/e2e/page_objects/CalendarPage.ts
export class CalendarPage {
    getDisabledDates() {
      return cy.get('.react-datepicker__day--disabled');
    }
  }
  