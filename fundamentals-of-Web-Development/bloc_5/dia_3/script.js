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
    if (temp === 'day holiday' || temp === 'day holiday friday') {
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


// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

//     É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

