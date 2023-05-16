describe("Elements", () => {
  context("Text Box Scenarios", () => {
      beforeEach(() => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
        //Click - Make Appointment
        cy.get("#btn-make-appointment").click();
        
        //Set username and password fields with the demo account credentials
        //copies and pastes username from Demo account
        cy.get('input[aria-describedby="demo_username_label"]').invoke('val').then(valueToCopy => {
          cy.get('input#txt-username').clear().type(valueToCopy);
        });
        //copies and pastes password from Demo account
        cy.get('input[aria-describedby="demo_password_label"]').invoke('val').then(valueToCopy => {
          cy.get('input#txt-password').clear().type(valueToCopy);
        });

        //Click - Login
        cy.get("#btn-login").click();

      });

      it.only("Scenario 1 - Make an Appointment", () => {
      // v. Set the following values:
        // 1. Facility - Seoul CURA Healthcare Center
        cy.get("#combo_facility").select("Seoul CURA Healthcare Center");
        // 2. Check - Apply for hospital readmission
        cy.get("#chk_hospotal_readmission").click();
        // 3. Select - Medicaid
        cy.get("#radio_program_medicaid").click();
        // 4. Set Date value by using the widget - 30
        cy.get(".glyphicon-calendar").click();
        cy.get('td.day:contains("30")').click({ multiple: true });
        cy.get("#to-top").click(); //so the calendar widget closes and comment field is available
        // 5. Set comment - CURA Healthcare Service
        cy.get("#txt_comment").type("CURA Healthcare Service");
        // 6. Click - Book Appointment
        cy.get("#btn-book-appointment").click();
        
      // vi. Validate that previously set values are correct

      });

      it("Scenario 2 - Appointment history empty", () => {
      });


    });
  
});
