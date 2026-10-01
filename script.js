let expenses = [{
    name: 'Phone',
    amount: 52999
}, {
    name: 'Laptop',
    amount: 140000
}, {
    name: 'Mouse',
    amount: 1000
}]

const expenseNameInput = document.querySelector('#expenseNameInput')
const expenseAmountInput = document.querySelector('#expenseAmountInput')
const addExpenseBtn = document.querySelector('#addExpenseBtn')
const expenseList = document.querySelector('#expenseList')
const totalExpenseDisplay = document.querySelector("#totalExpense")

addExpenseBtn.addEventListener("click", function () {
    const expenseName = expenseNameInput.value
    const expenseAmount = Number(expenseAmountInput.value)

    if (expenseName === "" || expenseAmount === 0) {
        alert('Please fill the required fields first!')
        return
    } else if (expenseAmount < 0) {
        alert('Please enter an appropriate amount!')
        return
    }

    const newExpenseData = {
        name: expenseName,
        amount: expenseAmount
    }

    expenses.push(newExpenseData)
    expenseNameInput.value = ""
    expenseAmountInput.value = ""

    let totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0)
    totalExpenseDisplay.textContent = `Total expense: ${totalExpense}`

    const newExpense = document.createElement("li")
    newExpense.textContent = `${expenseName} — ${expenseAmount}`
    expenseList.append(newExpense)

    let currentExpense = expenses.indexOf(newExpenseData)

    const removeBtn = document.createElement("button")
    removeBtn.textContent = "Remove"
    removeBtn.addEventListener("click", function () {
        newExpense.remove()
        expenses.splice(currentExpense, 1)
        let totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0)
        totalExpenseDisplay.textContent = `Total expense: ${totalExpense}`
    })

    newExpense.append(removeBtn)
})

