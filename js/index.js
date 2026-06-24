function showTime(){
    let date = new Date();
    document.getElementById("clock").innerHTML =
    date.toLocaleTimeString();
}

setInterval(showTime,1000);