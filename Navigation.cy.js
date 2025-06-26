//go()
///<reference types="Cypress"/>

describe("mysuite", () =>
{
    it('NavigationTest', ()=>
    {
        cy.visit("https://demo.opencart.com"); // example path;
        cy.title().should('eq',"Your Store");    //Home page 

        cy.get("li:nth-child(7) a:nth-child(1)").click();
        cy.get("div[id='content'] h2").should('have.text',"Cameras"); //Cameras

        cy.go('back'); //go back to homepage
        cy.title().should('eq',"Your Store");  //validation

        cy.go('forward'); //Camera page
        cy.get("div[id='content'] h2").should('have.text',"Cameras"); //validation

        cy.go(-1); //go back to homepage
        cy.title().should('eq',"Your Store");  //validation

        cy.go(1); //Camera page
        cy.get("div[id='content'] h2").should('have.text',"Cameras"); //validation

        cy.reload();
    })


})