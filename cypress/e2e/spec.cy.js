import carWashService from "../support/pages/carWashService";
import freeListing from "../support/pages/freeListing";

describe("Hackathon", () => {
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  it("First trial", () => {
    carWashService.visitHomePage(11.097208, 76.990016);
    carWashService.clickMaybeLater();

  });
});

describe("Gym Submenu Automation", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it('Visit the Gym page', () => {
    fitnessSubmenu.visit();
    fitnessSubmenu.gymNavigation();
  });

  it('Verify the URL', () => {
    fitnessSubmenu.verifyUrl();
  });

  it('Assert the presence of sub-menu items', () => {
    fitnessSubmenu.submenuVerification();
  });

  it('Retrieve the sub-menu items', () => {
    fitnessSubmenu.subItemsFetching();
  })

})


describe('Car Wash Service Automation - Free Listing Registration', () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.fixture('example').then((data) => {
      cy.wrap(data).as('testData');
    });
  });
  
  it('Free Listing Navigation', function () {
    freeListing.visit();
    freeListing.clickMaybeLater();
    freeListing.clickFreeListing();
    freeListing.verifyUrl();

    cy.get('@testData').then((data) => {
      data.invalidPhoneNumbers.forEach((phone) => {
        freeListing.enterPhoneNumber(phone);
        freeListing.verifyErrorMessage();
      });
    });
    it('Free Listing Navigation', function () {
      freeListing.visit();
      freeListing.clickMaybeLater();
      freeListing.clickFreeListing();
      freeListing.verifyUrl();

    });

    it('Input Box Visibility', function () {
      freeListing.visit();
      freeListing.clickMaybeLater();
      freeListing.clickFreeListing();
      freeListing.inputboxVisible();

    });


    // cy.get('@testData').then((data) => {
    //   freeListing.enterPhoneNumber(data.invalidPhoneNumbers);
    //   freeListing.verifyErrorMessage();
    // });

  });

  it('Register with invalid phone number', () => {
    cy.get('@testData').then((data) => {
      freeListing.visit();
      freeListing.clickMaybeLater();

      freeListing.clickFreeListing();

      freeListing.enterPhoneNumber(data.invalidPhone1);
      freeListing.verifyErrorMessage();
    });
  });

});
