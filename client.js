$(document).ready(readyNow);

const budget = 25000; //my set budget range
let purchases = [];

function addPurchase() {
    console.log('in addPurchase'); 
    //get user input and create a new object:
    let newPurchase = {
        name: $('#purchaseNameIn').val(),
        price: $('#purchasePriceIn').val()
    }
    //push the new purchase into the array:
    purchases.push(newPurchase);
    //empty inputs:
    $('#purchaseNameIn').val(''); 
    $('#purchasePriceIn').val('');
    //calculate remainingBudget
    calculateRemainingBudget(); 
    //update the DOM
    displayPurchases();

}

function calculateRemainingBudget() {
    console.log('in calculateRemainingBudget');
    //loop thru purchases array
    let totalPrices = 0;
    for(let i = 0; i < purchases.length; i++){
    //for each purchase, add up total of all prices
    totalPrices += Number(purchases[i].price); 
    }
    console.log('totalPrices:', totalPrices);
    //subtract totalPrices from the budget for the remainingBudget:
    const remainingBudget = budget - totalPrices;
    //display remainingBudget
    let el = $('#remainingBudgetOut');
    el.empty();
    el.append(remainingBudget);
}

function displayPurchases() {
    console.log('in displayPurchases');
    //target output by ID
    let el = $('#purchasesOut');
    //empty:
    el.empty();
    //loop through purchases array:
    for(purchase of purchases) {
        //for each purchases, create a list item
        el.append(`<li>` + purchase.name + `: $` + purchase.price + `</li>`);
    }
}

function readyNow() {
    //display budget
    //target budgetOut by id:
    let el = $('#budgetOut');
    el.empty();
    el.append(budget);
    //handle click event:
    $('#addPurchaseButton').on('click', addPurchase); 
    //init display
    calculateRemainingBudget();
}
