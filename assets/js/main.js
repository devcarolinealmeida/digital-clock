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




