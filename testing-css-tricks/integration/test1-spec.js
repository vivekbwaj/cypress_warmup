describe('CSS-Tricks home page', function() {
    
    beforeEach(function() {
        cy.visit('https://css-tricks.com/');
    });
    
    it('contains "CSS-Tricks" in the title', function() {
        cy.title().should('contain', 'CSS-Tricks');
    });

    it('has a visible star logo', function() {
        cy.get('.icon-logo-star').should('be.visible');
    });

    it('has a visible star logo', function() {
        cy.get('#search-opener').click();
        cy.get('#search-input').type('flexbox{enter}');
    });

    
    describe('with a 320x568 viewport', function() {
        beforeEach(function() {
            cy.viewport(370, 820);
        });

        it('has a visible mobile menu toggle', function() {
            cy.get('#mobile-menu-toggle').should('be.visible');
        });  
    });

    describe('with a 1100x660 viewport', function() {
        beforeEach(function() {
          cy.viewport(1100, 660);
        });
      
        it('has a visible mobile menu toggle', function() {
          cy.get('#mobile-menu-toggle').should('be.visible');
        }); 
    });
});