let expenses = []

const expenseNameInput = document.querySelector('#expenseNameInput')
const expenseAmountInput = document.querySelector('#expenseAmountInput')
const addExpenseBtn = document.querySelector('#addExpenseBtn')
const expenseList = document.querySelector('#expenseList')
const totalExpenseDisplay = document.querySelector("#totalExpense")
const clearExpensesBtn = document.querySelector('#clearExpensesBtn')

function calculateTotalExpense(arr) {
    return arr.reduce((total, expense) => total + expense.amount, 0)
}
totalExpenseDisplay.textContent = `Total expense: ${calculateTotalExpense(expenses)}`

addExpenseBtn.addEventListener("click", function () {
    const expenseName = expenseNameInput.value
    const expenseAmount = Number(expenseAmountInput.value)

    if (expenseName === "" || expenseAmount === 0) {
        alert('Please fill the required fields first!')
        return
    } else if (expenseAmount < 0) {
        alert('Please enter an appropriate amount!')
        return
    } else if (Number.isNaN(expenseAmount)) {
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

    totalExpenseDisplay.textContent = `Total expense: ${calculateTotalExpense(expenses)}`

    const newExpense = document.createElement("li")
    newExpense.textContent = `${expenseName} — ${expenseAmount}`
    expenseList.append(newExpense)


    const removeBtn = document.createElement("button")
    removeBtn.textContent = "Remove"
    removeBtn.addEventListener("click", function () {
        let currentExpense = expenses.indexOf(newExpenseData)
        newExpense.remove()
        expenses.splice(currentExpense, 1)
        totalExpenseDisplay.textContent = `Total expense: ${calculateTotalExpense(expenses)}`
    })

    newExpense.append(removeBtn)
})

clearExpensesBtn.addEventListener("click", function () {
    expenses.length = 0
    expenseList.replaceChildren()
    totalExpenseDisplay.textContent = `Total expense: ${calculateTotalExpense(expenses)}`

})

