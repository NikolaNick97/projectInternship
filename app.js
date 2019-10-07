//data Object {day,temp,days[]}
const weatherData = {
    tempUnit: "C",
    windSpeedUnit: "m/s",
    days: [
        { day: "Monday", temp: 22, windDirection: "north-east", windSpeed: 10, type: "sunny" },
        { day: "Tuesday", temp: 14, windDirection: "north-west", windSpeed: 14, type: "rainy" },
        { day: "Wednesday", temp: 17, windDirection: "south-east", windSpeed: 20, type: "sunny" },
        { day: "Thursday", temp: 17, windDirection: "south-west", windSpeed: 7, type: "cloudly" },
        { day: "Friday", temp: 18, windDirection: "south", windSpeed: 12, type: "rainy" },
        { day: "Saturday", temp: 20, windDirection: "north-east", windSpeed: 7, type: "cloudly" },
        { day: "Sunday", temp: 25, windDirection: "north", windSpeed: 5, type: "sunny" }
    ]
}
let i = 0;
weatherData.days.forEach(el => {
    i++;
    document.getElementById("day-" + i).textContent = el.day;
    document.getElementById("temp-" + i).textContent = el.temp;
});
$(document).ready(() => {
    let j = $('li>selected').attr('id');
    console.log(j);
});

function getWeatherDataByDays(id) {
    const { day, temp, windDirection, windSpeed, type } = weatherData.days[id - 1];
    document.getElementById("htemp").innerHTML = `temperature: ${temp} ${weatherData.tempUnit}`;
    document.getElementById("hday").innerHTML = `day: ${day}`;
    document.getElementById("pwindspeed").innerHTML = `windspeed: ${windSpeed} m/s`;
    document.getElementById("ptype").innerHTML = `type: ${type}`;

    let windOrientation;
    switch (windDirection) {
        case 'north':
            windOrientation = 'north';
            break;
        case 'north-east':
            windOrientation = 'north_east';
            break;
        case 'east':
            windOrientation = 'east'
            break;
        case 'south-east':
            windOrientation = 'south_east'
            break;
        case 'south':
            windOrientation = 'south'
            break;
        case 'south-west':
            windOrientation = 'south_west'
            break;
        case 'west':
            windOrientation = 'west'
            break;
        case 'north-west':
            windOrientation = 'north_west'
            break;
        default:
            break;
    }

    document.getElementById("arrow").className = windOrientation;

}