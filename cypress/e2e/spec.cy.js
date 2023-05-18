import AppointmentPage from "../pageObjects/appointment.page";
import HistoryPage from "../pageObjects/history.page";
import ConfirmationPage from "../pageObjects/confirmation.page";

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

      it("Scenario 1 - Make an Appointment", () => {
      // v. Set the following values:
        // 1. Facility - Seoul CURA Healthcare Center
        AppointmentPage.facilitySelector.select("Seoul CURA Healthcare Center");

        // 2. Check - Apply for hospital readmission
        AppointmentPage.applyCheckbox.click();

        // 3. Select - Medicaid
        AppointmentPage.medicaidRadiobutton.click();

        // 4. Set Date value by using the widget - 30
        AppointmentPage.visitDateField.click();
        AppointmentPage.selectDate.contains("30").click();

        // 5. Set comment - CURA Healthcare Service
        AppointmentPage.commentField.type("CURA Healthcare Service");
        
        // 6. Click - Book Appointment
        AppointmentPage.bookAppointmentButton.click();

      // vi. Validate that previously set values are correct
      ConfirmationPage.facility.should("contain.text","Seoul CURA Healthcare Center");
      ConfirmationPage.appliedForReadmission.should("contain.text","Yes");
      ConfirmationPage.healthcareProgram.should("contain.text","Medicaid");
      ConfirmationPage.visitDate.should("contain.text","30/05/2023");
      ConfirmationPage.comment.should("contain.text","CURA Healthcare Service");

      });

      it("Scenario 2 - Appointment history empty", () => {
        // Click - Menu/Stack/Burger icon
        AppointmentPage.menu.click();
        // Validate that the sidebar is active
        AppointmentPage.sidebar.should("have.class", "active");
        // Click - History
        AppointmentPage.history.click();
        // Validate that - No appointment - is visible
        HistoryPage.historyInfo.should("contain.text", "No appointment.");

      });
    });
});

