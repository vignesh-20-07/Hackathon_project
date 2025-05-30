import carWashService from "../support/pages/carWashService";
 
describe("Hackathon", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
   
    return false;
  });
 
  it("First trial", () => {
    // Visit homepage with geolocation stubbed
    carWashService.visitHomePage(11.097208, 76.990016);
 
    carWashService.clickMaybeLater();
    
  });
});
 
