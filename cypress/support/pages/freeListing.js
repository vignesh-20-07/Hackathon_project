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

    inputboxVisible(){
       
      cy.get('form')
        .find('input[name="pincode"]')
        .should('exist')
        .should('be.visible')
        .should('have.attr', 'type', 'text')
        .should('have.attr', 'inputmode', 'numeric') // Ensure numeric mode
        .should('have.attr', 'maxlength', '10'); // Confirm max length
          
    }
}

export default new FreeListing();