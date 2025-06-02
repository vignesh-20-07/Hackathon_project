import carWashService from "../support/pages/carWashService";
import freeListing from "../support/pages/freeListing";

describe("Hackathon", () => {
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  beforeEach(() => {
    cy.fixture('example').then((data) => {
      cy.wrap(data).as('testData');
    });
  });

  it("First trial", () => {
    carWashService.visitHomePage(11.097208, 76.990016);
    carWashService.clickMaybeLater();
    
  });

  it("Ensure location is changed" , ()=>{
    carWashService.visitHomePage(11.097208, 76.990016);
    carWashService.clickMaybeLater();   
   
    cy.get('@testData').then((data) => {
      carWashService.checkCurrentLocation(data.location);
    });
  })
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

  it('Register with invalid phone number', () => {
    cy.get('@testData').then((data) => {
      freeListing.visit();
      freeListing.clickMaybeLater();
      freeListing.clickFreeListing();
      freeListing.enterPhoneNumber(data.invalidPhone1);
      freeListing.verifyErrorMessage();
      
    });
  });

  it('Input Box Visibility', function () {
    freeListing.visit();
    freeListing.clickMaybeLater();
    freeListing.clickFreeListing();
    freeListing.inputboxVisible();

  });

  it.only('Successful Registration For Valid Phone' , () =>{
    freeListing.visit();
    freeListing.clickMaybeLater();
    freeListing.clickFreeListing();
    cy.get('@testData').then((data) => {
      freeListing.enterPhoneNumber(data.phonenumber);
    });
   
    freeListing.verifyOtpModalAppears();
   })


});
