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

//Task 3 - Arrow Function
const calculateLoyaltyDiscount = (amount, years) => {
    if (years >= 5) {
        price = amount * (1 - 0.15) //15% discount
    } else { if (years >= 3) {
        price = amount * (1 - 0.1) //10% discount
    } else {
        price = amount * (1 - 0.05) //5% discount
    }} //Gives customer 15%, 10%, or 5% discount based on how long loyalty is 
    console.log("Discounted Price:", "$" + price)
}

calculateLoyaltyDiscount(100, 6);
calculateLoyaltyDiscount(200, 2);
