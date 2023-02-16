// function
function getInputValue(){
    const foodInput = document.getElementById("food-input").value;
    const rentInput = document.getElementById("rent-input").value;
    const clothesInput = document.getElementById("clothes-input").value;
    if(isNaN(foodInput) && isNaN(rentInput) && isNaN(clothesInput)){
        alert ("Input Valid Number.")
    }
    else if(foodInput == '' || foodInput <= 0 ||
    rentInput == '' || rentInput <= 0 ||
    clothesInput == '' || clothesInput <= 0
    ){
        alert ("Input Valid Number.")
    }
    else{
        const totalSum = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput);
        return totalSum;
    }
}
function getIncomeInputValue(){
    const incomeInput = document.getElementById("income-input").value;
    if(isNaN(incomeInput)){
        alert ("Input Valid Number.")
    }
    else if(incomeInput == '' || incomeInput <= 0){
        alert ("Income Chara vaat nai.")
    }
    else{
        return incomeInput;
    }
    incomeInput = '';
}
function getSaveInputValue(){
    const saveInput = document.getElementById("save-input").value;
    if(isNaN(saveInput)){
        alert ("Input Valid Number.")
    }
    else if(saveInput == '' || saveInput <= 0){
        alert ("Input Valid Number.")
    }
    else{
        return saveInput;
    }
}

document.getElementById("total-sum").addEventListener("click", function(){
    const totalSum = getInputValue();
    const TotalExpenses = document.getElementById("total-expenses");
    TotalExpenses.innerText = totalSum;
    const incomeInputValue = getIncomeInputValue();
    const leftBalance = parseFloat(incomeInputValue) - parseFloat(totalSum);
    if(leftBalance <= 0){
        alert ("Tumar income er cheye Expense Beshi Hoye geche.")
    }
    else{
        const balance = document.getElementById("balance");
        balance.innerText = leftBalance;
    }  
})
document.getElementById("save-btn").addEventListener("click", function(){
    const incomeValue = getIncomeInputValue();
    const balance = document.getElementById("balance").innerText;
    const remainingBalance = document.getElementById("remaining-balance");
    const saveValue = document.getElementById("save-value");
    const saveInputValue = getSaveInputValue();
    const saveAmount = Math.round((saveInputValue/100) * incomeValue);
    if(saveAmount > balance){
        alert ("Tumar balance kom, ato saving kivabe korba?")
    }
    else{
        saveValue.innerText = saveAmount;
        const remainingBalanceValue = parseFloat(balance) - saveAmount;
        remainingBalance.innerText = remainingBalanceValue;
    }
})





    // const foodInput = document.getElementById("food-input").value;
    // const rentInput = document.getElementById("rent-input").value;
    // const clothesInput = document.getElementById("clothes-input").value;
    // const totalSum = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput);
    // return totalSum;