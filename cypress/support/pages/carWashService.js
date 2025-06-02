// class CarWashService {
//     visitHomePage(latitude, longitude) {
//       cy.visit("https://www.justdial.com/", {
//         onBeforeLoad({ navigator }) {
//           cy.stub(navigator.geolocation, "getCurrentPosition")
//             .callsArgWith(0, { coords: { latitude, longitude } });
//         },
//       });
   
//       cy.wait(5000);
//     }
   
//     clickMaybeLater() {
//       cy.get('.maybelater > .jsx-c21ded63fbf3c5d8')
//         .should("be.visible")
//         .click();
//     }
   
    
//   }
   
//   export default new CarWashService();