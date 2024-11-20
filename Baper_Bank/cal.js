let deposit = document.getElementById("deposit-button")
let withdraw = document.getElementById("withdraw-button")
let tDepositAmount = 0;
let tWithdraw = 0;
let totalAmount = 1200;


deposit.addEventListener("click", function () {
    let dep = document.getElementById("deposit-input").value;
    let depositedAmount = document.getElementById("deposited-amount")
    let totalBalance = document.getElementById("total-balance")

    tDepositAmount+=Number(dep);
    totalAmount+=Number(dep);

    depositedAmount.innerHTML =`${tDepositAmount}`
    totalBalance.innerHTML = `${totalAmount}`
    return;    
});

withdraw.addEventListener("click", function () {
    let dep = document.getElementById("withdraw-input").value;
    let withdrawAmount = document.getElementById("withdraw-amount")
    let totalBalance = document.getElementById("total-balance")

    if(totalAmount < Number(dep)){
        alert("You Dont Have enough mooonyyyyyyyyy!!!!")
        return;
    }
    tWithdraw += Number(dep);
    totalAmount -= Number(dep);

    withdrawAmount.innerHTML =`${tWithdraw}`
    totalBalance.innerHTML = `${totalAmount}`
    return;    
});
