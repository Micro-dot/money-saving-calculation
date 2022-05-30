// Calculate Button 
document.getElementById('click-calculate').addEventListener('click', function () {
    const foodCost = document.getElementById('total-food').value;
    const rentCost = document.getElementById('total-rent').value;
    const clothCost = document.getElementById('total-cloth').value;

    const totalExpenses = document.getElementById('total-expenses');

    const inputIncome = document.getElementById('total-income').value
    const incomeCon = parseFloat(inputIncome);

    const balance = document.getElementById('current-balance')

    // Condition Check 

    if ((isNaN(inputIncome)) || inputIncome < 0) {
        document.body.style.display = alert('Please give your income in positive number format')
    }
    else if ((isNaN(foodCost)) || foodCost < 0) {
        document.body.style.display = alert('Please give your food cost in positive number format')
    }
    else if ((isNaN(rentCost)) || rentCost < 0) {
        document.body.style.display = alert('Please give your rent cost in positive number format')
    }
    else if ((isNaN(clothCost)) || clothCost < 0) {
        document.body.style.display = alert('Please give your cloth cost in positive number format')
    }
    else if (incomeCon < totalExpenses) {
        document.body.style.display = alert('Your income must be greater than your total expenses.')
    }
    else {
        const totalCost = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);

        totalExpenses.innerText = totalCost

        const subBalance = incomeCon - totalCost;
        balance.innerText = subBalance;

    }
})

// Saving Update 

document.getElementById('click-save').addEventListener('click', function () {

    const save = document.getElementById('input-saveing').value;
    const inputIncome = document.getElementById('total-income').value
    const incomeCon = parseFloat(inputIncome);

    const savingAmount = document.getElementById('total-saving');
    const savingCal = parseFloat(save) / 100 * incomeCon;
    savingAmount.innerText = savingCal;

    const remainingBalance = document.getElementById('total-balance');
    const balance = document.getElementById('current-balance').innerText;
    const balanceCon = parseFloat(balance);
    const remainingBalanceTotal = balanceCon - savingCal;
    remainingBalance.innerText = remainingBalanceTotal;

    // Saving Condition Check 

    if (balanceCon < savingCal) {
        document.body.style.display = alert('Your balance must be greater than savings.')
    }
    else if (isNaN(save) || save < 0) {
        document.body.style.display = alert('Please input positive number.')
    }
    else {
        const savingCal = parseFloat(save) / 100 * incomeCon;
        savingAmount.innerText = savingCal;
        const remainingBalanceTotal = balanceCon - savingCal;
        remainingBalance.innerText = remainingBalanceTotal;
    }


})