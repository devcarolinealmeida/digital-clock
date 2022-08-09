let clock = () => {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    let period = "AM";
    if (hours == 0)  {
        hours = 12;
    } else if (hours >= 12) {
        if (hours > 12) {
            hours = hours - 12;
            period = "PM"; 
        }
        hours = hours < 10 ? `0${hours}` : hours;
        mins = mins < 10 ? `0${mins}` : mins;
        secs = secs < 10 ? `0${secs}` : secs;
    }
    let time = `${hours}:${mins}:${secs} ${period}`;
    document.getElementById("clock").innerHTML = time
    setTimeout(clock, 1000)
}

clock()

//-------------------
// date - today

let todayIs = () => {
    let date = new Date();
    let today = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();
    
    today = today < 10 ? `0${today}` : today;
    currentMonth = currentMonth < 10 ? `0${currentMonth}` : currentMonth

    let timeToday = `${currentYear} - ${currentMonth} - ${today}`
    document.getElementById("date").innerHTML = timeToday
}

todayIs()

//-----------------


