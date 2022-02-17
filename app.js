document.getElementById('click-calculate').addEventListener('click',function(){
    const food = document.getElementById('total-food').value;
    const rent = document.getElementById('total-rent').value;
    const cloth = document.getElementById('total-cloth').value;
    if(food<0 || rent<0 || cloth<0){
        document.body.style.display=alert('please enter a positive number');
    }
    else{
        const totalCalculate = parseInt(food) + parseInt(rent) + parseInt (cloth);
        const totalExpenses  = document.getElementById('total-expenses');
        totalExpenses.innerText = totalCalculate;

        const totalIncome = document.getElementById('total-income').value;
        const totalIncomeCon = parseInt(totalIncome);
        
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
    totalSaveing.innerText = saveingCalculation;

    const remainingBalance = document.getElementById('total-balance');
    const totalBalance = currentBalanceCon - saveingCalculation;
    
    remainingBalance.innerText = totalBalance;
});

