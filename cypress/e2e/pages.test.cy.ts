/// <reference types="Cypress" />

const testPageAccessibility = (pages) => {
    if (pages.length) {
      const page = pages.pop();
      cy.visit(page);
      cy.injectAxe();
      cy.checkA11y();
      testPageAccessibility(pages);
    }
  };
  
  describe('Home', () => {
    it('should be accessible', () => {
      const pages = Cypress.env('paths');
      pages.forEach(page => {
        cy.visit(page)
        cy.injectAxe()
        cy.checkA11y()
      });
    });
  });

// first we started with this simple code to inject axe and check the accessibility
// of the whole page using axe deque preset rules based on wcag