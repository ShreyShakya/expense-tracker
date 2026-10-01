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
    newExpense.textContent = `${expenseName} - ${expenseAmount}`
    expenseList.append(newExpense)

    //edit button
    const editBtn = document.createElement("button")
    editBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>
</svg>`

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
        newExpense.firstChild.nodeValue = `${expenseName} ${newAmount}`
        totalExpenseDisplay.textContent = `Total expense: ${calculateTotalExpense(expenses)}`
    })

    newExpense.append(editBtn)

    //remove button
    const removeBtn = document.createElement("button")
    removeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`
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

