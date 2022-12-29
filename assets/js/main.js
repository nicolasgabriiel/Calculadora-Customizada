// Recebendo o valor do input inicial
let inputInsert = document.getElementById('insert')

let inputValue;

inputInsert.addEventListener('input', event => {
    inputValue = event.target.value.trim()

    inputValue = parseFloat(inputValue)

    console.log(inputValue)
})

