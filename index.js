// Write your solution in this file!
const employee = {
    name: "George",
    streetAddress: "11 Broadway"
}

const updateEmployeeWithKeyAndValue = function(employee, key, value) {
    const newObject = {
        ...employee, 
        [key]: value,
    }
    return newObject
}

const destructivelyUpdateEmployeeWithKeyAndValue = function(employee,key,value) {
    employee[key] = value;
    return employee
}

const deleteFromEmployeeByKey = function(employee,key,value) {
    const newEmployee = {...employee}
    delete newEmployee[key]

    return newEmployee
}

const destructivelyDeleteFromEmployeeByKey = function(employee,key,value) {
    delete employee[key];
    return employee;
}