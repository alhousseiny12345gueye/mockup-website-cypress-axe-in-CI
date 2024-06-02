/// <reference types="Cypress" />

describe('Home', () => {
    it('should be accessible', () => {
      cy.visit('/')
      cy.injectAxe()
      cy.checkA11y()
    })
  })

// first we started with this simple code to inject axe and check the accessibility
// of the whole page using axe deque preset rules based on wcag