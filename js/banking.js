function getInput(inputId) {
    debugger
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputAmmount = parseFloat(inputText);

    inputField.value = '';
    return inputAmmount;
}
function updateTotal(updateId, newdepositAmmount) {
    const depositTotal = document.getElementById(updateId);
    const priviousDepositText = depositTotal.innerText;
    const priviousDepositAmmont = parseFloat(priviousDepositText)
    depositTotal.innerText = priviousDepositAmmont + newdepositAmmount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balace-input');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmmount = parseFloat(balanceTotalText)
    return balanceTotalAmmount;
}
function updateBalance(ammount, isAdd) {
    const balanceTotal = document.getElementById('balace-input');
    const balanceTotalAmmount = getCurrentBalance()
    if (isAdd == true) {
        balanceTotal.innerText = balanceTotalAmmount + ammount;
    } else {
        balanceTotal.innerText = balanceTotalAmmount - ammount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const newdepositAmmount = getInput('deposit-input')
    if (newdepositAmmount > 0) {
        updateTotal('deposit-total', newdepositAmmount);
        updateBalance(newdepositAmmount, true)
    }
});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInputAmmount = getInput('withdraw-input')
    const currentBalance = getCurrentBalance()
    if (withdrawInputAmmount > 0 && withdrawInputAmmount < currentBalance) {
        updateTotal('withdraw-total', withdrawInputAmmount);
        updateBalance(withdrawInputAmmount, false)
    }
    if (withdrawInputAmmount > currentBalance) {
        const error = document.getElementById('error');
        error.innerText = 'Valo hoye Jaw Masud, Bank Hack kore eto soja na'
    }
});

