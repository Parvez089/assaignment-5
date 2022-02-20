const CalculateBtn = document.getElementById('Calculate-btn')
const SaveBtn = document.getElementById('save-btn')
const expensesTotal = document.getElementById('expenses-total')
const balanceTotal  = document.getElementById('balance-total')
const  savingAmount = document.getElementById('saving-amount')
const remainingBalance  = document.getElementById('remaining-balance')


function getInputValue(boxID){
    let inputBox = document.getElementById(boxID)
   
    let inputAmount = parseFloat(inputBox.value)
    if(isNaN(inputAmount) && inputAmount < 0 ){ 
        inputBox.value =''
        return alert('please input valid amount of money number format')
    }
    inputBox.value =''
    return inputAmount
}
// updet Balance 
CalculateBtn.addEventListener('click', function (event){
    event.preventDefault()
    let availableAmount = parseFloat(balanceTotal.innerText)
    let inputAmount = getInputValue('Income-box')
    
    
    if(inputAmount > 0){
        balanceTotal.innerText = inputAmount + availableAmount;
    }
    
})
CalculateBtn.addEventListener('click', function (event){
    event.preventDefault()
    let foodAmount = parseFloat(expensesTotal.innerText)
    let costAmount = getInputValue('food-box')
    // console.log(inputAmount)
   
    if(costAmount > 0){
        expensesTotal.innerText = costAmount + foodAmount;
    }
    let rentAmount = parseFloat(expensesTotal.innerText)
    let parvezAmount = getInputValue('rent-box')
    if(parvezAmount > 0){
        expensesTotal.innerText = parvezAmount + rentAmount;
    }
    let clothesAmount = parseFloat(expensesTotal.innerText)
    let lastAmount = getInputValue('clothes-box')
    if(lastAmount > 0){
        expensesTotal.innerText = lastAmount + clothesAmount;
    }
    balanceTotal.innerText =  availableAmount  - (foodAmount + rentAmount + clothesAmount)
})


SaveBtn.addEventListener('click', function (event){
    event.preventDefault
    let savebox = document.getElementById('save-input')
    console.log(savebox)
    let saveBalance = parseFloat( savingAmount.innerText)
    let saveAmount = parseFloat(savebox.value)
    savingAmount.innerText =  saveAmount + saveBalance

})

let saveAmount = document.getElementById('balance-total');
let updatepreviousBalanceText = updateBalanceTotal.innerText;
let updatepreviousBalanceTotal = parseFloat(updatepreviousBalanceText);
let newBalanceTotal = updatepreviousBalanceTotal - expensesAmount;


// CalculateBtn.addEventListener('click', function(event){
//    event.preventDefault

//     let IncomeBox = document.getElementById('Income-box')
//         let availableBalance = parseFloat(balanceTotal.innerText)
//         let inputAmount =  parseFloat(IncomeBox.value) 
//         if(isNaN(inputAmount) || inputAmount <0 ){ 
//             IncomeBox.value =''
//             return alert('please input valid amount of money number format')
//         }
//         // let availableAmount = parseFloat(balanceTotal.innerText)
//         balanceTotal.innerText = inputAmount + availableBalance
//         IncomeBox.value =''

//         let foodBox = document.getElementById('food-box')
//         let foodBalance = parseFloat(expensesTotal.innerText)
//         let foodAmount = parseFloat(foodBox.value)
//         if(isNaN(foodAmount) || foodAmount <0 ){ 
//             foodBox.value =''
//             return alert('please input valid amount of money number format')
//         }
//        expensesTotal.innerText = foodAmount + foodBalance
//         foodBox.value =''
// })