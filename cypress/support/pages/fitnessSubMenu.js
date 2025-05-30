class fitnessSubMenu {
    gymNavigation() {
        cy.get('[href="/Coimbatore/Gyms-in-Chil-Sez-Road-Saravanampatti/nct-11575244"] > .home_hotkeyimg').click();
    }
}

export default new fitnessSubMenu();