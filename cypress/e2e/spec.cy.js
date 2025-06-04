import carWashService from "../support/pages/carWashService";
import fitnessSubmenu from "../support/pages/fitnessSubmenu";
import freeListing from "../support/pages/freeListing";

describe.only("Car Wash Service searching and sorting", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  let testdata;

  before(() => {
    cy.fixture('example').then((data) => {
      testdata = data;
    });
  });


  it("Visiting the site", { tags: ['@smoke', '@GUI', '@unit', '@regression', '@integration'] }, () => {
    carWashService.visitHomePage(11.097208, 76.990016);
    carWashService.clickMaybeLater();

  });

  it('Navigate to page', { tags: ['@smoke', '@GUI', '@unit', '@regression', '@integration'] }, () => {

    carWashService.navigateToPage(testdata.service);
  })

  it("Sort with ratings", { tags: ['@unit'] }, () => {

    carWashService.ratings();
  })
  
  it("sortabove20", { tags: ['@unit'] }, () => {

    carWashService.ratings();
    carWashService.sortabove20();
  })

  it("Check for correct location after sorting", { tags: ['@unit'] }, () => {

    carWashService.ratings();

    carWashService.verifyCityContains(testdata.city);

  })


  it("Ensure location is changed", { tags: ['@regression', '@integration', '@smoke'] }, () => {

    carWashService.checkCurrentLocation(testdata.location);

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
  });

});

describe('Free Listing Registration', () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.fixture('example').then((data) => {
      cy.wrap(data).as('testData');
    });
  });

  it('Free Listing Navigation', { tags: ['@smoke', '@GUI', '@negative'] }, () => {
    freeListing.visit();
    freeListing.clickMaybeLater();

    freeListing.clickFreeListing();
    freeListing.verifyUrl();

  });

  it('Register with invalid phone number', { tags: ['@negative'] }, () => {
    cy.get('@testData').then((data) => {

      freeListing.enterPhoneNumber(data.invalidPhone1);
      freeListing.verifyErrorMessage();

    });
  });

  it('Register with empty phone number field', { tags: ['@negative'] }, () => {
    cy.get('@testData').then((data) => {

      freeListing.enterPhoneNumber(data.invalidPhone2);
      freeListing.verifyErrorMessage();

    });
  });

  it('Register with phone number less than 10 digits', { tags: ['@negative', '@validation'] }, () => {
    cy.get('@testData').then((data) => {

      freeListing.enterPhoneNumber(data.invalidPhone3);
      freeListing.verifyErrorMessage();

    });
  });

  it('Input Box Visibility', { tags: ['@GUI'] }, () => {

    freeListing.inputboxVisible();

  });

  it('Successful Registration For Valid Phone', { tags: ['@smoke', '@regression'] }, () => {
    cy.get('@testData').then((data) => {

      freeListing.enterPhoneNumber(data.phonenumber);

    });

    freeListing.verifyOtpModalAppears();

  });

});

