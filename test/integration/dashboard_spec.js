describe('Dashboard', function() {
    it('shows the number of open issues', function() {
        cy.fixture({
            title: "Issue 1",
            status: "open",
        });
        cy.fixture({
            title: "Issue 2",
            status: "open"
        });
        cy.fixture({
            title: "Issue 3",
            status: "closed"
        });

        cy.visit('/dashboard');
        cy.contains('2').should('exist');
    });

    it('show high severity gauge', function(){
        cy.fixture({
            title: "Issue 1",
            status: "open",
            severity: "High"
        });
        cy.fixture({
            title: "Issue 2",
            status: "open",
            severity: "Low"
        });
        cy.visit('/dashboard');

        cy.get("[data-test-high-gauge]")
            .should('exist')
            .should("contain","High")
            .should("contain","50%");

    })

    it('show 0% severity when no open issue', function(){      
        cy.visit('/dashboard');
        

        cy.get("[data-test-high-gauge]")
            .should('exist')
            .should("contain","High")
            .should("contain","0%");
    })

    it('show medium severity gauge', function(){
        cy.fixture({
            title: "Issue 1",
            status: "open",
            severity: "Medium"
        });
        cy.fixture({
            title: "Issue 2",
            status: "open",
            severity: "Low"
        });
        cy.visit('/dashboard');

        cy.get("[data-test-medium-gauge]")
            .should('exist')
            .should("contain","Medium")
            .should("contain","50%");

    })

    
    it('show low severity gauge', function(){
        cy.fixture({
            title: "Issue 2",
            status: "open",
            severity: "Low"
        });
        cy.visit('/dashboard');

        cy.get("[data-test-Low-gauge]")
            .should('exist')
            .should("contain","Low")
            .should("contain","100%");

    })

    
    it('show low severity gauge', function(){
        cy.fixture({
            title: "Issue 2",
            status: "open",
            severity: "Medium"
        });
        cy.visit('/dashboard');

        cy.get("[data-test-Low-gauge]")
            .should('exist')
            .should("contain","Low")
            .should("contain","0%");
        
        cy.visit('/issues');

        cy.get('[data-test-add-issue]').click();
        cy.get('[name="issue[title]"]').type('Blue screen in Windows Vista');
        cy.get('[name="issue[estimation]"]').select('13');
        cy.get('[name="issue[severity]"]').select('Low');
        cy.get('[name="issue[description]"]').type('When I try to play solitaire in Windows, it crashes with a blue screen');
        cy.get('[type="submit"]').click();

        cy.visit('/dashboard');

        cy.get("[data-test-Low-gauge]")
            .should('exist')
            .should("contain","Low")
            .should("contain","50%");
        
    })
/*
    beforeEach(function() {
        // Cleanup database
        cy.resetDB();
      });
*/
});
