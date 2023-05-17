const form = document.getElementById('form_contact');

const contactName = document.getElementById('contact_name')
const contactNumber = document.getElementById('contact_number')

let lines = ''

let lineCount = []

form.addEventListener('submit', function(e){
    e.preventDefault();

    addLine()

    includeLine()

    countLine()
})

function addLine() {
    let line = '<tr>'
    line += `<td>${contactName.value}</td>`;
    line += `<td>${contactNumber.value}</td>`;
    line += `<td><a href="tel:+${contactNumber.value}"><img src="./Images/Chamar.png" ;alt="Icone de chamada"></a></td>`;
    line += '</tr>';

    lines += line;

    lineCount.push(contactNumber.value);

    contactName.value = '';
    contactNumber.value = '';
}

function includeLine() {
    tableBody = document.getElementById('table_body')

    tableBody.innerHTML = lines
}

function countLine() {
    lineCount.length

    lineTotal = '<tr>'
    lineTotal += `<td>Total de Contatos</td>`
    lineTotal += '<td></td>'
    lineTotal += `<td>${lineCount.length}</td>`
    
    tableFoot = document.getElementById('table_foot')

    tableFoot.innerHTML = lineTotal
}

contactNumber.addEventListener('change', function(){
    let catchNumber = contactNumber.value
    if (lineCount.includes(catchNumber)){
        alert('Esse número já está cadastrado')
        contactNumber.style.border = '1px solid red'
    }
    else {
        contactNumber.style.border = ''
    }
})


