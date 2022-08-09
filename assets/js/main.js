let clock = () => {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let time = `${hours}:${mins}:${secs}`;

    let period = "AM";
    if (hours == 0) hours = 12;

    if (hours > 12) {
    hours = hours - 12;
    period = "PM";   
}
console.log(time, period)
}

clock()


