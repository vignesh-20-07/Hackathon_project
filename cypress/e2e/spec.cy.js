import carWashService from "../support/pages/carWashService";
 
describe("Hackathon", () => {
  beforeEach(()=>{
    //cy.visit('https://www.justdial.com/');
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
   
  })
 
  it("First trial", () => {
    // Visit homepage with geolocation stubbed
    carWashService.visitHomePage(11.097208, 76.990016);
    cy.wait(6000);
    carWashService.clickMaybeLater();
    
  });

 

});
 
