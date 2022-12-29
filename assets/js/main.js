// Recebendo o valor do input inicial
const inputInsert = document.getElementById('insert')

let inputValue;

inputInsert.addEventListener('input', event => {
    inputValue = event.target.value.trim()

    inputValue = parseFloat(inputValue)
})

// Recebendo os valores da Section 2

const allButtons = document.querySelectorAll('.buttonsvalue')

let porcentagemGorjeta;

for(let i = 0; i < allButtons.length; i++){

allButtons[i].addEventListener('click', (elemento) => {
    
    porcentagemGorjeta = parseFloat(elemento.target.value)
    despressionando()
    elemento.target.style.backgroundColor = "#26C2AD"
    elemento.target.style.color = "#00484E"
    inputCustom.value = ""
})
}
const inputCustom = document.getElementById('custom')
let customValue;

inputCustom.addEventListener('input', event => {
    despressionando()
    customValue = event.target.value.trim()

    customValue = parseFloat(customValue)

    porcentagemGorjeta = customValue / 100

})
// função que desativa toda a coloração de botões pressionados
function despressionando(){
for(let i = 0; i < allButtons.length; i++){
    allButtons[i].style.backgroundColor = "#00474B"
    allButtons[i].style.color = "white"
}}

// Recebendo o valor de quantas pessoas são pra pagar a conta 
const inputPerson = document.getElementById('person')
let PersonValue;

inputPerson.addEventListener('input', event => {
    PersonValue = event.target.value.trim()
    PersonValue = parseInt(PersonValue)

    gerandoTotal()
})

// Gerando o resultado final 
const InserirGorjeta = document.getElementById('gorjeta')
const InserirTotal = document.getElementById('total')

function gerandoTotal (){
let valorTotal;
let gorjeta;

valorTotal = (inputValue + (inputValue * porcentagemGorjeta)) / PersonValue
gorjeta = (inputValue * porcentagemGorjeta) / PersonValue

InserirGorjeta.innerHTML = "$" + gorjeta.toFixed(2)
InserirTotal.innerHTML = "$" + valorTotal.toFixed(2)

}

// Gerando Reset

const buttonReset = document.getElementById('reset')
buttonReset.addEventListener('click', () => {
    despressionando()
    inputCustom.value = ""
    inputPerson.value = ""
    inputInsert.value = ""
    InserirTotal.innerHTML = "$00.00"
    InserirGorjeta.innerHTML = "$00.00"
})