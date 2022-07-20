const daysE1=document.getElementById("days");
const hoursE1=document.getElementById("hours");
const minsE1=document.getElementById("mins");
const secondsE1=document.getElementById("seconds");



const DOB = "9 August 2022"

function countdown() {
    const DOBirth = new Date(DOB);
    const currentDate = new Date();

    const totalSeconds=(DOBirth-currentDate)/1000;

    const days= Math.floor(totalSeconds/(24*3600));
    const hours=Math.floor(totalSeconds/3600) % 24 ;
    const mins= Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds)%60;

    daysE1.innerHTML =days;
    hoursE1.innerHTML = format(hours);
    minsE1.innerHTML= format(mins);
    secondsE1.innerHTML=format(seconds);
}

function format(time) {
    return time<10?'0${time}':time;
}

countdown();

setInterval(countdown,1000);
