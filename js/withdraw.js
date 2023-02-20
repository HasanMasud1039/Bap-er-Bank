document.getElementById('btn-withdraw').addEventListener('click',function(){
    //step 2: get deposite amount from input
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
      withdrawField.value =''; 
//NaN step
    if(isNaN(newWithdrawAmount)){
        alert("Please provide a valid number");
        return;
    }

    //step 3:: get the current amount
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
   

    //step 5:: balanced total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    if(newWithdrawAmount > previousBalanceTotal){
        alert("Baap er bank e taka nai.");
        return;
    }

     //step:4: add numbers to set total deposite
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotalElement.innerText = currentWithdrawTotal;
    //step 6: calculate new deposite
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    //step 7:: subtract withdraw money
    
    //step::** clear deposit field
    withdrawField.value =''; 
})