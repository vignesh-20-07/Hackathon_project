class fitnessSubMenu {

    visit() {
        cy.visit('https://www.justdial.com');
    }

    gymNavigation() {
        cy.get('[href="/Coimbatore/Gyms-in-Chil-Sez-Road-Saravanampatti/nct-11575244"] > .home_hotkeyimg')
            .click();
    }

    verifyUrl() {
        cy.url().should('include', 'Gyms');
    }

    submenuVerification() {
        cy.get('.jsx-8e2185bd5f884df4 .font15').should('be.visible');
    }

    subItemsFetching() {
        cy.get('.jsx-8e2185bd5f884df4 .font15')
            .then(($elements) => {
                const submenu = $elements.map((index, el) => Cypress.$(el).text()).get();
                cy.wrap(submenu).as('submenuArray');
            });

        cy.get('@submenuArray').then((submenu) => {
            expect(submenu).to.have.length.above(0);
            cy.log(`Total submenu items: ${submenu.length}`);

            submenu.forEach((data, index) => {
                cy.log(`Item ${index + 1}: ${data}`);
            });
        });
    }

}

export default new fitnessSubMenu();