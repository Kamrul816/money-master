// handle expenses button event 
document.getElementById('calculation-button').addEventListener('click',function(){
    
    // get food amount expenses
     const foodInput = document.getElementById('food-input');
     const foodAmount = foodInput.value;
     console.log(foodAmount);
     const expensesTotal = document.getElementById('expenses-total');
     expensesTotal.innerText = foodAmount;

    // clear the food input field 
    foodInput.value = '';
});

// handle expenses button event
document.getElementById('calculation-button').addEventListener('click',function(){
    
    // get rent amount expenses
    const rentInput = document.getElementById('rent-input');
    const rentAmount = rentInput.value;
    console.log(rentAmount);
    const expensesTotal = document.getElementById('expenses-total');
    expensesTotal.innerText = rentAmount;

    // clear the food input field 
    rentInput.value = '';   
});

// handle expenses button event 
document.getElementById('calculation-button').addEventListener('click',function(){
    
    // get clothes amount expenses
     const clothesInput = document.getElementById('clothes-input');
     const clothesAmount = clothesInput.value;
     console.log(clothesAmount);
     const expensesTotal = document.getElementById('expenses-total');
     expensesTotal.innerText = clothesAmount;

    // clear the food input field 
    clothesInput.value = '';
});

document.getElementById('calculation-button').addEventListener('click',function(){
    const expensesTotal = foodAmount + rentAmount + clothesAmount;
    console.log(expensesTotal);

})
