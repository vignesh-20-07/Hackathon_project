class FreeListing {
    visit() {
      cy.visit('https://www.justdial.com');
    }
    
    clickMaybeLater() {
        cy.get('.maybelater > .jsx-c21ded63fbf3c5d8').should("be.visible").click();
    }

    clickFreeListing() {
      cy.contains('Free Listing').click();
    }
  
    verifyUrl() {
      cy.url().should('include', 'Free-Listing');
    }
}

export default new FreeListing();