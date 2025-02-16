// Task 1 - Function Declaration
function calculateInvoice(subtotal, taxRate, discount) {
    total = (subtotal + (subtotal * taxRate)) - discount //Formula for calculating invoice
    console.log("Total Invoice:","$" + total) //Logging invoice
};

calculateInvoice(100, 0.08, 5); 
calculateInvoice(500, 0.1, 20); 