document.getElementById('deposit-button').addEventListener('click', function(){
    /// get input value
    const depositFiled = document.getElementById('deposit-Amount-input-field')
    const currentDeposit = parseFloat(depositFiled.value)
    // console.log(deposit)


    /// get total deposit
    const depositTotalField = document.getElementById('cashInHand')
    const previousDepositTotal = parseFloat(depositTotalField.innerText)

    // sum current + previous 
    const totalDeposit = currentDeposit + previousDepositTotal

    // set input value to  deposit total
    depositTotalField.innerText = totalDeposit;

    // get total balance 
    const balanceField = document.getElementById('cashBalance')
    const totalBalance = parseFloat(balanceField.innerText);

    // set new balance 
    balanceField.innerText = totalBalance + currentDeposit

    /// clear deposit input field
    depositFiled.value = '';
    
})