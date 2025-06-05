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

  navigateToPage(service) {
    cy.get('#main-auto').click().type(service);
    cy.get('.search_button').click();
  }

  ratings() {
    cy.get('#all_filters_btn').click({ force: true });
    cy.get('.jsx-193cf54a15e7e6b7.more_filter_sidebar.pl-30.pr-30 > .jsx-193cf54a15e7e6b7.mb-20').contains('4.0+').click({ force: true });
    cy.get('.jsx-193cf54a15e7e6b7.more_filter_btnbox').contains('Apply Filters').click({ force: true });
  }


  getLocationValue() {
    return cy.get('#city-auto-sug').invoke('val');
  }

  checkCurrentLocation(expectedText) {
    this.getLocationValue().then((location) => {
      expect(location).to.include(expectedText);
    });
  }

  cityDivs = '.locatcity.font15.fw400.color111';

  getCities() {
    return cy.get(this.cityDivs);
  }

  verifyCityContains(expectedText) {
    this.getCities().then(($elements) => {
      const texts = [...$elements].map(el => el.innerText);
      expect(texts.some(text => text.includes(expectedText))).to.be.true;
    });
  }

  sortings() {
    cy.get('.jsx-8e2185bd5f884df4.resfilter_item_outer').contains('Top Rated').click({ force: true });
    cy.get('.resultbox_countrate.mr-12.font15.fw400.color777').then(($el) => {
      const valid = [];
      $el.each((index, el) => {
        const text = el.innerText;
        const cleanedText = text.replace(/,/g, '');
        const match = cleanedText.match(/\d+/);
        if (match) {
          const votes = parseInt(match[0], 10);
          if (votes > 20) {
            valid.push({ votes });
          }
        }
      })
      console.log('Valid Elements:', valid);
    })
  }

  serviceName() {
    const finalResults = [];
    cy.get('.jsx-7cbb814d75c86232.resultbox_info').each(($card, index) => {
      if (index >= 5) {
        return false;
      }
      cy.wrap($card)
        .find('.jsx-7cbb814d75c86232.resultbox_title.font22.fw500.color111.complist_title h3')
        .invoke('text')
        .then((serviceText) => {
          const trimmedService = serviceText.trim() || 'Unknown Service';
          cy.log(`Service Name : ${trimmedService}`);
          finalResults.push({ service: trimmedService });
        });
    }).then(() => {
      cy.log('--- Final Results ---');
      finalResults.forEach((result) => {
        cy.log(`Service Name : ${result.service}`);
      });
    });
  }


}
export default new CarWashService();
