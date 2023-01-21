export function printName(age){
    console.log(age)
}

export class CustomerDetails {

    printFirstName(firstName){
        console.log(firstName)
    }
    /**
     * Method will print last name
     * @param {string} lastName 
     */
    printLastName(lastName){
        console.log(lastName)
    }
}
export const customerDetails = new CustomerDetails()

