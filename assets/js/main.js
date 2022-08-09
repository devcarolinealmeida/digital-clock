let clock = () => {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let time = `${hours}:${mins}:${secs}`;
    console.log(time)
}

clock()
