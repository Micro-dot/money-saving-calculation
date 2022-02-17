document.getElementById('click-calculate').addEventListener('click',function(){
    const food = document.getElementById('total-food').value;
    const rent = document.getElementById('total-rent').value;
    const cloth = document.getElementById('total-cloth').value;
    if(food<0){
        document.body.style.display=alert('please enter a positive number in food field');
    }
    else if(rent<0){
        document.body.style.display=alert('please enter a positive number in rent field');
    }
    else if(cloth<0){
        document.body.style.display=alert('please enter a positive number in cloth field');
    }

    else if(food>0 || rent>0 || cloth>0){
        const totalCalculate = parseFloat(food) + parseFloat(rent) + parseFloat (cloth);
        const totalExpenses  = document.getElementById('total-expenses');
        totalExpenses.innerText = totalCalculate;

        const totalIncome = document.getElementById('total-income').value;
        const totalIncomeCon = parseFloat(totalIncome);

        if(totalIncomeCon<totalCalculate){
            document.body.style.display=alert('Your salary should be more than the total cost. Then you can see that you have the current money');
        }
        else{
            const currentBalance = document.getElementById('current-balance');
            const balance = totalIncomeCon - totalCalculate;
            currentBalance.innerText = balance;
        }
    }
});
document.getElementById('click-save').addEventListener('click',function(){
    const currentBalance = document.getElementById('current-balance').innerText;
    const currentBalanceCon = parseFloat(currentBalance);
    
    const inputSaveing = document.getElementById('input-saveing').value;
    const saveingCalculation = parseFloat(inputSaveing)/100 * currentBalanceCon;
    const totalSaveing = document.getElementById('total-saving');
    
    if(currentBalanceCon<500){
        document.body.style.display=alert('You Current balance must be grater than 500 taka. Than you can save your money');
    }
    else if(saveingCalculation>0){
        totalSaveing.innerText = saveingCalculation;
        const remainingBalance = document.getElementById('total-balance');
        const totalBalance = currentBalanceCon - saveingCalculation;
        remainingBalance.innerText = totalBalance;
    }  
});
document.getElementById('click-reset').addEventListener('click',function(){
    const food = document.getElementById('total-food');
    const rent = document.getElementById('total-rent');
    const cloth = document.getElementById('total-cloth');
    const totalIncome = document.getElementById('total-income');
    const inputSaveing = document.getElementById('input-saveing');
    food.value = '';
    rent.value='';
    cloth.value='';
    totalIncome.value='';
    inputSaveing.value='';
})

