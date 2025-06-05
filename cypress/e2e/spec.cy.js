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

  it('Navigate to the car wash services page',()=>{
    carWashService.navigateToPage();
  })

  it('Sort with Ratings',()=>{
    carWashService.ratings();
  })

  it('Sort with votings',()=>{
    carWashService.sortings();
  })

  it('Service Name',()=>{
    carWashService.serviceName()
  })
  

});
 
