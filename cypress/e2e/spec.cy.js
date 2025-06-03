import carWashService from "../support/pages/carWashService";
import fitnessSubmenu from "../support/pages/fitnessSubmenu";
import freeListing from "../support/pages/freeListing";

describe.only("Car Wash Service searching and sorting", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  let testdata;

  before(() => {
    cy.fixture('example').then((data) => {
     testdata = data;
    });
  });
  

  it("Visiting the site", () => {
    carWashService.visitHomePage(11.097208, 76.990016);
    carWashService.clickMaybeLater();
    
  });

  it('Navigate to page',()=>{
    carWashService.navigateToPage(testdata.service);
  })
   it("Sort with ratings",()=>{
    carWashService.ratings();
   })
   it("sortabove20",()=>{
    carWashService.sortabove20();
   })

   it("Check for correct location after sorting" , ()=>{
   
    
     carWashService.verifyCityContains(testdata.city);      
  
   })

 
});

