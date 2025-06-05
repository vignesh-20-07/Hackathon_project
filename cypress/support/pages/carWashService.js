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


  navigateToPage() {
    cy.get('#main-auto').click().type('Car Wash Services Near Me');
    cy.get('.search_button').click();
    //cy.get('.search_button').click();
    //cy.wait(30000);
  }

  ratings() {
    cy.get('#all_filters_btn').click();
    cy.get('.jsx-193cf54a15e7e6b7.more_filter_sidebar.pl-30.pr-30 > .jsx-193cf54a15e7e6b7.mb-20').contains('4.0+').click({ force: true });
    //cy.get('.jsx-193cf54a15e7e6b7.resfilter_inner_item font14 gray_whitefill_animate.itmdisp').contains('4.0+').click();
    cy.get('.jsx-193cf54a15e7e6b7.more_filter_btnbox').contains('Apply Filters').click();
  }

  sortings() {
    cy.get('.jsx-8e2185bd5f884df4.resfilter_item_outer').contains('Top Rated').click({ force: true });
    cy.get('.resultbox_countrate.mr-12.font15.fw400.color777').then(($el) => {
      const valid = [];
      const service = [];
      $el.each((index, el) => {
        const text = el.innerText;
        const cleanedText = text.replace(/,/g, '');
        //class="jsx-7cbb814d75c86232 resultbox_title_anchor font22 fw500 color111 line_clamp_1 "
        const match = cleanedText.match(/\d+/);
        if (match) {
          const votes = parseInt(match[0], 10);
          if (votes > 20) {
            valid.push({ votes });
          }
        }
      })
      // Log directly to the browser console.
      console.log('Valid Elements:', valid);
      //cy.log('Valid Elements:', JSON.stringify(valid, null, 2));
    })
  }

 

}










export default new CarWashService();

