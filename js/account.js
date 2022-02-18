// handle expenses button event
document.getElementById('calculation-button').addEventListener('click',function(){
    
    // get food amount expenses 
    const expensesInput = document.getElementById('food-input');
    const expensesAmount = expensesInput.value;
    console.log(expensesAmount);
    const expensesTotal = document.getElementById('expenses-total');
    expensesTotal.innerText = expensesAmount;

    // clear the food input field 
    expensesInput.value = '';
});
// handle expenses button event
document.getElementById('calculation-button').addEventListener('click',function(){
    // get rent amount expenses
    const expensesInput = document.getElementById('rent-input');
    const expensesAmount = expensesInput.value;
    console.log(expensesAmount);   
});
// handle expenses button event
document.getElementById('calculation-button').addEventListener('click',function(){
    // get clothes amount expenses
     const expensesInput = document.getElementById('clothes-input');
     const expensesAmount = expensesInput.value;
     console.log(expensesAmount);
});
