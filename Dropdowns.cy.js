/// <reference types="Cypress" />

describe('Handle dropdowns', () => {

    it.skip('Dropdown with select', () => {

        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");

        cy.get('#dropdowm-menu-1') // Corrected typo in the ID
            .should('be.visible') // ensures the element is available before selecting
            .select('Python')
            .should('have.value', 'python');

    });

    it.skip('Dropdown without select',()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get('#select2-billing_country-container').click()

        cy.get("input[role='combobox']").type('Italy').type('{enter}')

        cy.get('#select2-billing_country-container')
        .should('have.text','Italy')
    })

    it.skip('Auto suggest dropdown',()=>{

        cy.visit("https://www.wikipedia.org/")

        cy.get('#searchInput').type('Delhi')

        cy.get('.suggestion-title').contains('Delhi University').click()
    })

    it('Dynamic dropdown',()=>{

        cy.visit("https://www.google.com/")

        cy.get("input[name='q']").type('cypress automation')

        cy.get('div.wM6W7d>span').should('have.length',11)

        cy.get('div.wM6W7d>span').each(($el, index, $list)=>{

            if($el.text()=='cypress automation tool')
            {
                cy.wrap($el).click()
            }
        })
        
        cy.get("input[name='q']").should('have.value','cypress automation tool')
    })
})

