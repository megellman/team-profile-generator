class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    getName() {
        return this.name
    };
    getEmail() {
        return this.email
    };
    getRole() {
        return 'Employee'
    }
    
}

module.exports = Employee
// let marla = new Employee("Marla", 6, "marla2cool@gmail.com")

// console.table(marla)
// // Schema
// class Manager extends Employee {
//     constructor(name, id, email, officeNumber){
//         super(name, id, email);
//         this.officeNumber = officeNumber;
//     }
//     getOfficeNumber(){
//         return this.officeNumber
//     }
//     getRole(){
//         return 'Manager'
//     }
// }

