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
  }

  enterPhoneNumber(phone) {
    cy.get('input[name="pincode"]').eq(0)
      .clear()
      .type(phone)
      .type('{enter}')
      .wait(10000)
  }

  verifyOtpModalAppears() {
    cy.get('body').then(($body) => {
      const modalExists = $body.find('.modal_modal__zB_6A').length > 0;
      cy.log(modalExists ? '✅ OTP modal appeared successfully' : '❌ Failed: OTP modal did not appear');
            
      if (modalExists) {
        cy.get('.modal_modal__zB_6A').should('be.visible');
      }
    });
  }
}

export default new FreeListing();
