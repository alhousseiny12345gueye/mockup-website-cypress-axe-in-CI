/// <reference types="Cypress" />

describe('Home', () => {
    it('should be accessible', () => {
        cy.task('sitemapLocations').then(pages => {
            pages.forEach(page => {
                cy.visit(page)
                cy.injectAxe()
                cy.checkA11y()
            })
        })
      
    })
  })

// first we started with this simple code to inject axe and check the accessibility
// of the whole page using axe deque preset rules based on wcag