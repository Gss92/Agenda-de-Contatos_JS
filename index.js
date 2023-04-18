const form = document.getElementById("formulary")
const contacts = []
const tels = []

let linhas = ""

form.addEventListener("submit", function(e) {
    e.preventDefault()

    addLine()
    updateTable()
})

function addLine() {
    const nameContacts = document.getElementById("formName")
    const telContacts = document.getElementById("formTel")

    if (contacts.includes(nameContacts.value)) {
        alert(`O contato ${nameContacts.value} já foi adicionado.`)
    }
    else if (tels.includes(telContacts.value)) {
        alert(`O telefone ${telContacts.value} já foi adicionado.`)
    } else {
        contacts.push(nameContacts.value)
        tels.push(telContacts.value)

        let linha = "<tr>"
        linha += `<td>${nameContacts.value}</td>`
        linha += `<td>${telContacts.value}</td>`
        linha += `</tr>`

        linhas += linha
    }

    nameContacts.value = ""
    telContacts.value = ""
}

function updateTable() {
    const bodyTable = document.querySelector("tbody")
    bodyTable.innerHTML = linhas
}