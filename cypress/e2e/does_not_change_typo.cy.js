describe("its going to test if the typo is going to change its value once the dokument is clicked", () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200/");
    });

    it("will click on dokument and on shkruaj again", () => {
        
        cy.get("#editor > p > .typo").should("not.exist");
        cy.get('[data-test="editor"]').type("pra asd e kaq ");
        cy.wait(2000);
        cy.get('button[id="uploadDocumentToggleButton"]').click();
        cy.get("span.typo").contains("asd").should("exist");
        cy.get('button[id="writeTextToggleButton"]').click();
        cy.get('[data-test="editor"]').contains("pra asd e kaq").should("exist");
        cy.get('[data-test="editor"]').clear();
        });
    });
