export class FormLayoutsPage{
    submitInlineForm(name,email){
        cy.contains("nb-card","Inline form").find("form").then( form => {
            cy.wrap(form).find("[placeholder='John Doe']").type(name)
            cy.wrap(form).find("[placeholder='Email']").type(email)
            cy.wrap(form).find("[type='checkbox']").check({force: true})
            cy.wrap(form).submit()
        })
        
    }
    submitBasicForm(email,password){
        cy.contains("nb-card","Inline form").find("form").then( form => {
            cy.wrap(form).find("[placeholder='Email']").type(email)
            cy.wrap(form).find("[placeholder='Password']").type(password)
            cy.wrap(form).find("[type='checkbox']").check({force: true})
            cy.wrap(form).submit()
        })
    }
}

export const onFormLayoutsPage = new FormLayoutsPage()