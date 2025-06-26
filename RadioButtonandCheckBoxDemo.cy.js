///<reference types="Cypress"/>

describe("Check UI Elements", ()=>{

    /*it("checking Radio Buttons",()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")

        //visibility of radio buttons
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        //selecting of radio buttons
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')

        
    })*/

    it("checking Check Boxes",()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")

        //Visibility of the element
        /*cy.get("input#monday").should('be.visible')

        //Selecting Single check box -monday
        cy.get("input#monday").check().should('be.checked')

        //Unselecting checkbox
        cy.get("input#monday").uncheck().should('not.be.checked')*/

        //Selecting all the check box
        // cy.get("input.form-check-input[type=checkbox]").check().should('be.checked')
        // cy.get("input.form-check-input[type=checkbox]").uncheck().should('not.be.checked')

        //Selecting the first and last check box throughtout of all 
        cy.get("input.form-check-input[type=checkbox]").first().check().should('be.checked')
        cy.get("input.form-check-input[type=checkbox]").last().check().should('be.checked')

    })
})