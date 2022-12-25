describe('a general flow of quill', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/'); 
    })

    it('contains the editor in which we want to write', () => {
        cy.get("#editor").should("exist");
    });

    it('will mark typos in the editor', () => {
        cy.get("#editor > p > .typo").should("not.exist");
        cy.get("#editor").type("asd ");
        cy.get("#editor > p > .typo").should("exist");
    });

    it('will mark loanwords in the editor', () => {
        cy.get("#editor > p > .loanword").should("not.exist");
        cy.get("#editor").type("lider ");
        cy.get("#editor > p > .loanword").should("exist");
    });
    
    it('will click on button and will check for loanword in output conainer', () =>{
        
        cy.get('button[id="uploadDocumentToggleButton"]').click();
        cy.get('.btn-primary').contains('SHTYP KËTU ').click().selectFile('/home/anderson/Downloads/test.docx');
        cy.get("span.loanword").contains('ters').should("exist");
    });

    it('will click on button and will check for loanword in output conainer', () =>{
        
        cy.get('button[id="uploadDocumentToggleButton"]').click();
        cy.get('.btn-primary').contains('SHTYP KËTU ').click().selectFile('/home/anderson/Downloads/test.docx');
        cy.get("span.typo").contains('asds').should("exist");
    });

    it('will click on editor and check if changes are made on textfield for loanwords', () => {
        cy.get("#editor > p > .loanword").should("not.exist");
        cy.get("#editor").type("lider ");
        cy.get('button.suggestion').contains("prijës").click();
        cy.get("#editor").contains("prijës").should("exist");
        cy.get("#editor").clear();

        cy.get("#editor > p > .loanword").should("not.exist");
        cy.get("#editor").type("lider ");
        cy.get('button.suggestion').contains("drejtues").click();
        cy.get("#editor").contains("drejtues").should("exist");
        cy.get("#editor").clear();

        cy.get("#editor > p > .loanword").should("not.exist");
        cy.get("#editor").type("lider ");
        cy.get('button.suggestion').contains("udhëheqës").click();
        cy.get("#editor").contains("udhëheqës").should("exist");
        cy.get("#editor").clear();
    });

    it('will click on editor and check if changes are made on textfield for typos', () => {
        cy.get("#editor > p > .typo").should("not.exist");
        cy.get("#editor").type("gabmim ");
        cy.get('button.suggestion').contains("gabime").click();
        cy.get("#editor").contains("gabime").should("exist");
        cy.get("#editor").clear();

        cy.get("#editor > p > .typo").should("not.exist");
        cy.get("#editor").type("gabmim ");
        cy.get('button.suggestion').contains("gabimi").click();
        cy.get("#editor").contains("gabimi").should("exist");
        cy.get("#editor").clear();

        cy.get("#editor > p > .typo").should("not.exist");
        cy.get("#editor").type("gabmim ");
        cy.get('button.suggestion').contains("gazmim").click();
        cy.get("#editor").contains("gazmim").should("exist");
        cy.get("#editor").clear();

        cy.get("#editor > p > .typo").should("not.exist");
        cy.get("#editor").type("gabmim ");
        cy.get('button.suggestion').contains("gabim").click();
        cy.get("#editor").contains("gabim").should("exist");
        cy.get("#editor").clear();
    });

    it('will click on fshij button and check if it deletes the text on editor', () => {
        
        cy.get("#editor > p > .typo").should("not.exist");
        cy.get("#editor").type("fshji ");
        cy.get('button.btn-outline-danger').contains("HIQ").click();
        cy.get("button.suggestion").should("not.exist");
        

    });

    it('will click on the expand arrow and click on all suggestions and close it again', () => {

        cy.get("#editor > p > .typo").should("not.exist");
        cy.get("#editor").type("fshji ");
        cy.get('h3.bi-arrow-right-square').click();
        cy.get('button.suggestion').contains("afshi").click();
        cy.get("#editor").contains("afshi").should("exist");
        cy.get("#editor").clear();

        cy.get("#editor > p > .typo").should("not.exist");
        cy.get("#editor").type("fshji ");
        cy.get('h3.bi-arrow-right-square').click();
        cy.get('button.suggestion').contains("fshiu").click();
        cy.get("#editor").contains("fshiu").should("exist");
        cy.get("#editor").clear();

        cy.get("#editor > p > .typo").should("not.exist");
        cy.get("#editor").type("fshji ");
        cy.get('h3.bi-arrow-right-square').click();
        cy.get('button.suggestion').contains("shaji").click();
        cy.get("#editor").contains("shaji").should("exist");
        cy.get('h3.bi-arrow-left-square').click();
        cy.get("#editor").clear();
    });

    it('will click on the "x" button and check if the text is clear', () => {

        cy.get("#editor > p > .typo").should("not.exist");
        cy.get("#editor").type("test per butonin x");
        cy.get('i.bi-x').click();
        cy.get("#editor").contains("test per butonin x").should("not.exist");

    });

}); 
