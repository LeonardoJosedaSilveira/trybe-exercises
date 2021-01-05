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
    console.log(rolete)
}