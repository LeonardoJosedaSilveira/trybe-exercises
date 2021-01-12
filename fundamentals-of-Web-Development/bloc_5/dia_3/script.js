function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function addDaysOfMonth(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.getElementById('days')
  for (let index = 0; index < dezDaysList.length; index++) {
    const day = document.createElement('li');
    day.innerHTML = dezDaysList[index]
    day.className = 'day';
    if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31){
      day.classList.add ('holiday')
    }
    if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25){
      day.classList.add ('friday')
    }

    daysList.appendChild(day);
  }
}

addDaysOfMonth();

function bntHF(ButtonName, ButtonID) {
  const holday = ButtonName;
  const btid = ButtonID
  const bnt = document.createElement('button');
  let elementFather = document.querySelector('.buttons-container')

  bnt.id = ButtonID;
  bnt.innerHTML = ButtonName;
  elementFather.appendChild(bnt)
  
}

bntHF('Feriados', 'btn-holiday');

bntHF('Sexta-feira', 'btn-friday')

let clickHolidays = document.getElementById('btn-holiday');
clickHolidays.addEventListener('click', changeColor);

function changeColor() {

  let dayss = document.querySelectorAll('.holiday')
  for (let index = 0; index < dayss.length; index++) {
    let temp = dayss[index].className
    if (temp === 'day holiday' || temp === 'day holiday zoom' || temp === 'day holiday friday' || temp === 'day holiday friday zoom') {
      dayss[index].classList.add('changeDay')
    } else {
      dayss[index].classList.remove('changeDay')
    }
  }
  
}
  
let clickFriday = document.getElementById('btn-friday');
clickFriday.addEventListener('click', changeText)

 
function changeText() {
  
    let textoExibido = 'sextouuu'
    let dayss = document.querySelectorAll('.friday')
    const friday = ['4', '11', '18', '25']
    for (let index = 0; index < dayss.length; index++) {
      let temp = dayss[index].innerText
      
      if (temp === textoExibido) {
        dayss[index].innerText =friday[index] 
      } else {
        dayss[index].innerText = textoExibido
      }
    }
    console.log(textoExibido)
}


let mouseOnriba = document.querySelectorAll('#days li')
for (let index = 0; index < mouseOnriba.length; index++) {
  mouseOnriba[index].addEventListener('mouseover', zoom)
  mouseOnriba[index].addEventListener('mouseout', zoom)
  mouseOnriba[index].id = 'day' + index  
}


function zoom(zoomAki) {
  let mouseCima = zoomAki.target.className  
  if (mouseCima === 'day' || mouseCima === 'day friday' || mouseCima === 'day holiday' || mouseCima === 'day holiday friday' || mouseCima === 'day holiday changeDay' || mouseCima === 'day holiday friday changeDay') {
    zoomAki.target.classList.add('zoom')
  } else {
    zoomAki.target.classList.remove('zoom')
  }  
}





function task(parametroString) {
  let tarefa = document.createElement('span')
  let tarefaText = parametroString
  let father = document.querySelector('.tasks-container .my-tasks')
  father.appendChild(tarefa).innerText = tarefaText  
}

task('texto de teste')

// let bntAdd = document.getElementById('btn-add')
// bntAdd.addEventListener('click', task)
// // pegar texto document.getElementById('task-input').value




// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .

//     O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//     O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
// " .
