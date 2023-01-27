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
    validateEmail(){
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if(regex.test(this.email)){
            return true
        } else {
            throw new Error('Email invalid. Enter a valid email.')
        }
    }
}

module.exports = Employee

