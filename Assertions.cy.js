///<reference types="Cypress"/>


describe("Assertions demo", ()=>{

    it("Implicit assertions", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //there are two assertions for implicit SHOULD , AND

        //cy.url().should('include','orangehrmlive.com')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','orangehrm')

        //Alternative way(1)
        // cy.url().should('include','orangehrmlive.com')
        // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain','orangehrm')

        //Alternative way(2)
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        .and('not.contain','orangehrm123')

        //To check the title 
        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        //To check the Logo
        cy.get('.orangehrm-login-branding').should('be.visible') //LOGO VISIBLE
        .and('exist') //LOGO EXIST

        //cy.xpath("//a").should('have.length', 5); // number of <a> links


        cy.get("input[placeholder='Username']").type("Admin") //provides a value into inputbox

        cy.get("input[placeholder='Username']").should('have.value','Admin')
    
    })

    it("Explicit assertions",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName="Admin1 Admin3";

        cy.get(".oxd-userdropdown-name").then( (x)=>{

            let actName=x.text()

            //BDD Style
            expect(actName).to.equal(expName)
            //expect(actName).to.not.equal(expName)

            //TDD Style
            assert.equal(actName,expName)
            //assert.notEqual(actName,expName)
        })


    })
})