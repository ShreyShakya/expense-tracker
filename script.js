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

    //remove button
    const removeBtn = document.createElement("button")
    removeBtn.textContent = "Remove"
    removeBtn.addEventListener("click", function () {
        let currentExpense = expenses.indexOf(newExpenseData)
        newExpense.remove()
        expenses.splice(currentExpense, 1)
        totalExpenseDisplay.textContent = `Total expense: ${calculateTotalExpense(expenses)}`
    })

    newExpense.append(removeBtn)

    //edit button
    const editBtn = document.createElement("button")
    editBtn.textContent = "Edit"
    editBtn.addEventListener("click", function () {
        const newAmount = Number(prompt("Enter the new amount: "))
        if (newAmount === 0) {
            alert('Please fill the required fields first!')
            return
        } else if (newAmount < 0) {
            alert('Please enter an appropriate amount!')
            return
        } else if (Number.isNaN(newAmount)) {
            alert('Please enter an appropriate amount!')
            return
        }
        newExpenseData.amount = newAmount
        newExpense.firstChild.nodeValue = `${expenseName} — ${newAmount}`
        totalExpenseDisplay.textContent = `Total expense: ${calculateTotalExpense(expenses)}`
    })

    newExpense.append(editBtn)
})

clearExpensesBtn.addEventListener("click", function () {
    expenses.length = 0
    expenseList.replaceChildren()
    totalExpenseDisplay.textContent = `Total expense: ${calculateTotalExpense(expenses)}`

})

