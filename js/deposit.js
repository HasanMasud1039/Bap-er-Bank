document.getElementById('btn-deposite').addEventListener('click',function(){
    //step 2: get deposite amount from input
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    //isNaN
          depositeField.value =''; 
//NaN step
    if(isNaN(newDepositeAmount)){
        alert("Please provide a valid number");
        return;
    }

    //step 3:: get the current amount
    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);
    //step:4: add numbers to set total deposite
    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;

    depositeTotalElement.innerText = currentDepositeTotal;

    //step 5:: balanced total
    const balanceTotalElement = document.getElementById('balance-total');
        const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step 6: calculate new deposite
    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    //step 7:: subtract withdraw money
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    //step::** clear deposit field
    depositeField.value =''; 
})