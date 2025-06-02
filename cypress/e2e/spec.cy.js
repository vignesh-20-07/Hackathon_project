import carWashService from "../support/pages/carWashService";
import freeListing from "../support/pages/freeListing";

describe("Hackathon", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it("First trial", () => {
    carWashService.visitHomePage(11.097208, 76.990016);
    carWashService.clickMaybeLater();
    
  });

});

describe("Gym Sub-menu", () => {
  it("First trial", () => {
    // Visit homepage with geolocation stubbed
    carWashService.visitHomePage(11.097208, 76.990016);

    // carWashService.clickMaybeLater();

  });
  it('Gym Navigation', () => {
    fitnessSubmenu.gymNavigation();
  });

  it('Gym sub-array items', () => {
    fitnessSubmenu.subItemsFetching();
  })
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
    freeListing.clickMaybeLater();

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
 
