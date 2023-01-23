/// <reference types="cypress" />

const { table } = require("console")
const { CtrCompleter } = require("ng2-completer")

describe('First suite', ()=>{
   
    it('first test',()=>{
        cy.visit('/')
        cy.contains("Forms").click()
        cy.contains("Form Layouts").click()
        //by tag name
        cy.get('input')

        //by id
        cy.get('#inputEmail1')

        //by class name
        cy.get('.input-full-width')

        //by Attribute name
        cy.get('[placeholder]')

        //by Attribute name and value
        cy.get('[placeholder="Email"]')

        //by Class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')
    
        //by tag name and Attribute with value
        cy.get('input[placeholder="Email"]')

        //by two different attributes
        cy.get('[placeholder="Email"][fullwidth]')

        //by tag name, Attribute with value, ID and Class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
   
        //most recommended by cypress
        cy.get('[data-cy="imputEmail1"]')
    })
   
    it("second test", ()=>{
        cy.visit('/')
        cy.contains("Forms").click()
        cy.contains("Form Layouts").click() 

        cy.get("#inputEmail3")
        .parents("form")
        .find("button")
        .should("contain","Sign in")
        .parents("form")
        .find("nb-checkbox").click()

        cy.contains("nb-card","Horizontal form").find("[type='Email']")
    })

    it("then and wrap methods",()=>{
        cy.visit('/')
        cy.contains("Forms").click()
        cy.contains("Form Layouts").click() 

        // cy.contains("nb-card","Using the Grid").find("[for='inputEmail1']").should('contain',"Email")

        // cy.contains("nb-card","Using the Grid").find("[for='inputPassword2']").should('contain',"Password")

        // cy.contains("nb-card","Basic form").find('[for="exampleInputEmail1"]').should('contain',"Email")

        // cy.contains("nb-card","Basic form").find("[for='exampleInputPassword1']").should('contain',"Password")

        cy.contains("nb-card","Using the Grid").then(firstForm => {
            const emailLabelFirst = firstForm.find("[for='inputEmail1']").text()
            const passwordLabelFirst = firstForm.find("[for='inputPassword2']").text()
            expect(emailLabelFirst).to.equal("Email")
            expect(passwordLabelFirst).to.equal("Password")

            cy.contains("nb-card","Basic form").then(secondForm => {
                const passwordLabelSecond = secondForm.find("[for='exampleInputPassword1']").text()
                
                expect(passwordLabelSecond).to.equal(passwordLabelFirst)

                cy.wrap(secondForm).find("[for='exampleInputPassword1']").should('contain','Password')
    
            })
        })

    })

    it("invoke test",()=>{
        cy.visit('/')
        cy.contains("Forms").click()
        cy.contains("Form Layouts").click()

        //1
        cy.get('[for="exampleInputEmail1"]')
        .should('contain',"Email address")
        .should("have.class","label")
        .and("have.text","Email address")

        //2
        cy.get('[for="exampleInputEmail1"]').then(label => {
            expect(label.text()).to.equal("Email address")
            expect(label).to.have.class("label")
            expect(label).to.have.text("Email address")
        })

        //3
        cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
            expect(text).to.equal("Email address")
        })

        cy.contains("nb-card","Basic form")
            .find("nb-checkbox")
            .click()
            .find(".custom-checkbox")
            .invoke("attr","class")
            // .should("contain","checked")
            .then(classValue =>{
                expect(classValue).to.contain("checked")
            })

        
    })

    it.only("Assert Property",()=>{
        

    })


    it("radio button",()=>{
        cy.visit('/')
        cy.contains("Forms").click()
        cy.contains("Form Layouts").click()

        cy.contains("nb-card","Using the Grid").find("[type='radio']")
        .then(radioButtons =>{

            cy.wrap(radioButtons)
            .first()
            .check({force:true})
            .should("be.checked")

            cy.wrap(radioButtons)
            .eq(1)
            .check({force:true})

            cy.wrap(radioButtons)
            .first()
            .should("not.be.checked")

            cy.wrap(radioButtons)
            .eq(2)
            .should("be.disabled")
        })
    
    })

    it("checkboxes",()=>{
        cy.visit('/')
        cy.contains("Modal & Overlays").click()
        cy.contains("Toastr").click()

        cy.get("[type='checkbox']").eq(0).click({force:true})
        cy.get("[type='checkbox']").eq(1).check({force:true})
    
    })

    it("dropdowns",()=>{
        cy.visit("/")
        // cy.get("nav nb-select").click()
        // cy.get(".options-list").contains("Dark").click()
        // cy.get("nav nb-select").should("contain","Dark")
        // cy.get("nb-layout-header nav").should("have.css","background-color", "rgb(34, 43, 69)")

        cy.get("nav nb-select").then(dropDown =>{
            cy.wrap(dropDown).click()
            cy.get('.options-list nb-option').each((listItem,index) =>{
                const itemText = listItem.text().trim()
                const colors = {
                    "Light": "rgb(255, 255, 255)",
                    "Dark": "rgb(34, 43, 69)",
                    "Cosmic":"rgb(50, 50, 89)",
                    "Corporate":"rgb(255, 255, 255)"
                }

                cy.wrap(listItem).click()
                cy.wrap(dropDown).should("contain",itemText)
                cy.get("nb-layout-header nav").should("have.css","background-color", colors[itemText])
                if(index < 3){
                    cy.wrap(dropDown).click()
                }
                
            })
        })

    })

    it("tables",()=>{
        cy.visit("/")
        cy.contains("Tables & Data").click()
        cy.contains("Smart Table").click()

        //first way
        cy.get("tbody").contains('tr',"Larry").then(tableRow =>{
            cy.wrap(tableRow).find(".nb-edit").click()
            cy.wrap(tableRow).find("[placeholder='Age']").type("25")
            cy.wrap(tableRow).find(".nb-checkmark").click()
            cy.wrap(tableRow).find("td").eq(6).should("contain","25")
        })

        //second way
        cy.get("thead").find(".nb-plus").click()
        cy.get("thead").find("tr").eq(2).then(tableRow =>{
            cy.wrap(tableRow).find("[placeholder='First Name']").type("Nika")
            cy.wrap(tableRow).find("[placeholder='Last Name']").type("Fartenadze")
            cy.wrap(tableRow).find(".nb-checkmark").click()
        })

        cy.get("tbody tr").first().find("td").then( tableColumns =>{
            cy.wrap(tableColumns).eq(2).should("contain","Nika")
            cy.wrap(tableColumns).eq(3).should("contain","Fartenadze")
        })

        //third way
        const  age = [20,30,200]
        cy.wrap(age).each( age =>{
            cy.get("thead [placeholder='Age']").clear().type(age)
            cy.wait(500)
            cy.get("tbody tr").each( tableRow =>{
                if(age == 200){
                    cy.wrap(tableRow).should("contain","No data found")
                }else{
                    cy.wrap(tableRow).find("td").eq(6).should("contain",age)
                }
            })
        }) 

    })
    it("tooltip",() => {
        cy.visit("/")
        cy.contains("Modal & Overlays").click()
        cy.contains("Tooltip").click()

        cy.contains("nb-card","Colored Tooltips").contains("Default").click()
        cy.get("nb-tooltip").should("contain","This is a tooltip")

    })

    it("dialog box",()=>{
        cy.visit("/")
        cy.contains("Tables & Data").click()
        cy.contains("Smart Table").click()

        //first way
        // cy.get("tbody tr").first().find(".nb-trash").click()
        // cy.on("window:confirm",(confirm)=>{
        //     expect(confirm).to.equal("Are you sure you want to delete?")
        // })

        //second way
        // const stub = cy.stub()
        // cy.on("window:confirm",stub)
        // cy.get("tbody tr").first().find(".nb-trash").click().then(()=>{
        //     expect(stub.getCall(0)).to.be.calledWith("Are you sure you want to delete?")
        // })

        //third way
        cy.get("tbody tr").first().find(".nb-trash").click()
        cy.on("window:confirm",()=> false)
    })
})

