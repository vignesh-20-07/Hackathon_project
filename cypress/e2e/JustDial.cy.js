import carWashService from "../support/pages/CarWashService";
import fitnessSubmenu from "../support/pages/FitnessSubMenu";
import freeListing from "../support/pages/FreeListing";

describe("Car Wash Service searching and sorting", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  let testdata;

  before(() => {
    cy.fixture('example').then((data) => {
      testdata = data;
    });
  });

  it("Visiting the site", { tags: ['@smoke', '@unit', '@sanity', '@regression', '@integration'] }, () => {
    carWashService.visitHomePage(11.097208, 76.990016);
    carWashService.clickMaybeLater();
  });

  it('Navigate to page', { tags: ['@smoke', '@unit', '@regression', '@integration'] }, () => {
    carWashService.navigateToPage(testdata.service);
  });

  it("Sort with ratings", { tags: ['@smoke'] }, () => {
    carWashService.ratings();
  })

  it("sortabove20", { tags: ['@smoke'] }, () => {
    carWashService.ratings();
    carWashService.sortings();
  })

  it('Service Name', { tags: '@GUI' }, () => {
    carWashService.serviceName()
  })

  it("Check for correct location after sorting", { tags: ['@regression'] }, () => {
    carWashService.ratings();
    carWashService.verifyCityContains(testdata.city);
  });


  it("Ensure location is changed", { tags: ['@regression', '@smoke'] }, () => {
    carWashService.checkCurrentLocation(testdata.location);
  });
});

describe("Gym Submenu Automation", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it("Visit the Gym page", { tags: ['@smoke', '@GUI', '@regression'] }, () => {

    fitnessSubmenu.visit();
    fitnessSubmenu.gymNavigation();

  });

  it("Verify the URL", { tags: ['@smoke', '@GUI', '@regression'] }, () => {
    fitnessSubmenu.verifyUrl();
  });

  it("Assert the presence of sub-menu items", { tags: ['@GUI'] }, () => {
    fitnessSubmenu.submenuVerification();
  });

  it("Retrieve the sub-menu items", { tags: ['@regression'] }, () => {
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

