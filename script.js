const day = document.querySelectorAll('.bar-title');
const bar = document.querySelectorAll('.bar');
const date = new Date();
const dinValue = document.querySelectorAll('.o');

function weekDay() {
  const currentDay = date.getDay();
  switch (currentDay) {
    case 0:
      bar[currentDay].style.backgroundColor = '#76b5bc';
      break;
    case 1:
      bar[currentDay].style.backgroundColor = '#76b5bc';
      break;
    case 2:
      bar[currentDay].style.backgroundColor = '#76b5bc';
      break;
    case 3:
      bar[currentDay].style.backgroundColor = '#76b5bc';
      break;
    case 4:
      bar[currentDay].style.backgroundColor = '#76b5bc';
      break;
    case 5:
      bar[currentDay].style.backgroundColor = '#76b5bc';
      break;
    case 6:
      bar[currentDay].style.backgroundColor = '#76b5bc';
      break;
    default:
      break;
  }
}

function handleDay(eachDay, index, response) {
  const d = eachDay;
  d.innerText = response[index].day;
}

function handleBar(eachBar, index, response) {
  const b = eachBar;
  b.style.height = `${(response[index].amount) * 2.5}px`;
  dinValue.forEach((eachDinValue, i) => {
    const eachDinValueText = eachDinValue;
    eachDinValueText.innerText = `$${response[i].amount}`;
  });
}

fetch('./data.json')
  .then((response) => response.json())
  .then((response) => {
    day.forEach((eachDay, index) => {
      handleDay(eachDay, index, response);
    });
    bar.forEach((eachBar, index) => {
      handleBar(eachBar, index, response);
    });
  });

weekDay();
