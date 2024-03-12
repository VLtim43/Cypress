describe("fundamentals spec", () => {
  it("Contains correct text header", () => {
    cy.visit("/");
    cy.get('[data-test="home-header"]').contains(/Why Cypress/i);
  });
});
