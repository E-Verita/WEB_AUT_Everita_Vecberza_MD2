class AppointmentPage {

    static get facilitySelector(){
        return cy.get("#combo_facility");
    }
    
    static get applyCheckbox(){
        return cy.get("#chk_hospotal_readmission");
    }

    static get medicaidRadiobutton(){
        return  cy.get("#radio_program_medicaid");
    }

    static get visitDateField(){
        return cy.get(".glyphicon-calendar");
    }

    static get selectDate(){
        return cy.get('.day:not(.old)'); //only currrent month
    }

    static get commentField(){
        cy.get("#to-top").click(); //so the calendar widget closes and comment field is available*/
        return cy.get("#txt_comment");
    }

    static get bookAppointmentButton(){
        return cy.get("#btn-book-appointment");
    }

    static get menu(){
        return cy.get("#menu-toggle");
    }

    static get sidebar(){
        return cy.get("#sidebar-wrapper");
    }

    static get history(){
        return cy.get('a[href="history.php#history"][onclick*="menu-close"]');
    }


}

export default AppointmentPage;