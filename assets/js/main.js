// Recebendo o valor do input inicial
let inputInsert = document.getElementById('insert')

let inputValue;

inputInsert.addEventListener('input', event => {
    inputValue = event.target.value.trim()

    inputValue = parseFloat(inputValue)

    console.log(inputValue)
})

// Recebendo os valores da Section 2

let allButtons = document.querySelectorAll('.buttonsvalue')

let porcentagemGorjeta;

for(let i = 0; i < allButtons.length; i++){

allButtons[i].addEventListener('click', (elemento) => {
    
    porcentagemGorjeta = parseFloat(elemento.target.value)
    despressionando()
    elemento.target.style.backgroundColor = "#26C2AD"
    elemento.target.style.color = "#00484E"
})

}
// função que desativa toda a coloração de botões pressionados
function despressionando(){
for(let i = 0; i < allButtons.length; i++){
    allButtons[i].style.backgroundColor = "#00474B"
    allButtons[i].style.color = "white"
}}