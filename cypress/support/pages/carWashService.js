class CarWashService {
  visitHomePage(latitude, longitude) {
    cy.visit("https://www.justdial.com/", {
      onBeforeLoad({ navigator }) {
        cy.stub(navigator.geolocation, "getCurrentPosition")
          .callsArgWith(0, { coords: { latitude, longitude } });
      },
    });
   
    cy.wait(5000);
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

  getLocationValue() {
    return cy.get('#city-auto-sug').invoke('val');
  }

  checkCurrentLocation(expectedText) {
    this.getLocationValue().then((location) => {
      expect(location).to.include(expectedText);
     });
  }
}

export default new CarWashService();
