const months = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre"
];

const days = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
let futureDate = new Date(2020,11,09,11,15,0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();


let month = futureDate.getMonth();
let day = futureDate.getDay();



giveaway.textContent = `Le cursus se termine ${days[day]} ${date} ${months[month]} ${year} à  ${hours}:${minutes}`;

// Future time in ms
const futurTime = futureDate.getTime();


function getRemainingTime(){
const today = new Date().getTime();
const timeRemaining = futurTime - today;

// Values in ms 
const oneDay = 24*60*60*1000;
const oneHour = 60*60*1000;
const oneMinute = 60*1000;
// Calculate all values
let days = Math.floor(timeRemaining/oneDay);
let hours = Math.floor((timeRemaining%oneDay)/oneHour);
let minutes = Math.floor((timeRemaining%oneHour)/oneMinute);
let secs = Math.floor((timeRemaining%oneMinute)/1000);

// format numbers values with 2 digit
function format(item){
    if(item < 10){
        return item = `0${item}`;
    }
    return item;
}

const values = [days, hours, minutes, secs];

items.forEach(function(item,index) {
    item.textContent = format(values[index]);
});
};

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();

