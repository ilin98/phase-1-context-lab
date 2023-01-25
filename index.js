/* Your Code Here */
function createEmployeeRecord (employee) {
    class NewEmployee{
        constructor() {
            this.firstName = employee[0],
            this.familyName = employee[1],
            this.title = employee[2],
            this.payPerHour = employee[3],
            this.timeInEvents = [],
            this.timeOutEvents = []
       }
    }
    return new NewEmployee
}

function createEmployeeRecords (array){
    const employeesObjArray = array.map(employee => createEmployeeRecord(employee));
    return employeesObjArray
}


function createTimeInEvent(dateStamp) {
    this.timeInEvents.push({
        type: "TimeIn",
        hour: Number(dateStamp.slice(11)),
        date: dateStamp.slice(0, 10)
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: Number(dateStamp.slice(11)),
        date: dateStamp.slice(0, 10)
    })
    return this
}

function hoursWorkedOnDate (date) {
    if (this.timeOutEvents.find(el => el.date === date).date === this.timeInEvents.find(el => el.date === date).date) {
        return (this.timeOutEvents.find(el => el.date === date).hour - this.timeInEvents.find(el => el.date === date).hour)/100
    }
}

function wagesEarnedOnDate (date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName (srcArray, firstName) {
    return srcArray.find(el => el.firstName === firstName)
}

function calculatePayroll (employeeArray) {
    let total = 0
    for (let i = 0; i < employeeArray.length; i++) {
        total += allWagesFor.call(employeeArray[i])
    }
    return total
}
