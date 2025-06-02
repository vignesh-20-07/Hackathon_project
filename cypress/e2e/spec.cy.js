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

describe('Free Listing Registration', () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.fixture('example').then((data) => {
      cy.wrap(data).as('testData');
    });
  });
  
  it('Register with empty phone number field', function () {
    cy.get('@testData').then((data) => {
      freeListing.visit();
      freeListing.clickMaybeLater();
      freeListing.clickFreeListing();

      freeListing.enterPhoneNumber(data.invalidPhone2);
      freeListing.verifyErrorMessage();
    });
  });

});
 
