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

//Task 4 - Parameters and Arguments 
function calculateShippingCost(weight, location, expedited = false) {
let shipping = {
    "USA": (weight * 0.5) + 5,
    "Canada": (weight * 0.7) + 10
}; //Declaring Shipping Rates

let expeditedFee = 0

if (expedited === true) {
    expeditedFee = 10
} else {
    expeditedFee = 0
} //Setting up expedited fee

let total = (shipping[location]) + expeditedFee
console.log("Shipping Cost:", "$" + total) //Logging cost of shipping with inputs

}

calculateShippingCost(10, "USA", true); 
calculateShippingCost(5, "Canada", false); 

//Task 5 - Returning Values
function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years //Formula for interest
    console.log ("Interest Owed:", "$" + interest.toFixed(2)); //Returning interest payment
};

calculateLoanInterest(1000, 0.05, 3);
calculateLoanInterest(5000, 0.07, 5); 