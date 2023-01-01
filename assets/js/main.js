// Recebendo o valor do input inicial
const inputInsert = document.getElementById('insert')

let inputValue = 0;

inputInsert.addEventListener('input', event => {
    inputValue = event.target.value.trim()

    inputValue = parseFloat(inputValue)
    gerandoTotal()
    console.log(inputValue)
})

// Recebendo os valores da Section 2

const allButtons = document.querySelectorAll('.buttonsvalue')

let porcentagemGorjeta = 0;

for(let i = 0; i < allButtons.length; i++){

allButtons[i].addEventListener('click', (elemento) => {
    
    porcentagemGorjeta = parseFloat(elemento.target.value)
    despressionando()
    elemento.target.style.backgroundColor = "#26C2AD"
    elemento.target.style.color = "#00484E"
    inputCustom.value = ""
    gerandoTotal()
})
}
const inputCustom = document.getElementById('custom')
let customValue = 0;

inputCustom.addEventListener('input', event => {
    despressionando()
    customValue = event.target.value.trim()

    customValue = parseFloat(customValue)

    porcentagemGorjeta = customValue / 100

    gerandoTotal()

})
// função que desativa toda a coloração de botões pressionados
function despressionando(){
for(let i = 0; i < allButtons.length; i++){
    allButtons[i].style.backgroundColor = "#00474B"
    allButtons[i].style.color = "white"
}}

// Recebendo o valor de quantas pessoas são pra pagar a conta 
const inputPerson = document.getElementById('person')
let PersonValue = 1;

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

InserirGorjeta.innerText = "$" + gorjeta.toFixed(2)
InserirTotal.innerText = "$" + valorTotal.toFixed(2)

if(InserirTotal.innerText !== "$0.00"){
    buttonReset.style.backgroundColor = "#30C2AF"
    buttonReset.style.color = "00474B"
}
if(InserirTotal.innerText === "$0.00"){
    buttonReset.style.backgroundColor = "#0C686D"
    buttonReset.style.color = "045D63"
}

}

// Gerando Reset

const buttonReset = document.getElementById('reset')
buttonReset.addEventListener('click', () => {
    despressionando()
    inputCustom.value = ""
    porcentagemGorjeta = 0
    inputPerson.value = ""
    PersonValue = 1
    inputInsert.value = ""
    inputValue = 0
    InserirTotal.innerHTML = "$0.00"
    InserirGorjeta.innerHTML = "$0.00"
})

// Verificar o Reset

if(InserirTotal.innerText !== "$0.00"){
    buttonReset.style.backgroundColor = "red"
}
