import carWashService from "../support/pages/carWashService";
import fitnessSubmenu from "../support/pages/fitnessSubmenu";
import freeListing from "../support/pages/freeListing";

describe("Hackathon", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it("First trial", () => {
    carWashService.visitHomePage(11.097208, 76.990016);

  });

});

describe("Gym Sub-menu", () => {
  it("Base URL visit", () => {
    fitnessSubmenu.visit();
  });
  it('Gym Navigation', () => {
    fitnessSubmenu.gymNavigation();
    fitnessSubmenu.verifyUrl();
  });

  it('Gym sub-menu verification', () => {
    fitnessSubmenu.submenuVerification();
  })

  it('Gym sub-array items', () => {
    fitnessSubmenu.subItemsFetching();
  });
})
describe('Free Listing Registration', () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.fixture('example').then((data) => {
      cy.wrap(data).as('testData');
    });
  });

  it('Free Listing Navigation, Validate Phone Number, and Capture Error', () => {

    freeListing.visit();
    // freeListing.clickMaybeLater();

    freeListing.clickFreeListing();
    freeListing.verifyUrl();

    cy.get('@testData').then((data) => {
      data.invalidPhoneNumbers.forEach((phone) => {
        freeListing.enterPhoneNumber(phone);
        freeListing.verifyErrorMessage();
      });
    });

  });
});

