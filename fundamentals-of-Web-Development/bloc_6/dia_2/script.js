function places(NamePlace) {
    let name = document.getElementById('estado');
    let option = document.createElement('option');
    name.appendChild(option).innerText = NamePlace
    name.lastChild.value = NamePlace    
}
let estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
for (let index = 0; index < estados.length; index += 1) {
    let rolete = estados[index]
    places(rolete);
}

let clickButtonCapture = document.getElementById('button-enviar')
clickButtonCapture.addEventListener('click', printData())

let clickButton = document.getElementById('button-enviar')
clickButton.addEventListener('click', preventDefault())

function preventDefault() {
    
}



function printData() {
    let nome = document.getElementById('text-area-1').value
    let email = document.getElementById('email-1').value
    let cpf = document.getElementById('cpf').value
    let endereco = document.getElementById('text-area-2').value
    let cidade = document.getElementById('city').value
    let estado = document.getElementById('estado').value
    let morada = document.getElementsByClassName('morada').value
    let resumo = document.getElementById('text-area-3').value
    let cargo = document.getElementById('cargo').value
    let descricaoCargo = document.getElementById('descricao-cargo').value
    // let data = document.getElementById('data').value

    
    document.getElementById('export-to-page').appendChild(document.createElement('p')).innerText = nome;
    console.log('entrou e o valor é ' + nome)
   
}

let overButton = document.getElementById('button-enviar')
overButton.addEventListener('mouseover', capture())

function capture() {
    let nome = document.getElementById('text-area-1').value
    let email = document.getElementById('email-1').value
    let cpf = document.getElementById('cpf').value
    let endereco = document.getElementById('text-area-2').value
    let cidade = document.getElementById('city').value
    let estado = document.getElementById('estado').value
    let morada = document.getElementsByClassName('morada').value
    let resumo = document.getElementById('text-area-3').value
    let cargo = document.getElementById('cargo').value
    let descricaoCargo = document.getElementById('descricao-cargo').value
    // let data = document.getElementById('data').value

    
    document.getElementById('export-to-page').appendChild(document.createElement('p')).innerText = nome;
    console.log('entrou e o valor é ' + nome)
   
}