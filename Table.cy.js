///require('./commands');

describe("Handle Tables",()=>{

    beforeEach('url',()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")
    })

    it.skip('check number Row and Column',()=>{      

        cy.get("table[name='BookTable']").should('be.visible').and('exist') //visible and exist

        cy.get("table[name='BookTable']>tbody>tr").should('have.length','7')

        cy.get("table[name='BookTable']>tbody>tr>th").should('have.length','4')

    })

    it.skip('check cell data from specific rom and column',()=>{

        cy.get("body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(2)")
        .contains('Animesh')


    })

    /*it('Read all the rows and column data in the first page',()=>{

        cy.get("table[name='BookTable']>tbody>tr")
        .each(($row, index, $rows)=>{
            if(index!==0){

            cy.wrap($row).within( ()=>{ 
                
                cy.get("td").each( ($col, index, $cols)=>{
                    cy.log($col.text());
                })

            })
        }
    }) 
})*/

    it("Match the data ",()=>{
        
    cy.get("table[name='BookTable']>tbody>tr>td:nth-child(2)").each(($e, index, $list)=>
        {
            const author =$e.text()
            if(author.includes("Animesh")){
                cy.get("table[name='BookTable']>tbody>tr>td:nth-child(1)").eq(index)
                .then(function(name)
            {
                const bookname=name.text()
                expect(bookname).to.eq("Learn JS")
                cy.log(bookname)
                
            })
            }
        })
        cy.get("table[name='BookTable']>tbody>tr>td:nth-child(4)").each(($p, index, $list)=>
        {
            const price =$p.text()
            if(price.includes("2000"))
            {
                cy.get("table[name='BookTable']>tbody>tr>td:nth-child(3)").eq(index)
                .then(function(subject)
            {
                const subjectname=subject.text()
                expect(subjectname).to.eq("JAVA")
                cy.log(subjectname)
                
            })
            cy.get("table[name='BookTable']>tbody>tr>td:nth-child(2)").eq(index)
            .then(function(Author)
            {
                const authorname=Author.text()
                expect(authorname).to.eq("Amod")
                cy.log(authorname)
            })
            
            

        }
    })
        
}) 
})