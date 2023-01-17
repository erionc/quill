describe("test for the x button that clears test on editor", () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200/");
    });

    it('will click on the "x" button and check if the text is clear', () => {
        cy.get("i.bi-x").should("not.exist");
        cy.get("#editor > p > .typo").should("not.exist");
        cy.get("#editor").type("test per butonin x");
        cy.get("i.bi-x").click();
        cy.get("#editor").contains("test per butonin x").should("not.exist");
        cy.get("i.bi-x").should("not.exist");
    });
});
