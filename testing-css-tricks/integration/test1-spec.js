describe('CSS-Tricks home page', function() {
    
    beforeEach(function() {
        cy.visit('/');
    });
    
    it('contains "CSS-Tricks" in the title', function() {
        cy.title().should('contain', 'CSS-Tricks');
    });

    it('has a visible star logo ', function() {
        cy.get('.icon-logo-star').should('be.visible');
    });

    it('has a visible star logoenter text in search field', function() {
        cy.get('#search-opener').click();
        cy.get('#search-input').type('flexbox{enter}');
    });

    
    describe('with a 370x820 viewport', function() {
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

    describe('Search results page', function() {
        beforeEach(function() {
          cy.visit('/?s=flexbox');
        });
        it("print the title of the page",function(){
           console.log(cy.title()); 
        });
        it('displays search field', function(){
            cy.get('#search-input').should('exist');
        });
    });
});