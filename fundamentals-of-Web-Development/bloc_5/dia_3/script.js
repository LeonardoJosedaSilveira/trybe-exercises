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
    if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 30){
      day.classList.add ('holiday')
    }
    if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25){
      day.classList.add ('friday')
    }

    daysList.appendChild(day);
  }
}

addDaysOfMonth();

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

//     Adicione a este botão a ID "btn-holiday" .
//     Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .



