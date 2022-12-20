// A full year is composed of 364 regular days, and one separete New Years Day
// The year starts on the 21st of December, which is generally when the winter solstice occurs
// in the northern hemisphere.
// On leap years, there is an extra day, called Leap Years Day, occuring on the 21st of June
// which is generally the summer solstice in the northern hemisphere

const months = [
    "Hope",
    "Growth",
    "Bravery",
    "Prosperity",
    "Love",
    "Resolve",
    "Struggle",
    "Pennance",
    "Fear",
    "Longing",
    "Preparation",
    "Desperation",
    "Nightmares"
];

const days = [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Day 5",
    "Day 6",
    "Day 7",
    "Day 8",
    "Day 9",
    "Day 10",
    "Day 11",
    "Day 12",
    "Day 13",
    "Day 14",
    "Day 15",
    "Day 16",
    "Day 17",
    "Day 18",
    "Day 19",
    "Day 20",
    "Day 21",
    "Day 22",
    "Day 23",
    "Day 24",
    "Day 25",
    "Day 26",
    "Day 27",
    "Day 28"
];

const years = [
    "The before times",
    "Unravel",
    "Imbibe"
    ];

var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
//makes sure to account for daylight savings times
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

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
    const year = now.getFullYear();
    if(pifDate.days < 11) return years[year - 2020] || year - 2020;
    return years[year - 2021] || year - 2021 ;
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

pifDate.fullDate = `The year "${pifDate.year}", the month of ${pifDate.month}, ${pifDate.day}`;

function convertBack(pif){
    let year, month = 0, days;
    if(pif.days < 11) {
        year = (years.indexOf(pif.year) || pif.year) + 2020;
        console.log(year);
        days = pif.days + 355;
        console.log("one", days)
    }
    else { 
        year = (years.indexOf(pif.year) || pif.year) + 2021;
        days = pif.days - 10;
        console.log("two", days)
    }
    if(pif.days === "New Years day!") days = 355;
    //month is 0 because we don't need to do the calculations ourselves
    if(leapyear(year)) {
        if(pif.days === "Summer solstice day!") days = 173;
        if(pif.days > 182 && pif.days < 366) days = pif.days - 9;
        if(pif.days < 11) days = pif.days+356;
        if(pif.days < 183) days = pif.days - 10;
        if(pif.days === "New Years day!") days = 356;
        console.log("three", days)
    }
    return new Date(Date.UTC(year, month, days));
    // error - it moves the hours 1 hour back and thus give sthe wrong date, look into
}

function getpifDate() {
    return pifDate;
}


module.exports = {
    getpifDate, convertBack
};



