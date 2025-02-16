// Task 1 - Function Declaration
function calculateInvoice(subtotal, taxRate, discount) {
    total = (subtotal + (subtotal * taxRate)) - discount //Formula for calculating invoice
    console.log("Total Invoice:","$" + total) //Logging invoice
};

calculateInvoice(100, 0.08, 5); 
calculateInvoice(500, 0.1, 20); 

//Task 2 - Function Expression
const calculateHourlyWage = function (salary, hoursPerWeek) {
    hourlyWage = salary / (hoursPerWeek * 52) //Formula for calculating hourly wage
    let rounded = hourlyWage.toFixed(2); //Rounding so it stops at two decimal points
    console.log("Hourly Wage:", "$" + rounded)
};

calculateHourlyWage(52000, 40); 
calculateHourlyWage(75000, 35); 