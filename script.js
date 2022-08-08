/*
var car = {
    producer:  'Audi AG',
    model: 'A6',
    'graduation year': 2020,
    'average speed': 150,
    'fuel tank capacity': 80,
    'average fuel consumption per 100 km.': 6.6,
    drivers: 1
};

for (const property in car) {
    console.log(`${property}: ${car[property]}`);
  }
car.driverName = 'Nick';
console.log(car.driverName);

car.distance= prompt('specify the distance');
car.time = Math.floor(car.distance/car['average speed']);
console.log(car.time);
car['amount of fuel'] = ((car.distance*car['average fuel consumption per 100 km.'])/100);
car.time = car.time + (Math.floor(car.time/4));
*/


var clockH = document.getElementById('hoursOutput');
var clockM = document.getElementById('minutesOutput');
var clockS = document.getElementById('secondsOutput');

function createDate() {
  var date = new Date();

  var seconds = date.getSeconds() + Number(secondsInput.value);
  var minutes = date.getMinutes() + Number(minutesInput.value);
  var hours = date.getHours() + Number(hoursInput.value);

  for (seconds; seconds > 59; seconds -= 59) {
    minutes++
  }
  if (seconds.toString().length < 2) {
    seconds = '0' + seconds;
  }
  clockS.textContent = seconds;



  for (minutes; minutes > 59; minutes -= 59) {
    hours++
  }
  if (minutes.toString().length < 2) {
    minutes = '0' + minutes;
  }
  clockM.textContent = minutes + ' :';


  for (hours; hours > 23; hours -= 24) {
  }
  if (hours.toString().length < 2) {
    hours = '0' + hours;
  }
  clockH.textContent = hours + ' :';


}
createDate();
setInterval(createDate, 1000);
