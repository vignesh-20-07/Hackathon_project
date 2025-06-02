class FreeListing {
    visit() {
      cy.visit('https://www.justdial.com');
    }
    
    clickMaybeLater() {
      cy.get('body').then(($body) => {

        if ($body.find('.maybelater > .jsx-c21ded63fbf3c5d8').length > 0) {
          cy.get('.maybelater > .jsx-c21ded63fbf3c5d8')
            .should("be.visible")
            .click();
        } else {
         
          cy.log('Maybe Later popup is not displayed, proceeding without clicking.');
        }
      });
    }

    clickFreeListing() {
      cy.contains('Free Listing').click();
    }
  
    verifyUrl() {
      cy.url().should('include', 'Free-Listing');
    }

<<<<<<< HEAD
    enterPhoneNumber(phoneNumber) {
        cy.get('#1').clear().type(`${phoneNumber}{enter}`);
    }

    verifyErrorMessage() {
        cy.get('.entermobilenumber_error__text__uPM09').should('be.visible').then(($el) => {
            cy.log('Error Message:', $el.text());
        });
=======
    inputboxVisible(){
       
      cy.get('form')
        .find('input[name="pincode"]')
        .should('exist')
        .should('be.visible')      
          
>>>>>>> Input-box-Visible
    }
}

export default new FreeListing();