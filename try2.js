// A full year is composed of 364 regular days, and one separete New Years Day
// The year starts on the 21st of December, which is generally when the winter solstice occurs
// in the northern hemisphere.
// On leap years, there is an extra day, called Leap Years Day, occuring on the 21st of June
// which is generally the summer solstice in the northern hemisphere

let months = [
    "First",
    "SecondM",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seventh",
    "Eight",
    "Ninth",
    "Tenth",
    "Eleventh",
    "Twelfth",
    "Thirteenth"
];

let days = [
    "Day1",
    "Day2",
    "Day3",
    "day4",
    "day5",
    "day6",
    "day7",
    "day8",
    "day9",
    "day10",
    "day11",
    "day12",
    "day13",
    "day14",
    "day15",
    "day16",
    "day17",
    "day18",
    "day19",
    "day20",
    "day21",
    "day22",
    "day23",
    "day24",
    "day25",
    "day26",
    "day27",
    "day28"
]

var now = new Date(2024, 5, 22);
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
console.log('Day of year: ' + day);

function leapyear(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
let pifDate = {};

const setpifDays = () => {
    if(leapyear(now.getFullYear())) {
        if(day===173) return "Summer solstice day!"
        if (day === 356) return "New Years day!"
        if(day > 356) return day - 356
        if(day > 173 && day < 356) return day + 9
        return day + 10

    } 
    else {
        if(day===355) return "New Years day!"
        if(day>355) return day - 355
        return day + 10
    }
}

pifDate.days = setpifDays();

const setpifYear = () => {
    if(pifDate.days < 11) return now.getFullYear() - 2020;
    return now.getFullYear() - 2021;
}

pifDate.year = setpifYear();


const setPifMonth = () => {
    return months[Math.floor(pifDate.days/28)]
}

pifDate.month = setPifMonth();

const setPifDay = () => {
    return days[pifDate.days % 28 - 1]
}

pifDate.day = setPifDay();

pifDate.fullDate = `The year ${pifDate.year}, the month of ${pifDate.month}, day ${pifDate.day}`;

document.getElementById("date").innerText = pifDate.fullDate;