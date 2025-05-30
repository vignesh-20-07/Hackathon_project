class fitnessSubMenu {
    gymNavigation() {
        cy.get('[href="/Coimbatore/Gyms-in-Chil-Sez-Road-Saravanampatti/nct-11575244"] > .home_hotkeyimg')
            .click();
    }

    subItemsFetching() {
        const submenu = [];
        cy.get('.jsx-8e2185bd5f884df4 .font15')
            .each(($el) => {
                cy.wrap($el).invoke('text').then((text) => {
                    submenu.push(text);
                });
            });
        cy.wrap(submenu).each((data) => {
            cy.log(data);
        })
    }

}

export default new fitnessSubMenu();