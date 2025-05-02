// cypress/e2e/tests/autocomplete.cy.ts
import { HomePage } from '../page_objects/HomePage';

describe('TC007 – Autocomplete City Lookup', () => {
  const home = new HomePage();

  beforeEach(() => {
    cy.visit('/');
  });

  it('suggests city names when typing “New”', () => {
    cy.get('[data-testid="origin-input"]').clear().type('New');
    cy.get('[data-testid="origin-suggestion"]').should('have.length.gte', 3);
    cy.get('[data-testid="origin-suggestion"]').then($items => {
      const texts = $items.map((_, el) => el.innerText).get();
      expect(texts).to.include.members(['New York', 'Newark']);
    });
  });
});
