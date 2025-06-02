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



describe('Free Listing Registration ', () => {
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

  it('Input Box Visibility', function () {
    freeListing.visit();
    freeListing.clickMaybeLater();
    freeListing.clickFreeListing();
    freeListing.inputboxVisible();

  });

  it('Input Box Visibility', function () {
    freeListing.visit();
    freeListing.clickMaybeLater();
    freeListing.clickFreeListing();
    freeListing.inputboxVisible();

  });
});
 
