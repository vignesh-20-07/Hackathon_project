import carWashService from "../support/pages/carWashService";
import fitnessSubmenu from "../support/pages/fitnessSubmenu";

describe("Hackathon", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {

    return false;
  });

  it("First trial", () => {
    // Visit homepage with geolocation stubbed
    carWashService.visitHomePage(11.097208, 76.990016);

    // carWashService.clickMaybeLater();

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
