const { onDatePickerPage } = require("../support/page_objects/datePickerPage")
const { onFormLayoutsPage } = require("../support/page_objects/formLayoutsPage")
const { navigateTo } = require("../support/page_objects/navigationPage")

describe("Test with Page Object Pattern",()=>{
    beforeEach("open application",()=>{
        cy.visit('/')
    })

    it("verify navigation",()=>{
        navigateTo.formLayoutsPage()
        navigateTo.datePickerPage()
        navigateTo.smartTablePage()
        navigateTo.toasterPage()
        navigateTo.toolTipPage()
    })
    it("should submit forms and pick date",()=>{
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineForm("nika","example@Gmail.com")
        onFormLayoutsPage.submitBasicForm("nika@gmail.com","1231231")
        navigateTo.datePickerPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(1)
        onDatePickerPage.selectDatePickerWithRange(2,4)
    })
})

