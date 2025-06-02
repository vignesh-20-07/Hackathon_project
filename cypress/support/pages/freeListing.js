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

    enterPhoneNumber(phoneNumber) {
        cy.get('#1').clear().type(`${phoneNumber}{enter}`);
    }

    verifyErrorMessage() {
        cy.get('.entermobilenumber_error__text__uPM09').should('be.visible').then(($el) => {
            cy.log('Error Message:', $el.text());
        });
    }
}

export default new FreeListing();