describe('Scroll Bars', () => {
  beforeEach(() => {
    cy.viewport(500, 500);
    cy.visit('/');
  });

  it('should be able to scroll down and up', () => {
    cy.window().its('scrollY').should('equal', 0);
    cy.scrollWindow('down');
    cy.window().its('scrollY').should('not.equal', 0);
    cy.scrollWindow('up');
    cy.window().its('scrollY').should('equal', 0);
  });
/*
  it('should be able to scroll right and left', () => {
    cy.window().its('scrollX').should('equal', 0);
    cy.scrollWindow('right');
    cy.window().its('scrollX').should('not.equal', 0);
    cy.scrollWindow('left');
    cy.window().its('scrollX').should('equal', 0);
  });
*/

/*
This test enhances navigation for users, particularly those with motor disabilities
 who rely on keyboard controls to scroll. It optimizes user experience by ensuring all content is accessible, 
 regardless of device or screen size. It ensures compliance with accessibility standards like WCAG 2.1,
  making web content reachable to a broader audience.
*/ 
});