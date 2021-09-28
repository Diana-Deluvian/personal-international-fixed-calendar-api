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
    "day12",
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

const Calendar = {
    year: "365",
    month: "28",
    biweeks: "14",
    newYearsDay: "1",
    leapYearsDay: "1",
    startDate: "1640041200000",
    ofsetDays: "11",
    milisecsInDay: "86400000"
};

// A full year is composed of 364 regular days, and one separete New Years Day
// The year starts on the 21st of December, which is generally when the winter solstice occurs
// in the northern hemisphere.
// On leap years, there is an extra day, called Leap Years Day, generally occuring on the 21st of June
// which is generally the summer solstice in the northern hemisphere
// start of date is defined through Unix epoch

let time = 1640041200000 + 366*Calendar.milisecsInDay - Calendar.startDate;

let getYear = () => {
    return Math.floor(time / (Calendar.year * Calendar.milisecsInDay))
}

let getMonth = () => {
    return Math.floor((time - (getYear() * Calendar.year * Calendar.milisecsInDay)) 
    / (Calendar.month * Calendar.milisecsInDay))
}

let getDay = () => {
    return Math.floor((time - getMonth() * Calendar.month * Calendar.milisecsInDay 
    - getYear()*Calendar.year* Calendar.milisecsInDay) 
    / Calendar.milisecsInDay);
}

let getDays = () => {
    return Math.floor((time - getYear()*Calendar.year* Calendar.milisecsInDay) 
    / Calendar.milisecsInDay);
}

console.log(getYear(),getMonth(),getDay());

let pifDate = {
    year: getYear() + 1,
    month: getMonth(),
    day: getDay()
}


getDate = () => {
    if(getYear() % 4 === 2 && getYear()%100 !== 2)  getDateLeapYear() 
    else if(getYear()% 400 === 2) getDateLeapYear() 
    else getDateRegularYear();
    
}

getDateRegularYear = () => {
    if(getMonth() === 13) return "New years day, year " + pifDate.year
    return "The year " +pifDate.year+ ", The month of " + months[pifDate.month]+", " + days[pifDate.day]
}

getDateLeapYear = () => {

}

document.getElementById("date").innerHTML = getDate();

//to implement leap years they occur every 4 years, skipped every 100, but not every 400