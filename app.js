/*----------------------------------Call the Calculate Button -------------------------------------*/
document.getElementById('click-calculate').addEventListener('click',function(){
    firstCal();
});
/*---------------------------------------Use a function------------------------------------------*/
function firstCal(){
    /*-------------------------------Call Food , rent &  cloth--------------------------------*/
    const food = document.getElementById('total-food').value;
    const rent = document.getElementById('total-rent').value;
    const cloth = document.getElementById('total-cloth').value;
    /*---------------------------If Else Condition Use for food , rent & cloth-------------------------------------*/
    if(food<0 || food.length==0){
        document.body.style.display=alert('please enter a positive number in food field');
    }
    else if(rent<0 || rent.length==0){
        document.body.style.display=alert('please enter a positive number in rent field');
    }
    else if(cloth<0 || cloth.length==0){
        document.body.style.display=alert('please enter a positive number in cloth field');
    }
    else if(food>0 || rent>0 || cloth>0){
        const totalCalculate = parseFloat(food) + parseFloat(rent) + parseFloat (cloth);
        const totalExpenses  = document.getElementById('total-expenses');
        totalExpenses.innerText = totalCalculate;
        const totalIncome = document.getElementById('total-income').value;
        const totalIncomeCon = parseFloat(totalIncome);
        /*--------------------Nested If Else Condition Use for  Total Income & Current Balance----------------------*/
        if (totalIncome.length==0){
            document.body.style.display=alert('please enter a positive number in Income field');
        }
        else if(totalIncomeCon<totalCalculate){
            document.body.style.display=alert('Your salary should be more than the total cost. Then you can see that you have the current money');
        }
        else{
            const currentBalance = document.getElementById('current-balance');
            const balance = totalIncomeCon - totalCalculate;
            currentBalance.innerText = balance;
        }
    }
}
/*----------------------------------Call the Save Button -------------------------------------*/
document.getElementById('click-save').addEventListener('click',function(){
    /* Call total income */
    const totalIncome = document.getElementById('total-income').value;
    const totalIncomeCon = parseFloat(totalIncome);
    /* Call Current Balance */
    const currentBalance = document.getElementById('current-balance').innerText;
    const currentBalanceCon = parseFloat(currentBalance);

    const inputSaveing = document.getElementById('input-saveing').value;
    const saveingCalculation = parseFloat(inputSaveing)/100 * totalIncomeCon;
    const totalSaveing = document.getElementById('total-saving');
     /*-------------------------If else Use for current Balance and saveing Calculation-----------------------------*/
    if(totalIncomeCon<500){
        document.body.style.display=alert('You Total income must be grater than 500 taka. Than you can save your money');
    }
    else if(saveingCalculation>0  ){
        totalSaveing.innerText = saveingCalculation;
        if(currentBalanceCon>=saveingCalculation){
            const remainingBalance = document.getElementById('total-balance');
            const totalBalance = currentBalanceCon - saveingCalculation;
            remainingBalance.innerText = totalBalance;
        }
        else{
            document.body.style.display=alert('remaining Balance is nagetive not allow');
        }
    }  
});
/*----------------------------------Call the Reset Button -------------------------------------*/
document.getElementById('click-reset').addEventListener('click',function(){
    /* Call All input field*/
    const food = document.getElementById('total-food');
    const rent = document.getElementById('total-rent');
    const cloth = document.getElementById('total-cloth');
    const totalIncome = document.getElementById('total-income');
    const inputSaveing = document.getElementById('input-saveing');
    /*--------------------------When click Reset button the input field is blank----------------------------------*/
    food.value = '';
    rent.value='';
    cloth.value='';
    totalIncome.value='';
    inputSaveing.value='';
})

