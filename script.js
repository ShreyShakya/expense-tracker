let expenses = [{
    name: 'Phone',
    amount: 52999
}, {
    name: 'Laptop',
    amount: 140000
}, {
    name: 'Mouse',
    amount: 1000
} ]

const expenseNameInput = document.querySelector('#expenseNameInput')
const expenseAmountInput = document.querySelector('#expenseAmountInput')
const addExpenseBtn = document.querySelector('#addExpenseBtn')
const expenseList = document.querySelector('#expenseList')
const totalExpenseDisplay = document.querySelector("#totalExpense")

addExpenseBtn.addEventListener("click", function() {
    const expenseName = expenseNameInput.value
    const expenseAmount = Number(expenseAmountInput.value)
    expenses.push({name: expenseName, amount: expenseAmount})
    expenseNameInput.value = ""
    expenseAmountInput.value = ""

    let totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0)
    totalExpenseDisplay.textContent = `Total expense: ${totalExpense}`
    
    const newExpense = document.createElement("li")
    newExpense.textContent = `${expenseName} ${expenseAmount}`
    expenseList.append(newExpense)
})

