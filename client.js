$(document).ready(readyNow);

const budget = 25000; //my set budget range

function readyNow() {
    //display budget
    //target budgetOut by id
    let el = $('#budgetOut');
    el.empty();
    el.append(budget);
}
