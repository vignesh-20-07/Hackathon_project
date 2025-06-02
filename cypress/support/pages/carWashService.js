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
   
    // clickMaybeLater() {
    //   cy.get('.maybelater > .jsx-c21ded63fbf3c5d8')
    //     .should("be.visible")
    //     .click();
    // }

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

    navigateToPage(){
      cy.get('#main-auto').click().type('Car Wash Services Near Me',{delay:200});
      cy.get('.search_button').click();
      //cy.get('.search_button').click();
      //cy.wait(30000);
  }

    ratings(){
      cy.get('#all_filters_btn').click({force:true});
      cy.get('.jsx-193cf54a15e7e6b7.more_filter_sidebar.pl-30.pr-30 > .jsx-193cf54a15e7e6b7.mb-20').contains('4.0+').click({force:true});
      //cy.get('.jsx-193cf54a15e7e6b7.resfilter_inner_item font14 gray_whitefill_animate.itmdisp').contains('4.0+').click();
      cy.get('.jsx-193cf54a15e7e6b7.more_filter_btnbox').contains('Apply Filters').click({force:true});
    }

     sortabove20(){
      cy.get('.resultbox_countrate.mr-12.font15.fw400.color777').then(($elements) => {
        let ratings = $elements.map((index, el) => {
            return parseInt(el.innerText.match(/\d+/)[0], 10); // Extract number
        }).get();

        // Filter out ratings <= 20 and sort in descending order
        ratings = ratings.filter(num => num > 20).sort((a, b) => b - a);

        // Log results
        cy.log('Filtered and sorted ratings:', ratings);
    });
    }
    //"jsx-193cf54a15e7e6b7 more_filter_sidebar pl-30 pr-30"

    //class="jsx-193cf54a15e7e6b7 mb-20"
    
  }
   
  export default new CarWashService();