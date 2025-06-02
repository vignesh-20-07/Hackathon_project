import carWashService from "../support/pages/carWashService";
import fitnessSubmenu from "../support/pages/fitnessSubmenu";
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


describe('Free Listing Registration', () => {
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

  it('Input Box Visibility', function () {
    freeListing.visit();
    freeListing.clickMaybeLater();
    freeListing.clickFreeListing();
    freeListing.inputboxVisible();

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
  

  it('Successful Registration For Valid Phone' , () =>{
    freeListing.visit();
    freeListing.clickMaybeLater();
    freeListing.clickFreeListing();
    cy.get('@testData').then((data) => {
      freeListing.enterPhoneNumber(data.phonenumber);
    });
   
    freeListing.verifyOtpModalAppears();
   })


});

