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

describe('Car Wash Service Automation - Free Listing Registration', () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it('Free Listing Navigation', function () {
    freeListing.visit();
    freeListing.clickMaybeLater();
    freeListing.clickFreeListing();
    freeListing.verifyUrl();

  });
});
 
