/// <reference types="Cypress" />

describe("Alt for Images", () => {

    beforeEach(() => {
      cy.visit("/")  // Visit your page
    })
  
    it("all images should have an alt attribute", () => {
      cy.get('img').each(($el) => {
        // For each image, ensure it has an alt attribute
        cy.wrap($el).should('have.attr', 'alt')
      })
    })
  })